import Description from './description';
import React from 'react';
import ReactDOM from 'react-dom';
import {styles} from './styles/stylesForMyRecipeLink';

export default class MyRecipesLink extends React.Component{
    constructor(props){
        super(props);
        this.recipeClick = this.recipeClick.bind(this);
        this.state = {recipeId: 0};
    }

    recipeClick(q){
        this.setState({recipeId: 1});
    }

    render() {
        let recipeDescription = <Description idRecipe={this.props.recipes[this.state.recipeId]}/>;
        const recipesName = [];



        this.props.recipes.forEach((recipe)=>{
            recipesName.push(<li key={recipe.id} style={styles.liStyle}><a style={styles.aStyle} href = "#" onClick={() => this.setState({recipeId: recipe.id})}> <div style={styles.liDivStyle}>{recipe.name}</div></a></li>);
        });

        // recipesName.push(<li key={this.props.recipes[0].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[0].id})}> {this.props.recipes[0].name}</a></li>);
        // recipesName.push(<li key={this.props.recipes[1].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[1].id})}> {this.props.recipes[1].name}</a></li>);
        // recipesName.push(<li key={this.props.recipes[2].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[2].id})}> {this.props.recipes[2].name}</a></li>);


        return(
            <div>
                {/*<div class="${styles.recipesLink}">*/}
                    <div style={styles.bigDivStyle}>
                    <ol style={styles.olStyle}>
                        {recipesName}
                    </ol>
                    <p><button onClick={()=> alert("Еще ничего нет")}>Добавить новый рецепт</button></p>
                </div>
                {recipeDescription}
            </div>
        );
    }

}