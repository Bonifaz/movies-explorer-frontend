import React from 'react';

export default class Footer extends React.Component{
    render(){
        return (
            <section className="footer">
                <div className="footer__container">

                    <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
                    <div className="portfolio__line"></div>

                    <div className="footer__info">

                        <div  className="footer__year">
                            <p className="footer__year-item">© 2020</p>
                        </div>

                        <div className="footer__links">
                            <p className="footer__link"><a className="footer__link" href="https://practicum.yandex.ru/profile/web/">Яндекс.Практикум</a></p>
                            <p className="footer__link"><a className="footer__link" href="https://github.com/Bonifaz?tab=repositories">Github</a></p>
                            <p className="footer__link"><a className="footer__link" href="https://sun9-9.userapi.com/impg/6Wk0eSPtEGv5_6sQLIdWan9d2S7wlo2p4dVKeg/kwoUc9xqfvE.jpg?size=1080x574&quality=96&sign=30e1aa894381ef89281d34b8e09cffe1&type=album">Лама</a></p>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}