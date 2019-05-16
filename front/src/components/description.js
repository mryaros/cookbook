import React from 'react';
import ReactDOM from 'react-dom';
import {styles} from './styles/stylesForDescription'

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
            <div style={styles.divStyles}>
                <p>Название рецепта: {recipe.name}</p>
                <p>Категория: {recipe.category.name}</p>
                <p>Описание: {recipe.description}</p>
                <ol style={styles.olStyles}>    Алгоритм:
                    {algorithm}
                </ol>
                <ol style={styles.olStyles}>Ингредиенты: {ingredients}</ol>
                <button onClick={()=> alert("Еще ничего нет")}>Обновить рецепт</button>
                <button onClick={()=> alert("Еще ничего нет")}>Удалить рецепт</button>
            </div>
        );
    }
}