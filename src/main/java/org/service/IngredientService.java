package org.service;

import org.domains.Ingredient;
import org.domains.Person;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class IngredientService {
    private HashMap<Integer, Ingredient> ingredients;
    private AtomicInteger idSingle;

    private IngredientService(){}
    public static IngredientService getInstance(){
        return SingletonHolder.instance;
    }
    private static final class SingletonHolder{
        private static final IngredientService instance = new IngredientService();
    }

    public void addIngredient(String name){
        int id = idSingle.addAndGet(1);
        ingredients.put(id, new Ingredient(name, id));
    }
    public void deleteIngredient(int id){
        ingredients.remove(id);
    }
    public Ingredient getIngredient(int id){
        return ingredients.get(id);
    }
    public ArrayList<Ingredient> getIngredients(){
        ArrayList<Ingredient> ingredientsAll = new ArrayList<Ingredient>();
        for (Ingredient ingredient : ingredients.values())
            ingredientsAll.add(ingredient);
        return ingredientsAll;
    }
    public void updateIngrediet(String name, int id){
        ingredients.get(id).setName(name);
    }
    public boolean isExists(String name){
        for (Ingredient ingredient : ingredients.values()){
            if (ingredient.getName().equals(name))
                return true;
        }
        return false;
    }
}
