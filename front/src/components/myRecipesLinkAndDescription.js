import MyRecipesLink from './myRecipesLink';
import Menu from './menu';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecLADesc.css';
import Request from './newRequest'
export default class MyRecipesLinkAndDescription extends React.Component {
    constructor(props){
        super(props);
        this.state = { recipes: [
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
                },
            ]}
            // this.doRequest=this.doRequest.bind(this);
            // this.doRequest();
    }
    // doRequest(){
    //     let login;
    //     let promise1 = Request.requestGet("persons/"+localStorage.getItem("userId"));
    //     promise1.then(result => {
    //         if(result.status == "FAIL")
    //             window.location.href = '/error?mes='+result.message;
    //         login = result.data.login;
    //         let promise = Request.requestGet("recipes/search?login="+login);
    //         promise.then(result => {
    //             if(result.status == "FAIL")
    //                 window.location.href = '/error?mes='+result.message;
    //             if (result.data.length != 0)
    //                 this.setState({recipes: result.data});
    //         }, error =>{ console.log(error)});
    //     }, error =>{ console.log(error)});
    // }
    render() {
        return (
            <div className={"divStyle"}>
                <Menu/>
                {/*<MyRecipesLink recipes={this.state.recipes} updateRecipes = {this.doRequest}/>*/}
                <MyRecipesLink recipes={this.state.recipes}/>
            </div>

        );
    }
}
