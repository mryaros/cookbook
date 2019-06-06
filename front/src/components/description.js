import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForDescription.css';
import Request from './newRequest';
import PropTypes from 'prop-types';

export default class Description extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const recipe = this.props.recipe;
        const algorithm = [];
        const ingredients = [];
        if(recipe.algorithm[recipe.algorithm.length-1].length!=0){
            recipe.algorithm.push('');
        }
        if (recipe.ingredients[recipe.ingredients.length-1].name.length!=0) {
            recipe.ingredients.push({name: ''})
        }
        let i = 0;
        recipe.algorithm.forEach((item)=>{
            i++;
            algorithm.push(
                <li className={"list"} key = {i} >
                    <input type="text" value={item} onChange={(e) => {
                  if(e.target.value === ''){
                     this.props.deleteLiAlgorithm(recipe.algorithm.indexOf(item));
                  } else {
                      this.props.algorithmChange(recipe.algorithm.indexOf(item), e.target.value)
                  }
            }}/>
                </li>)
        });
        recipe.ingredients.forEach((ingredient)=>{
            i++;
            ingredients.push(<li className={"list"} key = {i}><input type="text" value={ingredient.name} onChange={(e) => {
                if(e.target.value === ''){
                    // this.setState({value: algorithm.indexOf(document.getElementById(item+"li"))});
                    this.props.deleteLiIngredient(recipe.ingredients.indexOf(ingredient));
                } else {
                    this.props.ingredientChange(recipe.ingredients.indexOf(ingredient), e.target.value)
                }
            }}/></li>)
        });

        return(
            <div className={"divStyles"}>
                <p className={"h2"}>Название рецепта: <input type="text" value={recipe.name} onChange={(e) => this.props.onDescChange("name", e.target.value)}/></p>
                <p className={"h2"}>Категория: <input type="text" value={recipe.category.name} onChange={(e) => {this.props.onDescChange("category", e.target.value)}}/></p>
                <p className={"h2"}>Описание: <input type="text" value={recipe.description} onChange={(e) => {this.props.onDescChange("description", e.target.value)}}/></p>
                <ol className={"olStyles"}>
                    <p className={"h2"}>Алгоритм:</p>
                    {algorithm}
                </ol>
                <ol className={"olStyles"}>
                    <p className={"h2"}>Ингредиенты: </p>
                    {ingredients}
                </ol>
                <div className={"buttons"}>
                    <a href="#" className="button7" onClick={() => {
                        let promise;
                        // console.log(recipe.id.indexOf("new"));
                        if (recipe.id > 0) {
                            delete recipe.category.id;
                            if(recipe.algorithm.length > 1) recipe.algorithm.pop();
                            if(recipe.ingredients.length > 1) recipe.ingredients.pop();
                            recipe.ingredients.forEach((ingredient)=>{delete ingredient.id});
                            promise = Request.requestPost("recipes/" + recipe.id, recipe);
                        }
                        else {
                            if(recipe.algorithm.length > 1) recipe.algorithm.pop();
                            if(recipe.ingredients.length > 1) recipe.ingredients.pop();
                            promise = Request.requestPost("recipes", recipe);
                        }
                        promise.then(result => {
                            if(result.status == "FAIL")
                                window.location.href = '/error?mes='+result.message;
                            // console.log(result);
                        }, error =>{ console.log(error)});
                        this.props.updateRecipes();
                        // window.location.href = '/myrecipes';
                    }}>Сохранить</a>

                    <a href="#" className="button7"onClick={() => {
                        let promise = Request.requestDelete("recipes/"+recipe.id);
                        promise.then(result => {
                            if(result.status == "FAIL")
                                window.location.href = '/error?mes='+result.message;
                        }, error =>{ console.log(error)});
                        this.props.updateRecipes();
                        // window.location.href = '/myrecipes';
                    }}>Удалить</a>
                </div>
            </div>
        );
    }
}

Description.propTypes = {
    recipe: PropTypes.object,
    deleteLiAlgorithm: PropTypes.func,
    algorithmChange: PropTypes.func,
    deleteLiIngredient: PropTypes.func,
    ingredientChange: PropTypes.func,
    onDescChange: PropTypes.func,
    updateRecipes: PropTypes.func,
}