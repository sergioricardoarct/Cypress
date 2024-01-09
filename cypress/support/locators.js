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
       VALOR_EDIT:"// table //tr // td [contains(text(),'The')] /..// i[@class='far fa-edit']",
       BTN_SAVE_CONTA:'.btn',
       INSERT_CONTA:'// table //tr // td [contains(text(),"Primanede")] '
    },

    MENSAGEM:{ 
        MENSAGEN:'.toast-message',
        MENSAGEM_SUC:'.toast-success > .toast-message',
        MENSAGEM_ERRO:'.toast',
    },

    MENU_MOVIMENTAÇÃO:{
        BTN_MOVIMENTAÇÃO:'[data-test="menu-movimentacao"] > .fas',
        BTN_RECEITA:'[data-test="tipo-receita"]',
        BTN_DESPESA:'[data-test="tipo-despesa"]',
        DTA_TRANSACAO:'[data-test="data-transacao"]',
        DTA_PAGAMENTO:'[data-test="data-pagamento"]',
        DESCRICAO:'[data-test="descricao"]',
        ENVOLVIDO:'[data-test="envolvido"]',
        VALOR_MOVI:'[data-test="valor"]',
        CONTA_MOVI:'[data-test="conta"]',
        ESTATUS:'[data-test="status"]',
        BTN_SAVE_MOVI:'.btn-primary',
        VALIDACAO_MOVI:'//  div [ @class ="list-group"] // li //span [contains(text(),"Investimento do Faraó")]',
    }
}

export default locators