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
    MENU:{


    }

}

export default locators