import React from 'react';
import ReactDOM from 'react-dom';
import MyRecipesLinkAndDescription from './components/myRecipesLinkAndDescription';
import Person from './components/person';
import AllRecipes from './components/allRecipes'
import AuthorizationWindow from './components/authorizationWindow'
import RegistrationWindow from './components/registrationWindow'
import AllPersons from './components/allPersons'
import Search from './components/search'
import ErrorMessage from './components/errorMessage'
import Main from './components/main'

import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom";

ReactDOM.render(
    <Router >
        <Route path="/myrecipes" exact component={MyRecipesLinkAndDescription} />
        <Route path="/person" component={Person} />
        <Route path="/allrecipes" component={AllRecipes} />
        <Route path="/authorization" component={AuthorizationWindow}/>
        <Route path="/registration" component={RegistrationWindow}/>
        <Route path="/allpersons" component={AllPersons}/>
        <Route path="/search" component={Search}/>
        <Route path="/error" component={ErrorMessage}/>
        {/*<Route path="/" component={Main}/>*/}
    </Router>,
    document.getElementById('app')
);

module.hot.accept();