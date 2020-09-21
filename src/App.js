import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import MenuPage from './pages/menupage/menupage.component';
import Footer from './components/footer/footer.component';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/menu' component={MenuPage}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
