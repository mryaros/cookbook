import Description from './description';
import React from 'react';
import ReactDOM from 'react-dom';
// import styles from './styleForMyRecipesLink.css';

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
            recipesName.push(<li key={recipe.id}><a href = "#" onClick={() => this.setState({recipeId: recipe.id})}> {recipe.name}</a></li>);
        });

        // recipesName.push(<li key={this.props.recipes[0].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[0].id})}> {this.props.recipes[0].name}</a></li>);
        // recipesName.push(<li key={this.props.recipes[1].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[1].id})}> {this.props.recipes[1].name}</a></li>);
        // recipesName.push(<li key={this.props.recipes[2].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[2].id})}> {this.props.recipes[2].name}</a></li>);


        return(
            <div>
                {/*<div class="${styles.recipesLink}">*/}
                    <div style={{float: "left",
                        height: "300px"}}>
                    <ul>
                        {recipesName}
                    </ul>
                    <p><button onClick={()=> alert("Еще ничего нет")}>Добавить новый рецепт</button></p>
                </div>
                {recipeDescription}
            </div>
        );
    }

}