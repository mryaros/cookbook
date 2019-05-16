import MyRecipesLink from './myRecipesLink';
import Menu from './menu';
import React from 'react';
import ReactDOM from 'react-dom';
export default class MyRecipesLinkAndDescription extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
                <MyRecipesLink recipes={this.props.recipes}/>
            </div>

        );
    }
}
