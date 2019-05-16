import React from 'react';
import ReactDOM from 'react-dom';
export default class Description extends React.Component{
    render() {
        const recipe = this.props.idRecipe;
        const algorithm = [];
        const ingredients = [];

        recipe.algorithm.forEach((item)=>{
            algorithm.push(<li key = {item.toString()}>{item}</li>)
        });
        recipe.ingredients.forEach((ingredient)=>{
            ingredients.push(<li key = {ingredient.name.toString()}>{ingredient.name}</li>)
        });

        return(
            <div>
                <p>Название рецепта: {recipe.name}</p>
                <p>Категория: {recipe.category.name}</p>
                <p>Описание: {recipe.description}</p>
                <ul>    Алгоритм:
                    {algorithm}
                </ul>
                <ul>Ингредиенты: {ingredients}</ul>
                <button onClick={()=> alert("Еще ничего нет")}>Обновить рецепт</button>
                <button onClick={()=> alert("Еще ничего нет")}>Удалить рецепт</button>
            </div>
        );
    }
}