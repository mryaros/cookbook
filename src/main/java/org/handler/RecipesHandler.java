package org.handler;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.domains.Ingredient;
import org.domains.Recipe;
import org.service.RecipeService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by kuznetcov-ia on 17.04.2019.
 */
@Api(value = "recipes", description = "Operation with recipesList")
@Path("/recipes")

public class RecipesHandler {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get all recipes")
    public ArrayList<Recipe> getRecipes(){return RecipeService.getInstance().getRecipes(); }

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Put new recipe")
    public String postRecipe(Recipe recipe){
        RecipeService.getInstance().addRecipe(recipe);
        return "Succes";
    }

    @GET @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get recipe by id")
    public Recipe getRecipe(@PathParam("id") int id){
        return RecipeService.getInstance().getRecipeById(id);
    }

    @POST @Path("/{id}/{like}")
    @Produces(MediaType.TEXT_PLAIN)
    @ApiOperation(value = "Update rating")
    public String updateRating(@PathParam("id") int id, @PathParam("like") int like){
        RecipeService.getInstance().updateRating(id, like);
        return "Succes";
    }
    @POST @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Update rating")
    public String updateRecipe(@PathParam("id") int id, Recipe recipe){
        RecipeService.getInstance().updateRecipe(id, recipe);
        return "succes";
    }

    @DELETE @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @ApiOperation(value = "Delete recipe")
    public String deleteRecipe(@PathParam("id") int id){
        RecipeService.getInstance().deleteRecipe(id);
        return "succes";
    }

    @GET @Path("/search")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Search by all fields")
    public ArrayList<Recipe> search(@DefaultValue("")@QueryParam("name") String name,
                                    @DefaultValue("")@QueryParam("category") String category,
                                    @DefaultValue("")@QueryParam("ingredient") List<String> ingredients,
                                    @DefaultValue("")@QueryParam("login") String login){

        return RecipeService.getInstance().search(name, category, ingredients, login);
        }

}
