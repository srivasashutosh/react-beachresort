import React from 'react';
import './App.css';

import Home from './pages/Home'

import Error from './pages/ErrorPage'

import SingleRoom from './pages/SingleRoom'
import Navbar from './components/Navbar'
import Rooms from './pages/Rooms'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar></Navbar>
     <Switch>
     <Route exact path="/" component={Home}/>
     
     <Route exact path="/rooms" component={Rooms}/>
     
     <Route exact path="/rooms/:slug" component={SingleRoom}/>
     
     <Route  component={Error}/>
     </Switch>
    </>
  );
}

export default App;
