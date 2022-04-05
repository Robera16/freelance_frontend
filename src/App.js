import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Landing from './pages/landing/Landing'
import CreateProfile from './pages/freelancer/CreateProfile'
import MultiStepForm from './pages/hirer/MultiStepForm';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const userInfo = null
  return (
    
      <BrowserRouter>  
            <Header/>
              <Container>
              <Switch>
                <Route exact path="/" >
                  {userInfo && (<Home />)}
                  {!userInfo && (<Landing/>)}
                </Route>
                <Route path="/login" >
                  <Login />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path='/create-profile'>
                  <CreateProfile />
                </Route>
                <Route path='/multi-step'>
                  <MultiStepForm />
                </Route>
            </Switch>
            </Container>
          <Footer/>
      </BrowserRouter> 
    
  );
}

export default App;
