import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

export default class Search extends React.Component {
    render() {
        return(
            <div>
                Hi
                <Link to="/myrecipes">MyRecipes</Link>
            </div>
        );
    }
}