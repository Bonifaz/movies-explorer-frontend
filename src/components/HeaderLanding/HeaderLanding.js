import React from 'react';

export default class HeaderLanding extends React.Component{
    render(){
        return (
            <section className="header-landng">
                <div className="header-landing__container">

                    <div className="header-landing__func">
                        <img className="header-landing__logo" src="./images/logo.png" alt="Логотип"> 
                        <div className="header-landing__sign-reg-container">
                            <p className="header-landing__register-button">Регистрация</p>
                            <button type="button" className="header-landing__signin-button">Войти</button>
                        </div>
                    </div>

                    <div className="header-landing__head">
                        <h1 className="header-landing__title">Учебный проект студента факультета Веб-разработки.</h1>
                    </div>

                </div>
            </section>
        )
    }
}