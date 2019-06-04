import MyRecipesLink from './myRecipesLink';
import Menu from './menu';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecLADesc.css';
import Request from './newRequest'
import User from "./singletonUser";
export default class MyRecipesLinkAndDescription extends React.Component {
    constructor(props){
        super(props);
        this.state = { RECIPES: [
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
        let login;
        let promise1 = Request.requestGet("persons/"+localStorage.getItem("userId"), 'Get');
        promise1.then(result => {
            if(result.status == "FAIL")
                window.location.href = '/error?mes='+result.message;
            login = result.data.login;
            let promise = Request.requestGet("recipes/search?login="+login, 'GET');
            promise.then(result => {
                if(result.status == "FAIL")
                    window.location.href = '/error?mes='+result.message;
                if (result.data.length != 0)
                    this.setState({RECIPES: result.data});
            }, error =>{ console.log(error)});
        }, error =>{ console.log(error)});

        // let promise = Request.requestGet("recipes/search?login="+login, 'GET');
        // promise.then(result => {
        //     if (result.data.length != 0)
        //         this.setState({RECIPES: result.data});
        //     console.log(result);
        // }, error =>{ console.log(error)});
    }

    render() {
        // let RECIPES = [
        //     {
        //         name: "omlet",
        //         id: 0,
        //         algorithm: [
        //             "1. razbit yaico",
        //             "2. pozarit xleb c dvyx ctoron",
        //             "3. dobavit xleb k yaicy"
        //         ],
        //         description: "very delishion",
        //         ingredients: [
        //             {
        //                 name: "yaico"
        //             },
        //             {
        //                 name: "xleb"
        //             },
        //             {
        //                 name: "milk"
        //             }
        //         ],
        //         category: {
        //             name: "breakfast"
        //         }
        //     },
        //     {
        //         name: "супчик",
        //         id: 1,
        //         algorithm: [
        //             "1. закинуть ингредиенты",
        //             "2. помешать",
        //             "3. добавить соль, перец по вкусу"
        //         ],
        //         description: "very delishion",
        //         ingredients: [
        //             {
        //                 name: "картошка"
        //             },
        //             {
        //                 name: "моркошка"
        //             },
        //             {
        //                 name: "сельдерейчик"
        //             }
        //         ],
        //         category: {
        //             name: "обед"
        //         }
        //     },
        //     {
        //         name: "кашка манка",
        //         id: 2,
        //         algorithm: [
        //             "1. налить молоко",
        //             "2. сыпануть кашу",
        //             "3. помешать"
        //         ],
        //         description: "very delishion",
        //         ingredients: [
        //             {
        //                 name: "молоко"
        //             },
        //             {
        //                 name: "манка"
        //             }
        //         ],
        //         category: {
        //             name: "breakfast"
        //         }
        //     }
        // ];
        // Request.requestGet("recipes", 'Get', this.RECIPES);
        return (
            <div className={"divStyle"}>
                <Menu/>
                <MyRecipesLink recipes={this.state.RECIPES}/>
            </div>

        );
    }
}
