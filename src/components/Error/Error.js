import React from 'react';

export default class Error extends React.Component{
    render(){
        return (
            <section className="error">
                <div className="error__container">
                    <h1 className="error__title">404</h1>
                    <p className="error__subtitle">Страница не найдена</p>
                    <button type="button" className="error__button-back">Назад</button>
                </div>
            </section>
        )
    }
}