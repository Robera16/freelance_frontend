import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Landing from "./pages/landing/Landing";
import FindWork from "./pages/landing/findWork";
import FindTalent from "./pages/landing/findTalent";
import CreateProfile from "./pages/freelancer/CreateProfile";
import MultiStepForm from "./pages/hirer/MultiStepForm";
import JobDetail from "./pages/job/JobDetail";
import Proposal from "./pages/proposal/Proposal";
import Chatt from "./pages/chat/chatt";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log("here");
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            {userInfo ? <Home /> : <Landing />}
          </Route>
          <Route path="/chat">{userInfo ? <Chatt /> : <Home />}</Route>
          <Route exact path="/talent">
            {userInfo ? <Home /> : <FindTalent />}
          </Route>
          <Route exact path="/work">
            {userInfo ? <Home /> : <FindWork />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/jobd/:id">
            <JobDetail />
          </Route>
          <Route path="/proposal/job/:id">
            <Proposal />
          </Route>
          <Route path="/create-profile">
            {userInfo ? <CreateProfile /> : <Landing />}
          </Route>
          <Route path="/multi-step">
            <MultiStepForm />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
