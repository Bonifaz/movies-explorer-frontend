import React from 'react';
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';
import {isEmail} from 'validator';

export default class CardList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            login: '',
            password: '',
            name: '',
            errorSignInUp: false,
            errorMessageSignInUp: '',
            lockButton: false,
        }
    }

    //Функции отслеживания изменения ипутов
    onChangeLogin(e){
        this.validate(e.target, true)
        this.setState({
            login: e.target.value
        })
    }
    onChangePassword(e){
        this.validate(e.target, false)
        this.setState({
            password: e.target.value
        })
    }
    onChangeName(e){
        this.validate(e.target, false)
        this.setState({
            name: e.target.value
        })
    }


    
    //Валидация
    validate(input, isEmailStatus){
        if(isEmailStatus){
            this.emailValidation(input);
        }
        else{
            if(input.validationMessage === ''){
                input.nextSibling.setAttribute("style", 'display:none')
                input.removeAttribute("style", 'color:#EE3465;')
            }
            else{
                input.setAttribute("style", 'color:#EE3465;')
                input.nextSibling.textContent = input.validationMessage;
            }
        }
        
    }

    //Валидация email
    emailValidation(input){
        console.log(isEmail(input.value))
        if(isEmail(input.value) === true){
            input.nextSibling.setAttribute("style", 'display:none')
            input.removeAttribute("style", 'color:#EE3465;')
        }
        else{
            input.setAttribute("style", 'color:#EE3465;')
            input.nextSibling.textContent = 'Некорректный email';
        }
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
                        <form onSubmit={this.props.submit.bind(this)} className="register__form">
                            <div className="register__inputs">
                                {
                                    this.props.formType === "reg" ?
                                    <div className={`register__name ${this.props.statusForm ? "register__name-hidden" : ""}`}>
                                        <p className="register__input-label-text">Имя</p>
                                        <input onChange={this.onChangeName.bind(this)} required minLength="2" className="register__name-input register__input" type="text" id="name" name="name" placeholder="Виталий"/>
                                        <p className="register__password-error">Что-то пошло не так</p>
                                    </div> 
                                    : 
                                    ""
                                }
                                
                                <div className="register__email">
                                    <p className="register__input-label-text">E-mail</p>
                                    <input onChange={this.onChangeLogin.bind(this)} required className="register__email-input register__input" type="email" id="email" name="email" placeholder="pochta@yandex.ru"/>
                                    <p className="register__password-error">Что-то пошло не так</p>
                                </div>
                                <div className="register__password">
                                    <p className="register__input-label-text">Пароль</p>
                                    <input onChange={this.onChangePassword.bind(this)} required className="register__password-input register__input" type="password" id="password" name="password" minLength="8" placeholder="&#149 &#149 &#149 &#149 &#149 &#149 &#149 &#149 &#149"/>
                                    <p className="register__password-error">Что-то пошло не так</p>
                                </div>
                            </div>
                            {this.state.errorSignInUp ? <div className="register__error-api">{this.state.errorMessageSignInUp}</div> : ""}
                            <div className="register__button-container">
                                <button className="register__button" type="submit" disabled={this.state.lockButton}>{this.props.button}</button>
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