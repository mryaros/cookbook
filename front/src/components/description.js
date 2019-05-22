import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForDescription.css'

export default class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        };
    }
    checkAlg(){
        let alg = this.state.selectedReceipt.algorithm;
        let temp = this.state.selectedReceipt;
        if (alg[alg.length-1].length!=0) {
            temp.algorithm.push('')
            this.setState({selectedReceipt:temp});
        }
    }

    render() {
        const recipe = this.props.idRecipe;
        const algorithm = [];
        const ingredients = [];
        if(recipe.algorithm[recipe.algorithm.length-1].length!=0){
            recipe.algorithm.push('');
        }
        if (recipe.ingredients[recipe.ingredients.length-1].name.length!=0) {
            recipe.ingredients.push({name: ''})
        }
        recipe.algorithm.forEach((item)=>{
            algorithm.push(<li className={"list"} key = {recipe.algorithm.indexOf(item)} ><input type="text" value={item} onChange={(e) => {
                // this.setState({value: algorithm.indexOf(document.getElementById(item).toString())});
                  if(e.target.value === ''){
                     // this.setState({value: algorithm.indexOf(document.getElementById(item+"li"))});
                     this.props.deleteLiAlgorithm(recipe.algorithm.indexOf(item));
                  } else {
                      this.props.algorithmChange(recipe.algorithm.indexOf(item), e.target.value)
                  }
            }}/></li>)
        });
        recipe.ingredients.forEach((ingredient)=>{
            ingredients.push(<li className={"list"} key = {recipe.ingredients.indexOf(ingredient)}><input type="text" value={ingredient.name} onChange={(e) => {
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
                {/*<p className={"h2"}>Название рецепта: <input type="text" value={this.state.recipeName} onChange={(e) => {this.setState({recipeName: e.target.value})}}/></p>*/}

                <p className={"h2"}>Категория: <input type="text" value={recipe.category.name} onChange={(e) => {this.props.onDescChange("category", e.target.value)}}/></p>
                <p className={"h2"}>Описание: <input type="text" value={recipe.description} onChange={(e) => {this.props.onDescChange("description", e.target.value)}}/></p>
                <ol className={"olStyles"}>    <p className={"h2"}>Алгоритм:</p>
                    {algorithm}
                    {/*<li className={"list"} key={"q"+this.state.value.toString()} ><input type="text" id={recipe.algorithm.length.toString()} onChange={(e) => {*/}
                    {/*    recipe.algorithm.push(e.target.value);*/}
                    {/*    this.setState({value: recipe.algorithm.length});*/}
                    {/*}}/></li>*/}
                </ol>
                <ol className={"olStyles"}><p className={"h2"}>Ингредиенты: </p>{ingredients}
                    {/*<li className={"list"} key={"q"+this.state.value.toString()} ><input type="text" id={recipe.ingredients.length.toString()} onChange={(e) => {*/}
                    {/*    console.log(e.target.value);*/}
                    {/*    recipe.ingredients.push({name : e.target.value});*/}
                    {/*    this.setState({value: recipe.ingredients.length});*/}
                    {/*}}/></li>*/}
                </ol>
                <div className={"buttons"}>
                    <a href="#" className="button7">обновить</a>
                    <a href="#" className="button7">удалить</a>
                </div>
            </div>
        );
    }
}