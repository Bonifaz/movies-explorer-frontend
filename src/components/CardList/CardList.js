import React from 'react';
import Card from '../Card/Card';
import {diffArrays, checkDevice} from "../../utils/utils";
import Preloader from './../Preloader/Preloader';

export default class CardList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            viewMovies: [],
            countMovies: 12,
            prevCount: 12,
            step: 3,
            prevSortArray: [],
            loading: false,
            movies: [],
        }
    }

    componentDidMount(){
        window.addEventListener('resize', ()=>{
            this.changeCountCard();
        })
        this.changeCountCard();
    }

    componentDidUpdate(){
        let copySortArray = this.state.movies;
        if(this.state.movies !== this.props.movies){
            this.setState({
                movies: this.props.movies
            })
        }
        let copyPrevSortArray = this.state.prevSortArray;
        if(!diffArrays(copySortArray, copyPrevSortArray) || this.state.prevCount!==this.state.countMovies){
            this.setState({
                prevSortArray: copySortArray,
                prevCount: this.state.countMovies
            })
            this.setState({
                viewMovies: this.state.movies.slice(0, this.state.countMovies) 
            })
        }        
    }

    changeCountCard(){
        this.setState({
            countMovies: checkDevice().card,
            step: checkDevice().step,
        })
    }

    moreMovies(){
        this.setState({
            countMovies: this.state.countMovies + this.state.step
        })
    }

    render(){
        return (
            <section className="card-list-container">
                <div className="card-list">
                {
                    this.props.loading ? <Preloader/> :
                    (this.state.viewMovies.length !== 0 ?
                    this.state.viewMovies.map((item =>{
                        return (<Card 
                            savedMovies={this.props.savedMovies}
                            title={item.nameRU}
                            duration = {item.duration}
                            img = {!this.props.savedMovies ? 'https://api.nomoreparties.co' + item.image.url : item.image}
                            trailer = {this.props.status ? item.trailerLink : item.trailer}
                            info = {item}
                            saveCard ={this.props.saveMovie}
                            deleteCard ={this.props.deleteMovie}
                            id = {this.props.savedMovies ? item._id : ""}
                        />)
                    }))
                    :
                    <p class="card-list__nothink">Ничего не найдено</p>)
                }
                </div>
                {this.state.countMovies >= this.state.movies.length ? "" : <button className="card-list__more-button" onClick={this.moreMovies.bind(this)}>Ещё</button>}
            </section>
        )
    }
}