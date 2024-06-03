import React from "react";

import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Pages/Login";
import "semantic-ui-css/semantic.min.css";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import Upp from "./Pages/UPP";
import Prosedur from "./Pages/Prosedur";
import Admin from "./Pages/Admin";
import { AppProvider } from "./States/Provider/App.context";
import SignupScreen from "./Pages/SignUp";
function App() {
  return (
    <Router>
      <AppProvider>
        <Header />
        <div className='ui container segment'>
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Login' component={Login} />
              <Route path='/signUp' component={SignupScreen} />
              <Route path='/UPP' component={Upp} />
              <Route path='/Prosedur' component={Prosedur} />
              <Route path='/Admin' component={Admin} />
            </Switch>
          </main>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
