import React from 'react';
import ReactDOM from 'react-dom';
import MyRecipesLinkAndDescription from './components/myRecipesLinkAndDescription';
import Person from './components/person';
import AllRecipes from './components/allRecipes'
import AuthorizationWindow from './components/authorizationWindow'
import RegistrationWindow from './components/registrationWindow'
import AllPersons from './components/allPersons'

import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom";



// import './components/styles'
// import 'bootstrap/dist/css/bootstrap.min.css';

// Your routes.js file
// import routes from './routes';
// import "./components/style.css";
// class Menu extends React.Component {
//     render() {
//         return(
//             <ul>
//                 <li>Мой аккаунт</li>
//                 <li>Мои рецепты</li>
//                 <li>Все рецепты</li>
//                 <li>Поиск</li>
//             </ul>
//         );
//     }
// }

// class Description extends React.Component{
//     render() {
//         const recipe = this.props.idRecipe;
//         const algorithm = [];
//         const ingredients = [];
//
//         recipe.algorithm.forEach((item)=>{
//             algorithm.push(<li key = {item.toString()}>{item}</li>)
//         });
//         recipe.ingredients.forEach((ingredient)=>{
//             ingredients.push(<li key = {ingredient.name.toString()}>{ingredient.name}</li>)
//         });
//
//         return(
//             <div>
//                 <p>Название рецепта: {recipe.name}</p>
//                 <p>Категория: {recipe.category.name}</p>
//                 <p>Описание: {recipe.description}</p>
//                 <ul>    Алгоритм:
//                     {algorithm}
//                 </ul>
//                 <ul>Ингредиенты: {ingredients}</ul>
//                 <button onClick={()=> alert("Еще ничего нет")}>Обновить рецепт</button>
//                 <button onClick={()=> alert("Еще ничего нет")}>Удалить рецепт</button>
//             </div>
//         );
//     }
// }
//
// class MyRecipesLink extends React.Component{
//     constructor(props){
//         super(props);
//         this.recipeClick = this.recipeClick.bind(this);
//         this.state = {recipeId: 0};
//     }
//
//     recipeClick(q){
//         this.setState({recipeId: 1});
//     }
//
//     render() {
//         let recipeDescription = <Description idRecipe={this.props.recipes[this.state.recipeId]}/>;
//         const recipesName = [];
//
//
//
//          this.props.recipes.forEach((recipe)=>{
//             recipesName.push(<li key={recipe.id}><a href = "#" onClick={() => this.setState({recipeId: recipe.id})}> {recipe.name}</a></li>);
//          });
//
//         // recipesName.push(<li key={this.props.recipes[0].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[0].id})}> {this.props.recipes[0].name}</a></li>);
//         // recipesName.push(<li key={this.props.recipes[1].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[1].id})}> {this.props.recipes[1].name}</a></li>);
//         // recipesName.push(<li key={this.props.recipes[2].id}><a href = "#" onClick={() => this.setState({recipeId: this.props.recipes[2].id})}> {this.props.recipes[2].name}</a></li>);
//
//
//         return(
//             <div>
//                 <div style={{float: "left", height: "300px"}}>
//                     <ul>
//                         {recipesName}
//                     </ul>
//                 <p><button onClick={()=> alert("Еще ничего нет")}>Добавить новый рецепт</button></p>
//                 </div>
//                 {recipeDescription}
//             </div>
//         );
//     }
//
// }
//
// class MyRecipesLinkAndDescription extends React.Component{
//     render() {
//         return(
//             <div>
//                 <Menu/>
//                 <MyRecipesLink recipes={this.props.recipes}/>
//             </div>
//
//         );
//     }
//
// }

const RECIPES = [
    {
        name: "omlet",
        id: 0,
        algorithm: [
            "1. razbit yaico",
            "2. pozarit xleb c dvyx ctoron",
            "3. dobavit xleb k yaicy"
        ],
        description: "very delishion",
        ingredients: [
            {
                name: "yaico"
            },
            {
                name: "xleb"
            },
            {
                name: "milk"
            }
        ],
        category: {
            name: "breakfast"
        }
    },
    {
        name: "супчик",
        id: 1,
        algorithm: [
            "1. закинуть ингредиенты",
            "2. помешать",
            "3. добавить соль, перец по вкусу"
        ],
        description: "very delishion",
        ingredients: [
            {
                name: "картошка"
            },
            {
                name: "моркошка"
            },
            {
                name: "сельдерейчик"
            }
        ],
        category: {
            name: "обед"
        }
    },
    {
        name: "кашка манка",
        id: 2,
        algorithm: [
            "1. налить молоко",
            "2. сыпануть кашу",
            "3. помешать"
        ],
        description: "very delishion",
        ingredients: [
            {
                name: "молоко"
            },
            {
                name: "манка"
            }
        ],
        category: {
            name: "breakfast"
        }
    }
];

const PERSON =
    {
        message: "",
        data: {
            name: "Katia",
            id: 1,
            surname: "Leiberova",
            login: "leiberova",
            role: "USER"
        },
        status: "SUCCES"
    }
;


// ReactDOM.render(
//     <HashRouter hashType={"noslash"}>
//         <Route path="/" exact component={MyRecipesLinkAndDescription} />
//         <Route path="/person" component={Person} />
//     </HashRouter>,
// document.getElementById('app')
// );
ReactDOM.render(
    <Router >
        <Route path="/" exact component={MyRecipesLinkAndDescription} />
        <Route path="/person" component={Person} />
        <Route path="/allrecipes" component={AllRecipes} />
        <Route path="/authorization" component={AuthorizationWindow}/>
        <Route path="/registration" component={RegistrationWindow}/>
        <Route path="/allpersons" component={AllPersons}/>
    </Router>,
    document.getElementById('app')
);
// ReactDOM.render(
//     <MyRecipesLinkAndDescription recipes={RECIPES}/>,
//     document.getElementById('app')
// );
//
// ReactDOM.render(
//     <Person person={PERSON.data}/>,
//     document.getElementById('app')
// );

module.hot.accept();