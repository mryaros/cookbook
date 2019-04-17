package org.service;

import org.POJO.Ingredient;
import org.POJO.Person;
import org.POJO.Recipe;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by kuznetcov-ia on 17.04.2019.
 */
public class Singleton {
    public Singleton(){}

    public ArrayList<Recipe> findByName(ArrayList<Recipe> recipes, String name){
        ArrayList<Recipe> recipesName = new ArrayList<Recipe>();

        for (Recipe recipe : recipes){
            if (recipe.getName()== name)
                recipesName.add(recipe);
        }

        return recipesName;
    }

    public ArrayList<Recipe> findByAuthor(ArrayList<Recipe> recipes, int id){
        ArrayList<Recipe> recipesAuthor = new ArrayList<Recipe>();

        for (Recipe recipe : recipes){
            if (recipe.getAuthor().getId()== id)
                recipesAuthor.add(recipe);
        }

        return recipesAuthor;
    }

    public ArrayList<Recipe> findByCategory(ArrayList<Recipe> recipes, int id){
        ArrayList<Recipe> recipesCategoty = new ArrayList<Recipe>();

        for (Recipe recipe : recipes){
            if (recipe.getCategory().getId() == id)
                recipesCategoty.add(recipe);
        }

        return recipesCategoty;
    }

    public ArrayList<Recipe> findByIngredients(ArrayList<Recipe> recipes, ArrayList id){
        ArrayList<Recipe> recipesIngredient = new ArrayList<Recipe>();
        ArrayList ingredientsId = new ArrayList();

        for (Recipe recipe : recipes) {
            for (Ingredient ingredient : recipe.getIngredients()) {
                ingredientsId.add(ingredient.getId());
            }
            if (ingredientsId.containsAll(id))
                recipesIngredient.add(recipe);
            ingredientsId.clear();
        }

        return recipesIngredient;
    }

    public boolean isExists(ArrayList<Person> persons, String login, String password){
        for (Person person : persons){
            if (person.getLogin() == login && person.getPassword() == password)
                return true;
        }

        return false;
    }
}
