import React from 'react';

import Form from '../Form/Form'

export default class Registration extends React.Component{
    render(){
        return (
            <Form 
                title={"Добро пожаловать!"}
                button={"Зарегистрироваться"}
                text={"Уже зарегистрированы?"}
                link={"Войти"}
                linkPath={"/sign-in"}
                formType={this.props.formType}
                submit={this.props.submit}
                submitLogin={this.props.submitLogin}
            />
        )
    }
}