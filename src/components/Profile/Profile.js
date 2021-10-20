import React from 'react'; 
import { CurrentUserContext } from '../../currentUserContext/currentUserContext';
import {isEmail} from 'validator';

export default class Profile extends React.Component{
    static contextType = CurrentUserContext;
    constructor(props){
        super(props)
        this.state ={
            name: '',
            email: '',
            errorEmail: false,
            errorName: false,
            errorMessage: "Я ошибка",
            errorStatus: true,
        }
    }

    componentDidMount(){
        this.setState({
            name: this.context.name,
            email: this.context.email
        })
    }

    changeEmail(e){
        this.validationEmail(e, e.target.value);
        this.setState({
            email: e.target.value
        })
    }
    changeName(e){
        this.validationName(e, e.target.value);
        this.setState({
            name: e.target.value
        })
        
    }

    validationName(e, input){
        if(input.length<2){
            console.log('!!!');
            this.setState({
                errorMessage: "В имени должно быть 2 или больше символов",
                errorName: true
            })
        }
        else{
            this.setState({
                errorName: false,
            })
        }
        setTimeout(() => {this.validationAll()}, 100);
    }

    validationEmail(e, input){
        if(!isEmail(input)){
            this.setState({
                errorMessage: "Некорректно введен email",
                errorEmail: true
            })
        }
        else{
            this.setState({
                errorEmail: false,
            })
        }
        setTimeout(() => {this.validationAll()}, 100);
    }

    validationAll(){
        if(!this.state.errorEmail && !this.state.errorName){
            this.setState({
                errorStatus: false,
            })
        }
        else{
            if(this.state.errorName){
                this.setState({
                    errorMessage: "В имени должно быть как минимум 2 символа"
                })
            }
            if(this.state.errorEmail){
                this.setState({
                    errorMessage: "Некорректный email"
                })
            }
            this.setState({
                errorStatus: true,
            })
        }
    }


    render(){
        return (
            <section className="profile">
                <div className="profile__container">
                    <h1 className="profile__title">Привет, {this.context.name}!</h1>
                    <form onSubmit={(e) => 
                        {   
                            e.preventDefault();
                            console.log(this.state)
                            if(!this.state.errorStatus){
                                this.props.onSubmit(e, this.state.name, this.state.email)
                            }
                        }}>
                        <div className="profile__inputs">
                            <div className="profile__input-container profile__input-container-name">
                                <p className="profile__input-label-text">Имя</p>
                                <input onChange={this.changeName.bind(this)} className="profile__name-input" type="text" id="name-prof" name="name" value={this.state.name}/>
                                <label className="profile__name-input-label" for="name"></label>
                            </div>

                            <div className="profile__line"></div>
                            
                            <div className="profile__input-container">
                                <p className="profile__input-label-text">E-mail</p>
                                <input onChange={this.changeEmail.bind(this)} className="profile__email-input"  type="email" id="email" name="email-prof" value={this.state.email}/>
                                <label className="profile__email-input-label" for="email"></label>
                            </div> 
                        </div>
                        {this.props.statusEditProfile ? <div className="profile__submit-message">Редактирование прошло успешно!</div> : ""}
                        {this.state.errorEmail || this.state.errorName ? <div className="profile__error">{this.state.errorMessage}</div> : ""}
                        
                        <div className="profile__buttons">
                            <button className="profile__button-redact" type="submit" disabled={this.state.errorStatus}>Редактировать</button>
                            <button className="profile__button-exit" type="button" onClick={() =>this.props.logout()}>Выйти из аккаунта</button>
                        </div>
                    </form>

                </div>
            </section>
        )
    }
}