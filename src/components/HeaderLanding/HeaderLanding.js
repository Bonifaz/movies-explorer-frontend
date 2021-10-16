import React from 'react';
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';

export default class HeaderLanding extends React.Component{
    render(){
        return (
            <section className="header-landing">
                <div className="header-landing__container">

                    <div className="header-landing__func">
                        <Link to="/"><img className="header-landing__logo" src={logo} alt="Логотип"/></Link>
                        <div className="header-landing__sign-reg-container">
                            <Link to="/sign-up"><p className="header-landing__register-button">Регистрация</p></Link>
                            <Link to="/sign-in"><button type="button" className="header-landing__signin-button">Войти</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}