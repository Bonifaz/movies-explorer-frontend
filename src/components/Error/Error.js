import React from 'react';
import {Link, withRouter } from 'react-router-dom'; 

export default class Error extends React.Component{
    render(){
        return (
            <section className="error">
                <div className="error__container">
                    <h1 className="error__title">404</h1>
                    <p className="error__subtitle">Страница не найдена</p>
                    <Link to="/"><button type="button" className="error__button-back">Назад</button></Link>
                </div>
            </section>
        )
    }
}