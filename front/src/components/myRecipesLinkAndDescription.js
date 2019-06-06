import MyRecipesLink from './myRecipesLink';
import Menu from './menu';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecLADesc.css';
import Request from './newRequest'
export default class MyRecipesLinkAndDescription extends React.Component {


    render() {
        return (
            <div className={"divStyle"}>
                <Menu/>
                <MyRecipesLink/>
            </div>

        );
    }
}
