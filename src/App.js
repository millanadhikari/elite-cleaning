import React,{useState, useEffect} from 'react'
import './App.css';
import Navbar from './Compo/Navbar';
import AboutUs from './Pages/AboutUs';
import Endoflease from './Pages/Endoflease';
import Home from './Pages/Home';
import Tile from './Pages/Tile';
import Carpet from './Pages/Carpet';
import Footer from './Compo/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from './Pages/Booking';





function App() { 

 



  return ( 
    <div className="App">
     
     <Router> 
     <Navbar/>
      
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact-us' exact component={AboutUs}/>
        <Route path='/End-of-lease-cleaning' exact component={Endoflease}/>
        <Route path='/Carpet-cleaning' exact component={Carpet}/>
        <Route path='/Tile&grout' exact component={Tile}/>
        <Route path='/Booking' exact component={Booking}/>
        <Route path='/about-us' exact component={AboutUs}/>

      </Switch>
      <Footer/>
     
    </Router>
     
     
    </div>
  );
}

export default App;
