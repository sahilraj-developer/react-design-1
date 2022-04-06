import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Showcase from "./component/Showcase";
import Destination from './component/Destination'
import Signup from "./component/Signup";
import Login from "./component/Login";
import Error from "./component/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
       <Switch>
       <Route exact path="/">
          <Showcase />
          <Destination/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>
        <Route path='*'>
       <Error/>

        </Route>
       </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
