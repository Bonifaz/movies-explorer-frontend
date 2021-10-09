import React from 'react';
import cardimg from '../../images/picture.png'
import like from '../../images/like.svg'
import activeLike from '../../images/like-active.svg'
import cross from '../../images/cross.png'


export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isLike: false,
        }
    }
    toggleLike(){
        this.setState({isLike: !this.state.isLike})
    }
    deleteButton(){
        console.log('!!!');
    }

    render(){
        return (
            <section className="card">
                <div className="card__img">
                    <img className="card__img-item" src={cardimg}/>
                </div>
                
                <div className="card__description">
                    <p className="card__description-text">33 слова о дизайне</p>
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
                <span className="card__description-time">1ч 17м</span>
            </section>
        )
    }
}