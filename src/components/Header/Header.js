import React from 'react';

export default class Header extends React.Component{
    render(){
        return (
            <section className="header">
                <div className="header__container">
                    
                    <img className="header__logo" src="./images/logo.png" alt="Логотип">

                    <div className="header__films-container">
                            <button type="button" className="header__films-list-item">Фильмы</button>
                            <button type="button" className="header__films-list-item">Сохраненные фильмы</button>
                    </div>

                    <div className="header__account-container">
                        <p className="header__account">Аккаунт</p>
                        <img className="header__account-image" src="./images/icon__COLOR_icon-main.png">
                        
                    </div>

                </div>
            </section>
        )
    }
}