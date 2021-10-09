import './App.css';
import {Route, Switch} from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Registration from '../Registration/Registration';
import Error from '../Error/Error';

function App() {
  return (
    <section className="page">
      <Switch>
          <Route path="/sign-in">
              <Login/>
          </Route>

          <Route path="/sign-up">
              <Registration/>
          </Route>

          <Route path="/movies">
              <Movies savedMovies={false}/>
          </Route>

          <Route path="/saved-movies">
              <Movies savedMovies={true}/>
          </Route>

          <Route path="/profile">
              <Profile/>
          </Route>
          
          <Route exact path="/">
              <Main/>
          </Route>
          
          <Route path="/">
              <Error/>
          </Route>
      </Switch>
    </section>
  );
}

export default App;
