import tests_seats from "../fixtures/seats.json";
import tests_logins from "../fixtures/login.json";
import login_admin from "../fixtures/login_admin.json";
import selectors from "../fixtures/selectors.json";

describe('Бронирование билетов', () => {
  /*beforeEach(() => {
    cy.visit("/");
  })*/

  it("Главная страница отображается корректно", () => {
    cy.visit("/");
    cy.get(selectors.class_days).should("have.length", 7);
    cy.contains("Идёмвкино").should("be.visible");
    //const sel = selectors.sel_movies;
    //debugger
    cy.get(selectors.class_movie).should("be.visible");
  });

  //вход в админку
  tests_logins.forEach((test) => {
    it(test.name, () => {
      test.data.forEach((login) => {
        cy.visit("admin");
        cy.get(selectors.admin_email).type(login.login);
        cy.get(selectors.admin_pass).type(login.pass);
        cy.get(selectors.admin_login_button).click();
        cy.contains("Администраторррская").should("be.visible");
      });
    });
  })

  //бронирование мест вариант 1
  /*tests_seats.forEach((test) => {
    it(test.name, () => {
      cy.visit("admin");
      cy.get(selectors.admin_email).type(login_admin.login);
      cy.get(selectors.admin_pass).type(login_admin.pass);
      cy.get(selectors.admin_login_button).click();
      cy.contains("Администраторррская").should("be.visible");

      const my_movie = test.movie;
      //cypress возвращает undefined для команды ниже,
      //const my_movie = cy.get(".conf-step__seances-movie-title").last().innerText;
      //поэтому возьмем название фильма из fixture  и проверим, что в админке этот фильм вставлен в сетку сеансов
      cy.get(selectors.class_admin_seances)
        .contains(my_movie)
        .should("be.visible");

      cy.visit("/");
      const day = test.day;
      //cy.get(`.page-nav__day:nth-of-type(${day})`).click();
      //cy.get(".page-nav__day:nth-of-type(" + day + ")").click();
      cy.get(selectors.concrete_day + day + ")").click();

      cy.contains(my_movie)
        .parent(selectors.class_movie_description)
        .parent(selectors.class_movie_info)
        .parent(selectors.class_movie)
        .find(selectors.class_movie_seances_time)
        .not(selectors.class_acceptin_button_disabled)
        .as("my_seance");

      if ((cy.get("@my_seance").length = 0)) {
        console.log(`Все сеансы на {$my_movie} недоступны`);
        return;
      }

      cy.get("@my_seance").first().click();
      test.data.forEach((chair) => {
        //cy.get(`.buying-scheme__wrapper > :nth-child(${chair.row}) > :nth-child(${chair.seat})`).click();
        cy.get(
          selectors.class_buying_scheme_wrapper +
            selectors.child +
            chair.row +
            ")" +
            selectors.child +
            chair.seat +
            ")"
        ).click();
      });

      cy.get(selectors.class_acceptin_button).click();
      cy.contains("Вы выбрали билеты").should("be.visible");
    });
  });*/
  

 //бронирование мест вариант 2
  tests_seats.forEach((test) => {

    it(test.name, () => {
      cy.visit("admin");
      if ((cy.get(selectors.admin_email).length != 0)) {
        cy.get(selectors.admin_email).type(login_admin.login);
        cy.get(selectors.admin_pass).type(login_admin.pass);
        cy.get(selectors.admin_login_button).click();
        cy.contains("Администраторррская").should("be.visible");
      };

      cy.fixture('movies').then((my_movies) => {
        //cypress возвращает undefined для команды ниже (формулировка Задачи 1 нуждается в доработке!!!),
        //const my_movie = cy.get(".conf-step__seances-movie-title").last().innerText;
        //поэтому возьмем название фильма из fixture  и проверим, что в админке этот фильм вставлен в сетку сеансов
        my_movies.forEach((my_movie) => {
          cy.visit("admin");
          
          cy.get(selectors.class_admin_seances)
            .contains(my_movie)
            .should("be.visible");

          cy.fixture("days").then((days) => {
            days.forEach((day) => {
              console.log(day);
              cy.visit("/");
              //переходим на определенный день
              cy.get(selectors.concrete_day + day + ")").click();
              //ищем первый доступный сеанс на определенный фильм

              cy.contains(my_movie)
                .parent(selectors.class_movie_description)
                .parent(selectors.class_movie_info)
                .parent(selectors.class_movie)
                .find(selectors.class_movie_seances_time)
                .not(selectors.class_acceptin_button_disabled)  //этот not не работает! Не пойму почему
                .as("my_seance");
              //debugger;
              if ((cy.get("@my_seance").length = 0)) {  //проверка на длину массива не работает! Не пойму почему
                console.log(`Все сеансы на {$my_movie} недоступны`);
                return;
              }

              cy.get("@my_seance").first().click();
              test.data.forEach((chair) => {
                
                cy.get(
                  selectors.class_buying_scheme_wrapper +
                    selectors.child +
                    chair.row +
                    ")" +
                    selectors.child +
                    chair.seat +
                    ")"
                ).click();
              });

              cy.get(selectors.class_acceptin_button).click();
              cy.contains("Вы выбрали билеты").should("be.visible");
            });
          });
        });
        

        
          
          

          

          
      })
      
      

      
      
      

      
    });
  });
})