import React from 'react';
import Header from '../Header/Header';
import SearhForm from '../SearchForm/SearchForm';
import CardList from '../CardList/CardList';
import Footer from '../Footer/Footer';
export default class Movies extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section className="Movies">
                <SearhForm 
                    search = {this.props.submitSearch} 
                    savedMovies ={this.props.savedMovies}
                />
                <CardList 
                    movies={this.props.movies} 
                    loading={this.props.loading} 
                    savedMovies= {this.props.savedMovies}
                    saveMovie = {this.props.saveMovie}
                    deleteMovie = {this.props.deleteMovie}
                />
                <Footer/>
            </section>
        )
    }
}