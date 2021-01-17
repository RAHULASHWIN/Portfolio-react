import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,Route,Redirect, Switch} from  'react-router-dom'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Project'

function App() {

  return (
    <Router>
    <div className="App">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-9 app__main-content">

            <Navbar />
            <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
            </Switch>
          </div>
        
        </div>
      </div>
    </div>
    </Router>
  );
 
}

export default App;
