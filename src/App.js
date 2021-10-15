import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import SignUp from './components/Pages/SignUp/SignUp';
import Login from './components/Pages/Login/Login';
import Footer from './components/Footer/Footer';
import Cart from './components/Pages/Cart/Cart';
import NotFound from './components/Pages/NotFound/NotFound';
import Food from './components/Pages/Home/Food/Food';

const App = () => {
  return (
    <div className='App overflow-hidden'>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/SignUp'>
            <SignUp></SignUp>
          </Route>
          <Route path='/Login'>
            <Login></Login>
          </Route>
          <Route path='/Cart'>
            <Cart></Cart>
          </Route>
          <Route path='/foods/:foodId'>
            <Food></Food>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;