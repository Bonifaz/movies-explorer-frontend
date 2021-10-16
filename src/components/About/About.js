import React from 'react';

export default class About extends React.Component{
    render(){
        return (
            <section className="about">
                <div className="about__container">

                    <h2 className="about__title" id="about">О проекте</h2>                   

                    <div className="about__line"></div>

                    <div className="about__info-container">

                        <div className="about__info">
                            <p className="about__subtitle">Дипломный проект включал 5 этапов</p>
                            <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                        </div>

                        <div className="about__info">
                            <p className="about__subtitle">На выполнение диплома ушло 5 недель</p>
                            <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                        </div>

                    </div>

                    <div className="about__table">
    
                        <div className="about__table-item-left">
                            <p className="about__table-title-left">1 неделя</p>
                            <p className="about__table-text-left">Back-end</p>
                        </div>

                        <div className="about__table-item-right">
                            <p className="about__table-title-right">4 недели</p>
                            <p className="about__table-text-right">Front-end</p>
                        </div>

                    </div>


                </div>
            </section>
        )
    }
}