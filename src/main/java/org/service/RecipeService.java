package org.service;

import org.domains.Category;
import org.domains.Ingredient;
import org.domains.Person;
import org.domains.Recipe;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

public class RecipeService {
    private HashMap<Integer, Recipe> recipes = new HashMap<Integer, Recipe>();
    private AtomicInteger idSingle = new AtomicInteger();

    private RecipeService(){}
    public static RecipeService getInstance(){
        return SingletonHolder.instance;
    }
    private static final class SingletonHolder{
        private static final RecipeService instance = new RecipeService();
    }


    public void addRecipe(String name, String category, ArrayList<String> ingredientsName, //названия ингредиентов
                          String description, ArrayList<String> algorithm, String login){
        int id = idSingle.addAndGet(1);

        ArrayList<Ingredient> ingredientArrayList = new ArrayList<Ingredient>();
        for (String ingredientName : ingredientsName){
            ingredientArrayList.add(ingredients.get(addIngredient(ingredientName))); //добавление ингредиента в список ингредиентов, если его не существует, добавление ингредиента в список ингредентов в рецепте
        }

        recipes.put(id, new Recipe(name, categories.get(addCategory(category)), ingredientArrayList, description, algorithm, PersonService.getInstance().getPerson(login), id));
    }
    public void addRecipe(Recipe recipe){
        int id = idSingle.addAndGet(1);
        recipe.setId(id);
        recipes.put(id, recipe);
    }
    public void deleteRecipe(int id){
        recipes.remove(id);
    }
    public void updateRecipe(int id, Recipe recipe){
        recipe.setId(id);
        recipes.put(id, recipe);
    }
    public ArrayList<Recipe> getRecipes(){
        ArrayList<Recipe> recipesAll = new ArrayList<Recipe>();
        for (Recipe recipe : recipes.values()){
            recipesAll.add(recipe);
        }
        return recipesAll;
    }
    public Recipe getRecipeById(int id){
        return recipes.get(id);
    }

    public void updateRating(int id, int like){
        getRecipeById(id).setRating(getRecipeById(id).getRating() + like);
    }

    public ArrayList<Recipe> search(String name, String category, List<String> ingredients, String login){
        ArrayList<Recipe>  searchRecipe = getRecipes();
        ArrayList<String> ingredientsArrayList = new ArrayList<String>();
        for(int i = 0; i<ingredients.size(); i++) {
            ingredientsArrayList.add(ingredients.get(i));
        }
        if (!name.equals("")) searchRecipe = RecipeService.getInstance().findByName(searchRecipe, name);
        if (!category.equals("")) searchRecipe = RecipeService.getInstance().findByCategory(searchRecipe, category);
        if (ingredients.size()!=0) searchRecipe = RecipeService.getInstance().findByIngredients(searchRecipe, ingredientsArrayList);
        if (!login.equals("")) searchRecipe = RecipeService.getInstance().findByAuthor(searchRecipe, login);

        return searchRecipe;

    }

    public ArrayList<Recipe> findByName(ArrayList<Recipe> r, String name){
        ArrayList<Recipe> recipesName = new ArrayList<Recipe>();

        for (Recipe recipe : r){
            if (recipe.getName().equals(name))
                recipesName.add(recipe);
        }

        return recipesName;
    }
    public ArrayList<Recipe> findByAuthor(ArrayList<Recipe> r, String login){
        ArrayList<Recipe> recipesAuthor = new ArrayList<Recipe>();

        for (Recipe recipe : r){
            if (recipe.getAuthor().getLogin().equals(login))
                recipesAuthor.add(recipe);
        }

        return recipesAuthor;
    }
    public ArrayList<Recipe> findByCategory(ArrayList<Recipe> r, String name){
        ArrayList<Recipe> recipesCategoty = new ArrayList<Recipe>();

        for (Recipe recipe : r){
            if (recipe.getCategory().getName().equals(name))
                recipesCategoty.add(recipe);
        }

        return recipesCategoty;
    }
    public ArrayList<Recipe> findByIngredients(ArrayList<Recipe> r, ArrayList<String> name){
        ArrayList<Recipe> recipesIngredient = new ArrayList<Recipe>();

        for (Recipe recipe : r) {
            if (recipe.getIngredients().containsAll(name))
                recipesIngredient.add(recipe);
        }

        return recipesIngredient;
    }


    private HashMap<Integer, Category> categories = new HashMap<>();
    private AtomicInteger idCategory = new AtomicInteger();
    public int addCategory(String name){
        int i = isExistsCategory(name);
        if (i==(-1)) {
            int id = idCategory.addAndGet(1);
            categories.put(id, new Category(name, id));
            return id;
        }
        return i;
    }
    public void updateCategory(String name, int id){
        categories.get(id).setName(name);
    }
    public int isExistsCategory(String name){
        for (Category category : categories.values()){
            if (category.getName().equals(name))
                return category.getId();
        }
        return -1;
    }

    private HashMap<Integer, Ingredient> ingredients = new HashMap<>();
    private AtomicInteger idIngredient = new AtomicInteger();
    public int addIngredient(String name){
        int i = isExistsIngredient(name);
        if(i==(-1)) {
            int id = idIngredient.addAndGet(1);
            ingredients.put(id, new Ingredient(name, id));
            return id;
        }
        return i;
    }
    public void updateIngrediet(String name, int id){
        ingredients.get(id).setName(name);
    }
    public int isExistsIngredient(String name){
        for (Ingredient ingredient : ingredients.values()){
            if (ingredient.getName().equals(name))
                return ingredient.getId();
        }
        return -1;
    }
}
