import React from 'react';
import icon from '../../images/main-icon.png'

export default class Portfolio extends React.Component{
    render(){
        return (
            <section className="portfolio">
                <div className="portfolio__container">

                    <h3 className="portfolio__title">Портфолио</h3>

                    <div className="portfolio__links">

                        <div className="portfolio__link-container">
                            <p className="portfolio__link"><a className="portfolio__link" href="https://github.com/Bonifaz/how-to-learn">Статичный сайт</a></p>
                            <img className="portfolio__link-icon" src={icon} alt="Иконка"/>
                        </div>

                        <div className="portfolio__line"></div>

                        <div className="portfolio__link-container">
                            <p className="portfolio__link"><a className="portfolio__link" href="https://bonifaz.github.io/russian-travel/index.html">Адаптивный сайт</a></p>
                            <img className="portfolio__link-icon" src={icon} alt="Иконка"/>
                        </div>

                        <div className="portfolio__line"></div>

                        <div className="portfolio__link-container">
                            <p className="portfolio__link"><a className="portfolio__link" href="http://bonifaz.nomoredomains.club/sign-up">Одностраничное приложение</a></p>
                            <img className="portfolio__link-icon" src={icon} alt="Иконка"/>
                        </div>
                    
                    </div>

                </div>
            </section>
        )
    }
}