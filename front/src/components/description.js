import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForDescription.css';
import Request from './newRequest'

export default class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        };
        // this.componentqwe = this.componentqwe.bind(this);
    }
    checkAlg(){
        let alg = this.state.selectedReceipt.algorithm;
        let temp = this.state.selectedReceipt;
        if (alg[alg.length-1].length!=0) {
            temp.algorithm.push('')
            this.setState({selectedReceipt:temp});
        }
    }

    // componentqwe() {
    //     var xhr = new XMLHttpRequest();
    //
    //
    //     xhr.open("GET", "http://localhost:8080/cookbook_war_exploded/server/persons", true);
    //
    //     xhr.send();
    //
    //     xhr.onreadystatechange = function() {
    //         if (this.readyState != 4) return;
    //
    //         // по окончании запроса доступны:
    //         // status, statusText
    //         // responseText, responseXML (при content-type: text/xml)
    //
    //         if (this.status != 200) {
    //             // обработать ошибку
    //             alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
    //             return;
    //         }
    //
    //         console.log(this.responseText);
    //         // получить результат из this.responseText или this.responseXML
    //     }
        // fetch("http://localhost:8080/cookbook_war_exploded/server/persons", {
        //     method:'GET',
        //     mode:'no-cors',
        //     headers: {'Session' : ''}
        // })
        //     .then(res => {
        //         console.log(res);
        //         return res.json()
        //     })
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result.items
        //             });
        //         },
        //         // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        //         // чтобы не перехватывать исключения из ошибок в самих компонентах.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )


    render() {
        let res = null;
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
                    {/*<a href="#" className="button7" onClick={() => Request.requestGet("persons", 'GET', res)}>обновить</a>*/}
                    <a href="#" className="button7" onClick={() => {
                        let promise = Request.requestPostRecipe("recipes", 'POST', recipe);
                        promise.then(result => {
                            console.log(result);
                        }, error =>{ console.log(error)});
                    }}>обновить</a>

                    <a href="#" className="button7">удалить</a>
                </div>
            </div>
        );
    }
}