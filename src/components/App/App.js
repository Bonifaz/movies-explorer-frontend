import './App.css';
import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Registration from '../Registration/Registration';
import Error from '../Error/Error';
import React from 'react';
import auth from '../../utils/auth';
import api from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi'
import { getContent } from '../../utils/auth';
import {CurrentUserContext} from '../../currentUserContext/currentUserContext'
import Header from '../Header/Header';
import HeaderLanding from '../HeaderLanding/HeaderLanding';
import ProtectedRoute from '../ProtectedRoute';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            logged: true,
            currentUser: {},
            savedMovies: [],
            completeMovies: [],
            loadingStatus: false,
            movies: [],
            statusEditProfile: false,
        }
    }

    componentDidMount(){
        if(this.checkToken()){
            this.getInfoUser();
            this.checkMovies();
            this.getSavedMovies()
        }
    }

    //Проверка на наличие фильмов в localStorage
    checkMovies(){
        if(localStorage.getItem("movies")){
            const data = JSON.parse(localStorage.getItem('movies'));
            this.setState(
            {
                completeMovies: data
            });
        }
    }

    //Проверка токена
    checkToken(){
        if(localStorage.getItem('jwt')){
            this.setLogin(true)
            return true
        }
        else{
            this.setLogin(false)
            return false
        }
    }

    //Установка статуса логина
    setLogin(value){
        this.setState({
            logged: value
        })
    }

    //login
    submitLogin(e){
        e.preventDefault();
        this.setState({
            lockButton: true,
        })
        auth("", this.state.login, this.state.password, '/signin')
        .then(res =>{
            const jwt = res.token;
            localStorage.setItem('jwt', jwt);
            this.setState({
                logged: true
            })
            setTimeout(() => {window.location.href = '/movies'}, 1000);
        })
        .catch(res =>{
            this.setState({
                errorSignInUp: true,
                errorMessageSignInUp: res,
            })
        })
        .finally(res =>{
            this.setState({
                lockButton: false
            })
        })
    }

    //registation
    submitRegistation(e){
        e.preventDefault();
        this.setState({
            lockButton: true,
        })
        auth(this.state.name, this.state.login, this.state.password, './signup')
        .then(res =>{
            auth("", this.state.login, this.state.password, '/signin').then(res=>{
                const jwt = res.token;
                localStorage.setItem('jwt', jwt);
                this.setState({
                    logged: true
                })
                setTimeout(() => {window.location.href = '/movies'}, 1000);
            })
        })
        .catch(res=>{
            this.setState({
                errorSignInUp: true,
                errorMessageSignInUp: res,
            })
        })
        .finally(res =>{
            this.setState({
                lockButton: false
            })
        })
    }


    //getInfoUser
    getInfoUser(){
        let info = getContent(localStorage.getItem('jwt'));
        info.then(res =>{
            const info = res;
            this.setState({
                currentUser: info
            })
        })
    }

    //editProfile
    editProfile(e, name, email){
        e.preventDefault();
        api.editProfileInfo(name, email).then(res =>{
            this.setState({statusEditProfile:true})
            setTimeout(() => {this.setState({statusEditProfile:false})}, 2000);
        })
        .catch(res =>{
            this.setState({statusEditProfile:false})
        })
        setTimeout(() => {this.getInfoUser()}, 100);
        
    }

    //getSavedMovies
    getSavedMovies(){
        api.getMovies().then(res =>{
            this.setState({
                savedMovies: res
            })
        })
    }

    //Выйти из аккаунта
    logout(){
        this.setState({
            login: false
        })
        localStorage.removeItem('jwt');
        localStorage.removeItem('movies');
        window.location.href = '/';
    }

    //Сохранить фильм
    saveMovie(country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN){
        return api.saveMovie(country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN)
        .then(res =>{
            this.getSavedMovies();
            return res._id;
        })
    }

    //Удалить фильм
    deleteMovie(id){
        api.deleteMovie(id).then(res =>{
            this.getSavedMovies();
        })
        .catch(res =>{
            console.log(res);
        })
        
    }

    //Поиск фильма
    search(e, keyWord, shortCut, savedMovies){
        e.preventDefault();
        this.setState({
            loadingStatus: true,
        })
        if(!savedMovies){
            moviesApi.getMovies()
            .then(res =>{
                let data = res;
                this.setState({movies: data})
            })
            .catch(err =>{
                console.log(err)
            })
            setTimeout(() => {this.sort(this.state.movies, keyWord, shortCut, false)}, 1500);
        }
        else{
            setTimeout(() => {this.sort(this.state.savedMovies, keyWord, shortCut, true)}, 1500);
        }
        
    }

    //Сортировка
    sort(data, keyWord, shortCut, savedMovies){
        let temp = [];
        for(let i = 0; i<data.length; i++){
            let itemRu = data[i].nameRU ? data[i].nameRU : "";
            let itemEn = data[i].nameEN ? data[i].nameEN : "";
            let itemDuration = data[i].duration;
            if(itemRu.indexOf(`${keyWord}`) !== -1 || itemEn.indexOf(`${keyWord}`)!== -1){
                if(!shortCut){
                    temp.push(data[i]);
                }
                else{
                    if(itemDuration>40){
                        temp.push(data[i]);
                    }
                }
            }
        }
        if(!savedMovies){
            this.setState({
                completeMovies: temp,
                loadingStatus: false
            });
            localStorage.setItem('movies', JSON.stringify(temp));
        }
        else{
            this.setState({
                savedMovies: temp,
                loadingStatus: false
            });
        }
    }

    render(){
        return(
            <CurrentUserContext.Provider value={this.state.currentUser}>
                
            <section className="page">
            {this.state.logged ? <Header/> : <HeaderLanding/>}
                <Switch>
                    <Route path="/sign-in">
                        <Login formType="log" submit={this.submitLogin}/>
                    </Route>

                    <Route path="/sign-up">
                        <Registration formType="reg" submitLogin={this.submitLogin} submit={this.submitRegistation}/>
                    </Route>
                    <ProtectedRoute path="/movies"
                            component= {Movies}
                            logged={this.state.logged}
                            submitSearch={this.search.bind(this)} 
                            savedMovies={false} 
                            movies={this.state.completeMovies} 
                            loading={this.state.loadingStatus} 
                            saveMovie={this.saveMovie.bind(this)} 
                            deleteMovie={this.deleteMovie.bind(this)}
                    >
                    </ProtectedRoute>
                    <ProtectedRoute path="/saved-movies"
                            component= {Movies}
                            logged={this.state.logged}
                            savedMovies={true}
                            submitSearch={this.search.bind(this)} 
                            movies={this.state.savedMovies}
                            loading={this.state.loadingStatus}
                            deleteMovie={this.deleteMovie.bind(this)}
                    >
                    </ProtectedRoute>
                    <ProtectedRoute path="/profile"
                            component= {Profile}
                            statusEditProfile = {this.state.statusEditProfile}
                            logged={this.state.logged}
                            onSubmit ={this.editProfile.bind(this)} 
                            logout = {this.logout.bind(this)}
                    >
                    </ProtectedRoute>
                    <Route path="/profile">
                        <Profile onSubmit ={this.editProfile.bind(this)} logout = {this.logout.bind(this)}/>
                    </Route>
                    
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    
                    <Route path="/">
                        <Error/>
                    </Route>
                </Switch>
            </section>
            </CurrentUserContext.Provider>
        );
    }    
}
export default App;
