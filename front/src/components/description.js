import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForDescription.css'

export default class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 0};
    }


    render() {
        const recipe = this.props.idRecipe;
        const algorithm = [];
        const ingredients = [];

        recipe.algorithm.forEach((item)=>{
            algorithm.push(<li className={"list"} key = {item+"li"} id = {item}><input type="text" id={item+"s"} defaultValue={item} onChange={() => {
                // this.setState({value: algorithm.indexOf(document.getElementById(item).toString())});
                //  if(document.getElementById(item) == null){
                //      this.setState({value: algorithm.indexOf(document.getElementById(item+"li"))});
                //     // algorithm.splice( algorithm.indexOf(document.getElementById(item+"li").toString()),1);
                //  }
            }}/></li>)
        });
        recipe.ingredients.forEach((ingredient)=>{
            ingredients.push(<li className={"list"} key = {ingredient.name.toString()}><input type="text" defaultValue={ingredient.name}/></li>)
        });

        return(
            <div className={"divStyles"}>
                <p className={"h2"}>Название рецепта: <input type="text" value={recipe.name} onChange={() => {}}/></p>
                <p className={"h2"}>Категория: <input type="text" value={recipe.category.name} onChange={() => {}}/></p>
                <p className={"h2"}>Описание: <input type="text" value={recipe.description} onChange={() => {}}/></p>
                <ol className={"olStyles"}>    <p className={"h2"}>Алгоритм:</p>
                    {algorithm}
                    <li className={"list"} key={"q"+this.state.value.toString()} ><input type="text" id={this.state.value.toString()} onChange={() => {
                        recipe.algorithm.push(document.getElementById(this.state.value.toString()).value);
                        this.setState({value: this.state.value + 1});
                    }}/></li>
                </ol>
                <ol className={"olStyles"}><p className={"h2"}>Ингредиенты: </p>{ingredients}</ol>
                <div className={"buttons"}>
                    <a href="#" className="button7">обновить</a>
                    <a href="#" className="button7">удалить</a>
                </div>
            </div>
        );
    }
}