import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Landing from './pages/landing/Landing'
import CreateProfile from './pages/freelancer/CreateProfile'
import MultiStepForm from './pages/hirer/MultiStepForm';
import JobDetail from './pages/job/JobDetail';
import Proposal from './pages/proposal/Proposal';
import Message from './pages/messages/Message';
import Header from './components/Header';
import Footer from './components/Footer';
import PostedJobDetail from './pages/hirer/PostedJobDetail';
import SubmittedProposals from './pages/hirer/SubmittedProposals';
import FreelancerProposal from './pages/freelancer/FreelancerProposal';
import Dashboard from './pages/hirer/Dashboard';
import UpdateProfile from './pages/freelancer/UpdateProfile';
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
  return (
      <BrowserRouter>  
            <Header/>
              <Container>
              <Switch>
                <Route exact path="/" >
                  {userInfo ? <Home />: <Landing/>}
                </Route>
                <Route path="/login" >
                  <Login />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/job/:id">
                  <JobDetail />
                </Route>
                <Route path="/posted-job/:id">
                  <PostedJobDetail />
                </Route>
                <Route path="/submitted-proposals/:id">
                  <SubmittedProposals />
                </Route>
                <Route path='/proposal/job/:id'>
                  <Proposal />
                </Route>
                <Route path='/create-profile'>
                  {userInfo ? <CreateProfile /> : <Landing/>}
                </Route>
                <Route path='/multi-step'>
                  <MultiStepForm />
                </Route>
                <Route path='/message'>
                  <Message />
                </Route>
                <Route path='/dashboard'>
                  <Dashboard />
                </Route>
                <Route path='/freelancer-proposal/:id'>
                  <FreelancerProposal />
                </Route>
                <Route path='/profile/:id'>
                  <UpdateProfile />
                </Route>
            </Switch>
            </Container>
          <Footer/>
      </BrowserRouter> 
    
  );
}

export default App;
