package org.service;

import org.domains.Category;
import org.domains.Ingredient;
import org.domains.Person;
import org.domains.Recipe;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by kuznetcov-ia on 17.04.2019.
 */
public class RecipeService {
    private HashMap<Integer, Recipe> recipes;
    private AtomicInteger idSingle;

    private RecipeService(){}
    private static final class SingletonHolder{
        private static final RecipeService instance = new RecipeService();
    }
    public static RecipeService getInstance(){
        return SingletonHolder.instance;
    }

    public void addRecipe(String name, Category category, ArrayList<Ingredient> ingredients,
                          String description, ArrayList<String> algorithm, Person author){
        int id = idSingle.addAndGet(1);
        recipes.put(id, new Recipe(name, category, ingredients, description, algorithm, author, id));
    }
    public void deleteRecipe(int id){
        recipes.remove(id);
    }
    //сделать надо красиво сразу для всех полей
    public void updateRecipe(int id){}
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

    public ArrayList<Recipe> findByName(String name){
        ArrayList<Recipe> recipesName = new ArrayList<Recipe>();

        for (Recipe recipe : recipes.values()){
            if (recipe.getName().equals(name))
                recipesName.add(recipe);
        }

        return recipesName;
    }
    public ArrayList<Recipe> findByAuthor(int id){
        ArrayList<Recipe> recipesAuthor = new ArrayList<Recipe>();

        for (Recipe recipe : recipes.values()){
            if (recipe.getAuthor().getId()== id)
                recipesAuthor.add(recipe);
        }

        return recipesAuthor;
    }
    public ArrayList<Recipe> findByCategory(int id){
        ArrayList<Recipe> recipesCategoty = new ArrayList<Recipe>();

        for (Recipe recipe : recipes.values()){
            if (recipe.getCategory().getId() == id)
                recipesCategoty.add(recipe);
        }

        return recipesCategoty;
    }
    public ArrayList<Recipe> findByIngredients(ArrayList id){
        ArrayList<Recipe> recipesIngredient = new ArrayList<Recipe>();
        ArrayList ingredientsId = new ArrayList();

        for (Recipe recipe : recipes.values()) {
            for (Ingredient ingredient : recipe.getIngredients()) {
                ingredientsId.add(ingredient.getId());
            }
            if (ingredientsId.containsAll(id))
                recipesIngredient.add(recipe);
            ingredientsId.clear();
        }

        return recipesIngredient;
    }


}
