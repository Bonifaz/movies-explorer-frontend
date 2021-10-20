import React from 'react';

export default class searchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: '',
            shortStatus: false,
        }
    }
    changeSearchInput(e){
        this.setState({
            word: e.target.value
        })
    }
    changeShortBox(e){
        this.setState({
            shortStatus: e.target.checked
        })
    }
    render(){
        return (
            <section className="search-form-container">
                <form onSubmit={(e) => this.props.search(e, this.state.word, this.state.shortStatus, this.props.savedMovies)} className="search-form">
                    <input placeholder="Фильм" className="search-form__input" required onChange={this.changeSearchInput.bind(this)} ></input>
                    <button type="submit" className="search-form__button">
                        Поиск
                    </button>
                    <div className="search-form__filter">
                        <label className="serch-form__checkbox-style">
                            <input id="checkbox-movie" className="search-form__checkbox" type="checkbox" onChange={this.changeShortBox.bind(this)}></input>
                            <figure className="search-form__figure"></figure>
                        </label>
                        <p className="search-form__filter-description">Короткометражки</p>
                        
                    </div>
                </form>
            </section>
        )
    }
}