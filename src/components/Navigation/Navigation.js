import React from 'react';

export default class Navigation extends React.Component{
    render(){
        return (
            <section className="navigation">
                <div className="navigation__container">
                    <ul className="navigation__items">
                        <li>О проекте</li>
                        <li>Технологии</li>
                        <li>Студент</li>
                    </ul>
                </div>
            </section>
        )
    }
}