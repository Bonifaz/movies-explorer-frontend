import React from 'react';

import Form from '../Form/Form'

export default class Registration extends React.Component{
    render(){
        return (
            <Form 
            statusForm={false}
            title={"Добро пожаловать!"}
            button={"Зарегистрироваться"}
            text={"Уже зарегистрированы?"}
            link={"Войти"}
            linkPath={"/sign-in"}
            />
        )
    }
}