import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import NavTabs from "./components/NavTabs";
import { Jumbotron } from 'react-bootstrap'

function App () {
    return(
        <Router>
            <Jumbotron fluid>Alyssa Schmalenberger</Jumbotron> 
            <div>
                <NavTabs />
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>

    )
} 
export default App;
