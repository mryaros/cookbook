import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import AllRecipesLink from './allRecipesLink';
import Request from "./newRequest";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    name: "",
                    id: 0,
                    algorithm: [
                        "",
                    ],
                    description: "",
                    ingredients: [
                        {
                            name: ""
                        }
                    ],
                    category: {
                        name: ""
                    }
                },],
            recipeName: "",
            authorLogin: "",
            recipeCategory: ""
        }
    }

    search(){
        let url = "recipes/search?";
        if (this.state.recipeName!="") url = url+ "name=" +this.state.recipeName;
        if (this.state.authorLogin!="") url = url+ "&login=" +this.state.authorLogin;
        if (this.state.return!="") url = url+ "&category=" +this.state.recipeCategory;
        let promise = Request.requestGet(url);
        promise.then(result => {
            if(result.status == "FAIL")
                window.location.href = '/error?mes='+result.message;
            if(result.status == "SUCCES"){
                for(let i=0; i<result.data.length; i++){
                    let promise1 = Request.requestGet("persons/" + result.data[i].authorID);
                    promise1.then(result1 => {
                        if (result.status == "FAIL")
                            window.location.href = '/error?mes=' + result1.message;
                        if (result1.data.length != 0)
                            result.data[i].authorID= result1.data.login;
                    }, error1 => {
                        console.log(error1)
                    });}
                this.setState({recipes: result.data})
            }
        }, error => {console.log(error)});
    }

        render() {
        return(
            <div className={"divStyle"}>
                <Menu/>
                <div>
                    <p>Название рецепта: <input type="text" value = {this.state.recipeName} onChange={(e)=>{this.setState({recipeName:e.target.value})}}/></p>
                    <p>Логин автора: <input type="text" value = {this.state.authorLogin} onChange={(e)=>{this.setState({authorLogin:e.target.value})}}/></p>
                    <p>Категория: <input type="text" value = {this.state.recipeCategory} onChange={(e)=>{this.setState({recipeCategory:e.target.value})}}/></p>
                    <button className="button7" onClick={()=>{this.search();}}>Искать</button>
                </div>
                <AllRecipesLink recipes={this.state.recipes}/>

            </div>
        );
    }
}