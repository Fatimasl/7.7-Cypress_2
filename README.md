# Домашнее задание к занятию «7.7. Cypress 2»

Любые вопросы по решению задач задавайте в чате учебной группы.

Не забывайте про важные моменты, без которых работы не будут приниматься на проверку: 
- корректное оформление репозиториев;
- использование .gitignore;
- форматирование кода.

---

  ## Задача 1. Cypress. Установка и настройка проекта

 1. Изучите [приложение](https://github.com/Evgeniy-Varlamov/FS21-diplom) для работы с бронирование билетов в кино.
 2. Приложение в процессе разработки, и многие функциональности ещё не готовы. Вы можете тестировать бронирование билетов, логин в админку.
 3. Создайте новый проект для тестов на Cypress.
 4. Создайте:
 - spec-тест с тестами для проверки корректности отображения главной страницы;
 - spec-тест для проверки логина в админку. Используйте фикстуру для хранения тестовых данных: минимум 2 набора — happy и sad path;
 - spec-тест с UI-тестом для бронирования фильма в доступный зал, название которого вы получаете из админки.

 5. Сделайте рефакторинг кода так, чтобы данные обо всех селекторах хранились в фикстурах.
 6. Пришлите ссылку на репозиторий в качестве результата выполнения домашнего задания
  
  * Не забывайте заводить issue в случае отклонений в поведении системы как приложения, так и в реализации тестов. Если технически невозможно реализовать тест по какой-либо причине, то добавьте issue, оставьте тест падающим. Тест должен присутствовать.
  
  ## Задача 2. Подключение Dashboard
  
  1. Поключите ваш проект к Dashboard. Помните, что он будет иметь уникальные идентификаторы.
  2. Запустите тесты так, чтобы результаты отображались на Dashboard.
  3. Настройте публичный доступ к вашему проекту и пришлите ссылку на ваш Dashboard, как результат здания.

  ## Задача 3. Интеграционные тесты
  
  1. Создайте новый проект с test suite (используйте `describe()`) с API-тестами для [проекта](https://petstore.swagger.io/#/).
  
  В вашем наборе должны быть тесты для проверки:
  - создания пользователя;
  - правки пользователя;
  - удаления пользователя.

  Тесты должны быть независимыми друг от друга и выполняться в любом порядке. Рекомендуем использовать кастомные команды, так как вам придётся повторять одни и те же предусловия для разных тестов.
  
  2. Поключите ваш проект к Dashboard. Помните, что он будет иметь уникальные идентификаторы.
  3. Запустите тесты так, чтобы результаты отображались на Dashboard.
  4. Настройте публичный доступ к вашему проекту и пришлите ссылку на ваш Dashboard, а также репозитарий с API тестами, как результат задания.
  
 **Важно: не забывайте про использование принципа DRY везде, где это необходимо.**