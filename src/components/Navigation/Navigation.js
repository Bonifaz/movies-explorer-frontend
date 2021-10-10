import React from 'react';

export default class Navigation extends React.Component{
    render(){
        return (
            <section className="navigation">
                <div className="navigation__container">
                    <ul className="navigation__items">
                        <li><a href="#about">О проекте</a></li>
                        <li><a href="#technologys">Технологии</a></li>
                        <li><a href="#student">Студент</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}