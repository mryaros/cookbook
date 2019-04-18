package org.handler;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.domains.Recipe;
import org.service.RecipeService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

/**
 * Created by kuznetcov-ia on 17.04.2019.
 */
@Api(value = "recipes", description = "Operation with recipesList")
@Path("/recipes")
public class Recipes {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get all recipes")
    public ArrayList<Recipe> getRecipes(){return RecipeService.getInstance().getRecipes(); }

    @PUT
    @Produces(MediaType.TEXT_PLAIN)
    @ApiOperation(value = "Put new recipe")
    public String putRecipe(@DefaultValue("")@QueryParam("name") String name,
                            @DefaultValue("")@QueryParam("category") String category,
                            @DefaultValue("")@QueryParam("ingredient") ArrayList<String> ingredients,
                            @DefaultValue("")@QueryParam("description") String description,
                            @DefaultValue("")@QueryParam("algorithm") ArrayList<String> algorithm,
                            @DefaultValue("")@QueryParam("login") String login){
        RecipeService.getInstance().addRecipe(name, category, ingredients, description, algorithm, login);
        return "Succes";
    }

    @GET @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get recipe by id")
    public Recipe getRecipe(@PathParam("id") int id){
        return RecipeService.getInstance().getRecipeById(id);
    }

    @POST @Path("/id")
    @Produces(MediaType.TEXT_PLAIN)
    @ApiOperation(value = "Update rating")
    public String updateRating(@PathParam("id") int id, @QueryParam("like") int like){
        RecipeService.getInstance().getRecipeById(id).setRating(RecipeService.getInstance().getRecipeById(id).getRating()+like);
        return "Succes";
    }

    @GET @Path("/search")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Search by all fields")
    public ArrayList<Recipe> search(@DefaultValue("")@QueryParam("name") String name,
                                    @DefaultValue("")@QueryParam("category") String category,
                                    @DefaultValue("")@QueryParam("ingredient") ArrayList<String> ingredients,
                                    @DefaultValue("")@QueryParam("login") String login){
        ArrayList<Recipe>  searchRecipe = RecipeService.getInstance().getRecipes();
        if (!name.equals("")) searchRecipe = RecipeService.getInstance().findByName(searchRecipe, name);
        if (!category.equals("")) searchRecipe = RecipeService.getInstance().findByCategory(searchRecipe, category);
        if (ingredients.size()!=0) searchRecipe = RecipeService.getInstance().findByIngredients(searchRecipe, ingredients);
        if (!login.equals("")) searchRecipe = RecipeService.getInstance().findByAuthor(searchRecipe, login);

        return searchRecipe;
    }

}
