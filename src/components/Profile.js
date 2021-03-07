import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Introduction from './Introduction';
import Education from './Education';
import Professional from './Professional';
import Contact from './Contact';
import './style.css';

function Profile() {
    return (
        <Router>
            <div id="container">
                <header>
                    <div className="quoteoftheday">Profile</div>
                    <div className="name">Saleheen.</div>
                </header>
                <article>
                    <div className="quote">
                        <h1>A Coders Life: Problematic but Charismatic.</h1>
                    </div>
                    <div className="quoteby">
                        <h4>Saleheen Noor</h4>
                    </div>
                </article>
                <footer>
                    <div className="skills">
                        <h6>Menu</h6>
                        <ul>
                            <li><Link to='/'>Introduction</Link></li>
                            <li><Link to='/edu'>Education</Link></li>
                            <li><Link to='/professional'>Professional Experience</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Switch>
                        <Route exact path='/' component={Introduction} />
                        <Route exact path='/edu' component={Education} />
                        <Route exact path='/professional' component={Professional} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                </footer>
            </div>
        </Router>
    )
}

export default Profile
