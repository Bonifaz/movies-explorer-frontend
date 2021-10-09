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
                <Header/>
                <SearhForm/>
                <CardList savedMovies= {this.props.savedMovies}/>
                <Footer/>
            </section>
        )
    }
}