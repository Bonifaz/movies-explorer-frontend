import React from 'react';
import photo from '../../images/2tBVR3XgKho.jpg'

export default class Student extends React.Component{
    render(){
        return (
            <section className="student">
                <div className="student__container">

                    <p id="student" className="student__title">Студент</p>
                    <div className="student__line"></div>

                    <div className="student__info-box">

                        <div className="student__about-info">
                            <p className="student__name">Елизавета</p>
                            <p className="student__prof">Фронтенд-разработчик, 20 лет</p>
                            <p className="student__aboutme">Я родилась в Латвии, но сейчас проживаю в России. Я люблю читать, увлекаюсь разного рода творчеством.
                                Год назад начала заниматься кодом, вдохновившись работой молодого человека, и сменила сферу деятельности с веб-дизайна на веб-разработку.
                                По окончанию курса Я.Практикума стремлюсь найти работу и продолжить профессиональный рост. 
                            </p>
                            <p className="student__github"><a className="student__github" href="https://github.com/Bonifaz?tab=repositories">Github</a></p>
                        </div>

                        <div className="student__photo-container">
                            <img className="student__photo" src={photo} alt="Фотография"/>
                        </div>
                        
                    </div>

                </div>
            </section>
        )
    }
}