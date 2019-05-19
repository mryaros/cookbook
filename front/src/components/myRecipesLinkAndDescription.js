import MyRecipesLink from './myRecipesLink';
import Menu from './menu';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecLADesc.css'
export default class MyRecipesLinkAndDescription extends React.Component {
    render() {
        return (
            <div className={"divStyle"}>
                <Menu/>
                <MyRecipesLink recipes={this.props.recipes}/>
                {/*<main>*/}
                    {/*{this.props.children}*/}
                {/*</main>*/}

            </div>

        );
    }
}
