import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForDescription.css'

export default class Description extends React.Component{
    render() {
        const recipe = this.props.idRecipe;
        const algorithm = [];
        const ingredients = [];

        recipe.algorithm.forEach((item)=>{
            algorithm.push(<li className={"list"} key = {item.toString()}>{item}</li>)
        });
        recipe.ingredients.forEach((ingredient)=>{
            ingredients.push(<li className={"list"} key = {ingredient.name.toString()}>{ingredient.name}</li>)
        });

        return(
            <div className={"divStyles"}>
                <p className={"h2"}>Название рецепта: {recipe.name}</p>
                <p className={"h2"}>Категория: {recipe.category.name}</p>
                <p className={"h2"}>Описание: {recipe.description}</p>
                <ol className={"olStyles"}>    <p className={"h2"}>Алгоритм:</p>
                    {algorithm}
                </ol>
                <ol className={"olStyles"}><p className={"h2"}>Ингредиенты: </p>{ingredients}</ol>
            </div>
        );
    }
}