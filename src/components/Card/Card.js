import React from 'react';
import like from '../../images/like.svg'
import activeLike from '../../images/like-active.svg'
import cross from '../../images/cross.png'
import {timeCalc} from '../../utils/utils';


export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isLike: false,
        }
    }
    toggleLike(e){
        this.setState({isLike: !this.state.isLike})
        this.saveCard(e);
    }
    deleteButton(e){
        let card = e.target.closest('.card');
        this.props.deleteCard(card.id);
    }

    saveCard(e){
        let card = e.target.closest('.card');
        if(!this.props.savedMovies){
            if(this.state.isLike){
                this.props.deleteCard(card.id)
            }
            else{
                this.saveCardMovie(card)
            }
        }
    }

    saveCardMovie(card){
        this.props.saveCard(
            this.props.info.country || "World", 
            this.props.info.director, 
            this.props.info.duration, 
            this.props.info.year, 
            this.props.info.description, 
            'https://api.nomoreparties.co' + this.props.info.image.url, 
            this.props.info.trailerLink, 'https://api.nomoreparties.co' + 
            this.props.info.image.formats.thumbnail.url, 
            this.props.info.id, 
            this.props.info.nameRU, 
            this.props.info.nameEN).then(res =>{
                console.log(res);
                card.setAttribute('id', res);
            })
            .catch(res =>{
                console.log(res);
            })

    }

    render(){
        return (
            <section className="card" id={this.props.id}>
                <div className="card__img">
                    <img className="card__img-item" src={this.props.img}/>
                </div>
                
                <div className="card__description">
                    <p className="card__description-text">{this.props.title}</p>
                    {this.props.savedMovies ? 
                        <button className="card__delete" onClick ={this.deleteButton.bind(this)}>
                            <img src={cross} alt="Крестик"/>
                        </button>
                        :
                        <button className="card__like" onClick ={this.toggleLike.bind(this)}>
                            <img src={this.state.isLike ? activeLike: like} alt="like"/>
                        </button>
                    }
                </div>
                <span className="card__description-time">{timeCalc(this.props.duration)[0] +"ч " + timeCalc(this.props.duration)[1] +"м"}</span>
            </section>
        )
    }
}