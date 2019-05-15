import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
    render() {
        return(
            <ul>
                <li>Мой аккаунт</li>
                <li>Мои рецепты</li>
                <li>Все рецепты</li>
                <li>Поиск</li>
            </ul>
        );
    }
}

class Description extends React.Component{
    render() {
        const recipe = this.props.idRecipe;
        const algorithm = [];
        const ingredients = [];

        recipe.algorithm.forEach((item)=>{
            algorithm.push(<li>{item}</li>)
        });
        recipe.ingredients.forEach((ingredient)=>{
            ingredients.push(<li>{ingredient.name}</li>)
        });

        return(
            <div>
                <p>Название рецепта: {recipe.name}</p>
                <p>Категория: {recipe.category.name}</p>
                <p>Описание: {recipe.description}</p>
                <ul>    Алгоритм:
                    {algorithm}
                </ul>
                <ul>Ингредиенты: {ingredients}</ul>
                <button onClick={()=> alert("Еще ничего нет")}>Обновить рецепт</button>
                <button onClick={()=> alert("Еще ничего нет")}>Удалить рецепт</button>
            </div>
        );
    }
}

class MyRecipesLink extends React.Component{
    constructor(props){
        super(props);
        this.recipeClick = this.recipeClick.bind(this);
        this.state = {i: 0};
    }

    recipeClick(q){
        this.setState({i: 1});
    }

    render() {
        let recipeDescription = <Description idRecipe={this.props.recipes[this.state.i]}/>;
        const recipesName = [];
        let j = 1;


        // this.props.recipes.forEach((recipe)=>{
        //      recipesName.push(<p><a href = "#" onClick={() => this.setState({i: j})}> {recipe.name}</a></p>);
        // });

        recipesName.push(<p><a href = "#" onClick={() => this.setState({i: 0})}> {this.props.recipes[0].name}</a></p>);
        recipesName.push(<p><a href = "#" onClick={() => this.setState({i: 1})}> {this.props.recipes[1].name}</a></p>);
        recipesName.push(<p><a href = "#" onClick={() => this.setState({i: 2})}> {this.props.recipes[2].name}</a></p>);


        return(
            <div>
                <div style={{float: "left", height: "300px"}}>{recipesName}
                <p><button onClick={()=> alert("Еще ничего нет")}>Добавить новый рецепт</button></p>
                </div>
                {recipeDescription}
            </div>
        );
    }

}

class MyRecipesLinkAndDescription extends React.Component{
    render() {
        return(
            <div>
                <Menu/>
                <MyRecipesLink recipes={this.props.recipes}/>
            </div>

        );
    }

}

const RECIPES = [
    {
        name: "omlet",
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

ReactDOM.render(
<MyRecipesLinkAndDescription recipes={RECIPES}/>,
document.getElementById('app')
);

module.hot.accept();