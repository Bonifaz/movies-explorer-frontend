import React from 'react'; 
import { CurrentUserContext } from '../../currentUserContext/currentUserContext';

export default class Profile extends React.Component{
    static contextType = CurrentUserContext;
    constructor(props){
        super(props)
        this.state ={
            name: '',
            email: '',
        }
    }
    changeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    changeName(e){
        this.setState({
            name: e.target.value
        })
    }
    render(){
        return (
            <section className="profile">
                <div className="profile__container">

                    <h1 className="profile__title">Привет, {this.context.name}!</h1>
                    <form onSubmit={(e) => this.props.onSubmit(e, this.state.name, this.state.email)}>
                        <div className="profile__inputs">
                            <div className="profile__input-container profile__input-container-name">
                                <p className="profile__input-label-text">Имя</p>
                                <input onChange={this.changeName.bind(this)} className="profile__name-input" type="text" id="name-prof" name="name" placeholder={this.context.name}/>
                                <label className="profile__name-input-label" for="name"></label>
                            </div>

                            <div className="profile__line"></div>
                            
                            <div className="profile__input-container">
                                <p className="profile__input-label-text">E-mail</p>
                                <input onChange={this.changeEmail.bind(this)} className="profile__email-input"  type="email" id="email" name="email-prof" placeholder={this.context.email}/>
                                <label className="profile__email-input-label" for="email"></label>
                            </div> 
                        </div>

                        <div className="profile__buttons">
                            <button className="profile__button-redact" type="submit">Редактировать</button>
                            <button className="profile__button-exit" type="button" onClick={() =>this.props.logout()}>Выйти из аккаунта</button>
                        </div>
                    </form>

                </div>
            </section>
        )
    }
}