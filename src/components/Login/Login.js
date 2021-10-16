import React from 'react';

import Form from '../Form/Form'

export default class Login extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Form 
                title={"Рады видеть!"}
                button={"Войти"}
                text={"Ещё не зарегистрированы?"}
                link={"Регистрация"}
                linkPath={"/sign-up"}
                formType={this.props.formType}
                submit={this.props.submit}
            />
        )
    }
}