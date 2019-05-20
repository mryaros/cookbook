import Description from './allDescription';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMyRecipeLink.css';

export default class MyRecipesLink extends React.Component{
    constructor(props){
        super(props);
        // this.recipeClick = this.recipeClick.bind(this);
        this.state = {
            recipeId: 0
        };
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

    // recipeClick(q){
    //     this.setState({recipeId: 1});
    // }

    render() {

        let recipeDescription = <Description idRecipe={this.props.recipes[this.state.recipeId]}/>;
        const recipesName = [];

        this.props.recipes.forEach((recipe) => {
            recipesName.push(<li key={recipe.id} ><a href="#" onClick={() => this.setState({recipeId: recipe.id})}><div>{recipe.name}</div></a></li>);
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
                </div>
                {recipeDescription}
            </div>
        );

    }

}