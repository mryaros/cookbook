import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForDescription.css'
import PropTypes from 'prop-types';
import Request from "./newRequest";

export default class AllDescription extends React.Component{
    render() {
        const recipe = this.props.recipe;
        const algorithm = [];
        const ingredients = [];
        let i = 0;
        recipe.algorithm.forEach((item)=>{
            i++;
            algorithm.push(<li className={"list"} key = {i}>{item}</li>)
        });
        recipe.ingredients.forEach((ingredient)=>{
            i++;
            ingredients.push(<li className={"list"} key = {i}>{ingredient.name}</li>)
        });
        return(
            <div className={"divStyles"}>
                <p className={"h2"}>Название рецепта: {recipe.name}</p>
                <p className={"h2"}>Категория: {recipe.category.name}</p>
                <p className={"h2"}>Автор: {recipe.authorID}</p>
                <p className={"h2"}>Описание: {recipe.description}</p>
                <ol className={"olStyles"}>    <p className={"h2"}>Алгоритм:</p>
                    {algorithm}
                </ol>
                <ol className={"olStyles"}><p className={"h2"}>Ингредиенты: </p>{ingredients}</ol>
            </div>
        );
    }
}

AllDescription.propTypes = {
    recipe: PropTypes.object,
}