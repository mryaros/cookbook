import Description from './allDescription';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecipeLink.css';

export default class AllRecipesLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recipe: this.props.recipes[0]
        };
    }
    render() {
        console.log(this.props.recipes);

        let recipeDescription = <Description recipe={this.state.recipe}/>;
        const recipesName = [];
        this.props.recipes.forEach((recipe) => {
            recipesName.push(<li key={recipe.id} ><a href="#" onClick={() => this.setState({recipe: recipe})}><div>{recipe.name}</div></a></li>);
        });

        return (
            <div className={"recipes"}>
                <div className={"bigDivStyle"}>
                    <ol className={"zebra"}>
                        {recipesName}
                    </ol>
                </div>
                {recipeDescription}
            </div>
        );

    }

}