import React from 'react';

export default class Technologys extends React.Component{
    render(){
        return (
            <section className="technologys">
                <div className="technologys__container">

                    <h3 className="technologys__title">Технологии</h3>
                    <div className="technologys__line"></div>

                    <div className="technologys__info-box">
                        <p className="technologys__subtitle">7 технологий</p>
                        <p className="technologys__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    </div>

                    <div className="technologys__list-container">

                        <ul className="technologys__list">
                            <li className="technologys__list-item">HTML</li>
                            <li className="technologys__list-item">CSS</li>
                            <li className="technologys__list-item">JS</li>
                            <li className="technologys__list-item">React</li>
                            <li className="technologys__list-item">Git</li>
                            <li className="technologys__list-item">Express.js</li>
                            <li className="technologys__list-item">mongoDB</li>
                        </ul>

                    </div>

                </div>
            </section>
        )
    }
}