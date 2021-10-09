import React from 'react';
import logo from '../../images/logo.png'

import {Link} from 'react-router-dom';

export default class CardList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section className="register">
                <div className="register__container">
                    <Link to ="/">
                    <div className="register__logo-box">
                        <img className="register__logo" src={logo} alt="Логотип"/> 
                    </div>
                    </Link>

                    <h1 className="register__title">{this.props.title}</h1>

                    <div className="register__form-container">
                        <form className="register__form">
                            <div className="register__inputs">
                                <div className={`register__name ${this.props.statusForm ? "register__name-hidden" : ""}`}>
                                    <p className="register__input-label-text">Имя</p>
                                    <input className="register__name-input register__input" type="text" id="name" name="name" placeholder="Виталий"/>
                                    <label className="register__name-input-label" for="name"></label>
                                </div>
                                <div className="register__email">
                                    <p className="register__input-label-text">E-mail</p>
                                    <input className="register__email-input register__input" type="email" id="email" name="email" placeholder="pochta@yandex.ru"/>
                                    <label className="register__email-input-label" for="email"></label>
                                </div>
                                <div className="register__password">
                                    <p className="register__input-label-text">Пароль</p>
                                    <input className="register__password-input register__input" type="password" id="password" name="password" placeholder="&#149 &#149 &#149 &#149 &#149 &#149 &#149 &#149 &#149"/>
                                    <label className="register__password-input-label" for="password"></label>
                                    <p className="register__password-error">Что-то пошло не так</p>
                                </div>
                            </div>

                            <div className="register__button-container">
                                <button className="register__button" type="button">{this.props.button}</button>
                            </div>

                            <div className="register__sign-in-container">
                                <p className="register__sign-in-text">{this.props.text} 
                                    <Link to={this.props.linkPath}><button className="register__sign-in-button">
                                    {this.props.link}</button>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}