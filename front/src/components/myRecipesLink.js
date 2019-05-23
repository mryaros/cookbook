import Description from './description';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecipeLink.css';

export default class MyRecipesLink extends React.Component {
    constructor(props){
        super(props);
        // this.EMPTYRECIPE = {
        //     name: "Рецепт",
        //     id: this.props.recipes.length,
        //     algorithm: [
        //         ""
        //     ],
        //     description: "",
        //     ingredients: [
        //         {
        //             name: ""
        //         }
        //     ],
        //     category: {
        //         name: ""
        //     }
        // };


        // this.recipeClick = this.recipeClick.bind(this);
        this.state = {
            recipeId: 0,
            selectedReceipt:this.props.recipes[0]
        };
        this.checkAlg = this.checkAlg.bind(this);
        this.checkIng = this.checkIng.bind(this);
    }

    // componentDidMount() {
    //     fetch("localhost:8080/recipes", {headers: {'Session' : ''}})
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     items: result.items
    //                 });
    //             },
    //             // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
    //             // чтобы не перехватывать исключения из ошибок в самих компонентах.
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }

    recipeClick(q){
        this.setState({recipeId: 1});
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
            id: this.props.recipes.length,
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
        }
        let recipeDescription = <Description
            // idRecipe={this.props.recipes[this.state.recipeId]}
            idRecipe={this.state.selectedReceipt}
            onDescChange ={(pole, value)  => {
                console.log(value);
                let temp = this.state.selectedReceipt;
                switch (pole) {
                    case ("name"):temp.name = value; break;
                    case ("category"):temp.category.name = value; break;
                    case ("description"):temp.description = value; break;

                }
                this.setState({selectedReceipt:temp});
                // this.props.recipes[this.state.recipeId].recipeName = value
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

        this.props.recipes.forEach((recipe) => {
            recipesName.push(<li key={recipe.id} ><a href="#" onClick={() => {
                 // this.recipeDescription.changeRecipe(recipe);
                this.setState({recipeId: recipe.id,
                    selectedReceipt:this.props.recipes[recipe.id]
                })}}><div>{recipe.name}</div></a></li>);
        });

        // items.data.map(item => (
        //     recipesName.push(<li key={item.id} style = {styles.liStyle}><a style={styles.aStyle} href = "#"
        //                                                                        onClick={() => this.setState({recipeId: item.id})}>
        //         <div style={styles.liDivStyle}>item.name</div></a></li>)
        // ))

            // recipesName.push(<li key={this.props.recipes[0].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[0].id})}> {this.props.recipes[0].name}</a></li>);
            // recipesName.push(<li key={this.props.recipes[1].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[1].id})}> {this.props.recipes[1].name}</a></li>);
            // recipesName.push(<li key={this.props.recipes[2].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[2].id})}> {this.props.recipes[2].name}</a></li>);


        return (
            <div className={"recipes"}>
                {/*<div class="${styles.recipesLink}">*/}
                <div className={"bigDivStyle"}>
                    <ol className={"zebra"}>
                        {recipesName}
                    </ol>
                    <p className={"button"}>
                        <a href="#" className="button7" onClick={() => {
                            this.setState({recipeId: EMPTYRECIPE.id,
                                selectedReceipt:EMPTYRECIPE});
                            this.props.recipes.push(EMPTYRECIPE);

                        }}>добавить</a>
                    </p>
                </div>
                {recipeDescription}
            </div>
        );

    }

}