import AllRecipesLink from './allRecipesLink';
import Menu from './menu';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecLADesc.css'
import Request from "./newRequest";
export default class AllRecipes extends React.Component {
    constructor(props){
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
                },]}

        let promise = Request.requestGet("recipes");
        promise.then(result => {
            if(result.status == "FAIL")
                window.location.href = '/error?mes='+result.message;
            if (result.data.length != 0) {
                for(let i=0; i<result.data.length; i++){
                    let promise1 = Request.requestGet("persons/" + result.data[i].authorID);
                    promise1.then(result1 => {
                        if (result.status == "FAIL")
                            window.location.href = '/error?mes=' + result1.message;
                        if (result1.data.length != 0)
                            result.data[i].authorID= result1.data.login;
                        // this.setState({RECIPES: result.data});
                    }, error1 => {
                        console.log(error1)
                    });}
                this.setState({recipes: result.data});
            }
        }, error =>{ console.log(error)});
    }
    render() {
        return (
            <div className={"divStyle"}>
                <Menu/>
                <AllRecipesLink recipes={this.state.recipes}/>

            </div>

        );
    }
}
