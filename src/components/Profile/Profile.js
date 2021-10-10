import React from 'react'; 

export default class Profile extends React.Component{
    render(){
        return (
            <section className="profile">
                <div className="profile__container">

                    <h1 className="profile__title">Привет, Виталий!</h1>

                    <div className="profile__inputs">
                        <div className="profile__input-container profile__input-container-name">
                            <p className="profile__input-label-text">Имя</p>
                            <input className="profile__name-input" type="text" id="name-prof" name="name" placeholder="Виталий"/>
                            <label className="profile__name-input-label" for="name"></label>
                        </div>

                        <div className="profile__line"></div>
                        
                        <div className="profile__input-container">
                            <p className="profile__input-label-text">E-mail</p>
                            <input className="profile__email-input" type="email" id="email" name="email-prof" placeholder="pochta@yandex.ru"/>
                            <label className="profile__email-input-label" for="email"></label>
                        </div> 
                    </div>

                    <div className="profile__buttons">
                        <button className="profile__button-redact" type="button">Редактировать</button>
                        <button className="profile__button-exit" type="button">Выйти из аккаунта</button>
                    </div>

                </div>
            </section>
        )
    }
}