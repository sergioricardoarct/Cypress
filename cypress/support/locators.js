const locators = {
    LOGIN:{
        USER:'[data-test="email"]',
        PASSWORD:'[data-test="passwd"]',
        BTN_LOGIN:'.btn'
    
    },
    REGISTRO:{
        BTN_REGISTRO:':nth-child(2) > .nav-link',
        USER_NAME:'.jumbotron > :nth-child(1) > .form-control',
        USER_EMAIL:'.input-group > .form-control',
        PASSWORD:':nth-child(3) > .form-control',
        BTN_SAVE_REGISTRO:'.btn'
    },

    SETTINGS:{
        BTN_HOME:'[data-test="menu-home"]',
        BTN_SETTINGS:'[data-test="menu-settings"]',
        BTN_CONTA:'[href="/contas"]',
        BTN_RESET:'[href="/reset"]',
    },
    MENU_CONTA:{
       CONTA:'[data-test="nome"]',
       BTN_CONTA:'.btn',
       VALOR_EDIT:':nth-child(1) > :nth-child(2) > :nth-child(1) > .far',
       BTN_SAVE_CONTA:'.btn',
    },

    MENSAGEM:{ 
        MENSAGEN:'.toast-message',
        MENSAGEM_SUC:'.toast-success > .toast-message',
        MENSAGEM_ERRO:'.toast',
    }

}

export default locators