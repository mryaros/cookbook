package org.domains;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;

@ApiModel("Recipe Class")
public class Recipe {
    private String name;
    private Category category;
    private ArrayList<Ingredient> ingredients;
    private String description;
    private ArrayList<String> algorithm;
    private Person author;
    private ConcurrentHashMap<Person, Integer> rating;
    private int id;

    public Recipe(){}
    public Recipe(String name, Category category, ArrayList<Ingredient> ingredients, String description, ArrayList<String> algorithm, Person author){
        this(name, category, ingredients, description, algorithm, author,  -1);
    }
    public Recipe(String name, Category category, ArrayList<Ingredient> ingredients, String description, ArrayList<String> algorithm, Person author, int id){
        this.name = name;
        this.category = category;
        this.ingredients = ingredients;
        this.description = description;
        this.algorithm = algorithm;
        this.author = author;
        this.rating = null;
        this.id = id;
    }

    @ApiModelProperty(value = "Name of recipe", example = "cookies")
    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    @ApiModelProperty(value = "Category of recipe", example = "soup")
    public Category getCategory(){
        return category;
    }

    public  void setCategory(Category category){
        this.category = category;
    }

    @ApiModelProperty(value = "Ingredients of recipe", example ="potatoes, carrots")
    public ArrayList<Ingredient> getIngredients(){
        return ingredients;
    }

    public void setIngredients(ArrayList<Ingredient> ingredients){
        this.ingredients = ingredients;
    }

    public void addIngredient(Ingredient ingredient){
        this.ingredients.add(ingredient);
    }

    @ApiModelProperty(value = "Description of recipe", example ="This recipe for...")
    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    @ApiModelProperty(value = "Algorithm of recipe", example ="1. Put potato")
    public ArrayList<String> getAlgorithm(){
        return algorithm;
    }

    public void setAlgorithm(ArrayList<String> algorithm){
        this.algorithm = algorithm;
    }

    @ApiModelProperty(value = "Autoor of recipe", example ="Ivan Ivanov")
    public Person getAuthor(){
        return author;
    }

    public void setAuthor(Person author){
        this.author = author;
    }

    @ApiModelProperty(value = "Rating of recipe", example ="100500")
    public ConcurrentHashMap<Person, Integer> getRating(){
        return rating;
    }

    public void setRating(Person person, int value){
        rating.put(person, value);
    }

    @ApiModelProperty(value = "ID of recipe", example ="1")
    public int getId(){
        return id;
    }

    public void setId(int id){this.id = id;}
}
