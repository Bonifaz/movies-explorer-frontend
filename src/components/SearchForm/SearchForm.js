import React from 'react';

export default class searchForm extends React.Component{
    render(){
        return (
            <section className="search-form-container">
                <form className="search-form">
                    <input placeholder="Фильм" className="search-form__input"></input>
                    <button type="submit" className="search-form__button">
                        Поиск
                    </button>
                    <div className="search-form__filter">
                        <label className="serch-form__checkbox-style">
                            <input id="checkbox-movie" className="search-form__checkbox" type="checkbox"></input>
                            <figure className="search-form__figure"></figure>
                        </label>
                        <p className="search-form__filter-description">Короткометражки</p>
                        
                    </div>
                </form>
            </section>
        )
    }
}