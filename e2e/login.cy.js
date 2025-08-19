describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('login.qa.studio'); // Зайти на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка слово "забыли пароль" (сенего цвета)
         cy.get('#mail').type('Cfg.VALID'); // ввел верный логин
         cy.get('#pass').type('Cfg.VALID'); // ввел верный пароль
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка крестика
     
        }) 
        it('Проверить "Забыли пароль"', function () {
            cy.visit('login.qa.studio'); // Зайти на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка слово "забыли пароль" (синего цвета)
            cy.get('#forgotEmailButton').click(); // нажать на "Забыли пароль"
            cy.get('#mailForgot').type('Cfg.VALID'); // ввел валидный адрес почты
            cy.get('#restoreEmailButton').click(); // нажал "Отправить код"
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка крестика
            
        }) 
         
        it('Верный логин и НЕверный пароль', function () {
            cy.visit('https://login.qa.studio'); // Зайти на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка слово "забыли пароль" (синего цвета)
            cy.get('#mail').type('Cfg.VALID'); // ввел верный логин
            cy.get('#pass').type('Cfg.INVALID'); // ввел НЕверный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').should('be.visible');
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка крестика
        })
        it('НЕверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio'); // Зайти на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка слово "забыли пароль" (синего цвета)
            cy.get('#mail').type('Cfg.INVALID'); // ввел НЕверный логин
            cy.get('#pass').type('Cfg.VALID'); // ввел верный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').should('be.visible');
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка крестика
        })
        it('Логин без @', function () {
            cy.visit('https://login.qa.studio'); // Зайти на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка слово "забыли пароль" (синего цвета)
            cy.get('#mail').type('Cfg.INVALID'); // ввел логин без @
            cy.get('#pass').type('Cfg.VALID'); // ввел верный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').should('be.visible');
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка крестика
        })
        it('Проверка строчных букв', function () {
            cy.visit('login.qa.studio'); // Зайти на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка слово "забыли пароль" (сенего цвета)
            cy.get('#mail').type('Cfg.INVALID'); // ввел логин с строчными буквами
            cy.get('#pass').type('Cfg.VALID'); // ввел верный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').should('be.visible');
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка крестика
        
           }) 

 })
 
 // npx cypress open  -- открый сайт 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome npx cypress open

 
