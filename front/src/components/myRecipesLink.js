import Description from './description';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecipeLink.css';
import Request from "./newRequest";

export default class MyRecipesLink extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedReceipt:
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
                },
            ]
        };
        this.checkAlg = this.checkAlg.bind(this);
        this.checkIng = this.checkIng.bind(this);
        this.doRequest=this.doRequest.bind(this);
        this.doRequest();
    }
    doRequest(){
        let login;
        let promise1 = Request.requestGet("persons/"+localStorage.getItem("userId"));
        promise1.then(result => {
            if(result.status == "FAIL")
                window.location.href = '/error?mes='+result.message;
            login = result.data.login;
            let promise = Request.requestGet("recipes/search?login="+login);
            promise.then(result => {
                if(result.status == "FAIL")
                    window.location.href = '/error?mes='+result.message;
                if (result.data.length != 0) {
                    this.setState({recipes: result.data});
                    this.setState({selectedReceipt: result.data[0]});
                }
            }, error =>{ console.log(error)});
        }, error =>{ console.log(error)});
    }



    checkAlg(){
        let alg = this.state.selectedReceipt.algorithm;
        let temp = this.state.selectedReceipt;
        if (alg[alg.length-1].length!=0) {
            temp.algorithm.push('')
            this.setState({selectedReceipt:temp});
        }
    }

    checkIng(){
        let ing = this.state.selectedReceipt.ingredients;
        let temp = this.state.selectedReceipt;
        if (ing[ing.length-1].name.length!=0) {
            temp.ingredients.push({name: ''})
            this.setState({selectedReceipt:temp});
        }
    }

    render() {
        const EMPTYRECIPE = {
            name: "Рецепт",
            id: -this.state.recipes.length,
            algorithm: [
                ""
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
        };
        let recipeDescription = <Description
            updateRecipes = {this.doRequest}
            recipe={this.state.selectedReceipt}
            onDescChange ={(pole, value)  => {
                let temp = this.state.selectedReceipt;
                switch (pole) {
                    case ("name"):temp.name = value; break;
                    case ("category"):temp.category.name = value; break;
                    case ("description"):temp.description = value; break;

                }
                this.setState({selectedReceipt:temp});
            }}
            algorithmChange = {(i, value) => {
                let temp = this.state.selectedReceipt;
                temp.algorithm[i] = value;
                this.setState({selectedReceipt:temp},this.checkAlg);

            }}
            deleteLiAlgorithm = {(i) => {
                let temp = this.state.selectedReceipt;
                temp.algorithm.splice(i, 1);
                this.setState({selectedReceipt:temp});
            }}
            ingredientChange = {(i, value) =>{
                let temp = this.state.selectedReceipt;
                temp.ingredients[i].name = value;
                this.setState({selectedReceipt:temp}, this.checkIng);
            }}
            deleteLiIngredient = {(i) => {
                let temp = this.state.selectedReceipt;
                temp.ingredients.splice(i, 1);
                this.setState({selectedReceipt:temp});
            }}

        />;
        const recipesName = [];

        this.state.recipes.forEach((recipe) => {
            recipesName.push(<li key={recipe.id} ><a href="#" onClick={() => {
                let reci;
                this.state.recipes.forEach((rec)=>{if (recipe.id == rec.id) reci = rec;})
                this.setState({
                   selectedReceipt: reci,
                })}}><div>{recipe.name}</div></a></li>);
        });

        return (
            <div className={"recipes"}>
                <div className={"bigDivStyle"}>
                    <ol className={"zebra"}>
                        {recipesName}
                    </ol>
                    <p className={"button"}>
                        <a href="#" className="button7" onClick={() => {
                            this.setState({
                                selectedReceipt:EMPTYRECIPE});
                            this.state.recipes.push(EMPTYRECIPE);

                        }}>добавить</a>
                    </p>
                </div>
                {recipeDescription}
            </div>
        );

    }

}