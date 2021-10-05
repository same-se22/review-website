// import logo from './logo.svg';
import './App.css';
import Home from './componenets/Home/Home';
import About from './componenets/About/About';
import NotFound from './componenets/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './componenets/Header/Header';
import AllService from './componenets/AllService/AllService';
import Contact from './componenets/Contact/Contact';
import Footer from './componenets/Footer/Footer';


function App() {
  return (
    <div className="App">
    <Router>
    <Header></Header>
        <Switch >
        <Route exact path = "/" >
        <Home > </Home> 
        </Route> 
        <Route path = "/home" >
        <Home > </Home> 
        </Route> 
        <Route path = "/allservice" >
        <AllService> </AllService> 
        </Route> 
        <Route path = "/about" >
        <About > </About> 
        </Route>
        <Route path = "/contact" >
        <Contact > </Contact> 
        </Route> 
        <Route path = "*" >
        <NotFound > </NotFound> 
        </Route> 
        </Switch> 
        <Footer > </Footer> 
        </Router> 
    
    </div>
  );
}

export default App;
