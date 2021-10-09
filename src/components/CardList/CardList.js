import React from 'react';
import Card from '../Card/Card';

export default class CardList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section className="card-list-container">
                <div className="card-list">
                    <Card savedMovies={this.props.savedMovies}/>
                    <Card savedMovies={this.props.savedMovies}/>
                    <Card savedMovies={this.props.savedMovies}/>
                    <Card savedMovies={this.props.savedMovies}/>
                </div>
                <button className="card-list__more-button">Ещё</button>
            </section>
        )
    }
}