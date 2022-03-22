import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>  
          <Header/>
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
         </Switch>
         <Footer/>
    </BrowserRouter> 
  );
}

export default App;
