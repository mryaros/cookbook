import MyRecipesLink from './myRecipesLink';
import Menu from './menu';
import React from 'react';
import ReactDOM from 'react-dom';
import {styles} from './styles/stylesForMyRecLADesc'
export default class MyRecipesLinkAndDescription extends React.Component {
    render() {
        return (
            <div style={styles.divStyle}>
                <Menu/>
                <MyRecipesLink recipes={this.props.recipes}/>
            </div>

        );
    }
}
