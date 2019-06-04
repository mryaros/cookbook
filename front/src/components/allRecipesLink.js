import Description from './allDescription';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecipeLink.css';

export default class AllRecipesLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recipeId: this.props.recipes[0]
        };
    }


    render() {
        // let reci = "hi";
        // if(this.state.recipeId==0)
        // this.setState({recipeId: this.props.recipes[0].id});
        // this.props.recipes.forEach((rec)=>{if (this.state.recipeId == rec.id) reci = rec;})
        // let recipeDescription = <Description idRecipe={this.props.recipes[this.state.recipeId]}/>;
        let recipeDescription = <Description idRecipe={this.state.recipeId}/>;
        const recipesName = [];
        this.props.recipes.forEach((recipe) => {
            recipesName.push(<li key={recipe.id} ><a href="#" onClick={() => this.setState({recipeId: recipe})}><div>{recipe.name}</div></a></li>);
        });

        return (
            <div className={"recipes"}>
                {/*<div class="${styles.recipesLink}">*/}
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