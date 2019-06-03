import AllRecipesLink from './allRecipesLink';
import Menu from './menu';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecLADesc.css'
import Request from "./newRequest";
export default class AllRecipes extends React.Component {
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
                },]}

        let promise = Request.requestGet("recipes", 'GET');
        promise.then(result => {
            console.log(result);
            console.log(result.data.length !=0);
            if (result.data.length != 0)
                this.setState({RECIPES: result.data})
            // this.RECIPES = result.data;
        }, error =>{ console.log(error)});
    }
    render() {
        // const RECIPES = [
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
        return (
            <div className={"divStyle"}>
                <Menu/>
                <AllRecipesLink recipes={this.state.RECIPES}/>
                {/*<main>*/}
                {/*{this.props.children}*/}
                {/*</main>*/}

            </div>

        );
    }
}
