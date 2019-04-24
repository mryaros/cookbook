package org.handler;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.domains.Answer;
import org.domains.Ingredient;
import org.domains.Recipe;
import org.service.PersonService;
import org.service.RecipeService;
import org.service.SessionService;

import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
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
    public Answer getRecipes(){return new Answer("Succes", RecipeService.getInstance().getRecipes()); }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Put new recipe")
    public Answer postRecipe(Recipe recipe){
        RecipeService.getInstance().addRecipe(recipe);
        return new Answer("Succes");
    }

    @GET @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get recipe by id")
    public Answer getRecipe(@PathParam("id") int id){
        return new Answer("Succes", RecipeService.getInstance().getRecipeById(id));
    }

    @POST @Path("/{id}/{like}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Update rating")
    public Answer updateRating(@PathParam("id") int id, @PathParam("like") int like, @Context HttpHeaders httpHeaders){
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        RecipeService.getInstance().updateRating(id, PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)), like);
        return new Answer("Succes");
    }
    @POST @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Update recipe")
    public Answer updateRecipe(@PathParam("id") int id, Recipe recipe, @Context HttpHeaders httpHeaders){
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        if(SessionService.getInstance().decodeBase64(encodedLogin).equals(recipe.getAuthor().getLogin())) {
            RecipeService.getInstance().updateRecipe(id, recipe);
            return new Answer("succes");
        }
        return new Answer("fail","You can't update this recipe");
    }

    @DELETE @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Delete recipe")
    public Answer deleteRecipe(@PathParam("id") int id, @Context HttpHeaders httpHeaders){
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        if(SessionService.getInstance().decodeBase64(encodedLogin).equals(RecipeService.getInstance().getRecipeById(id).getAuthor().getLogin())) {
            RecipeService.getInstance().deleteRecipe(id);
            return new Answer("succes");
        }
        return new Answer("fail","You can't delete this recipe");
    }

    @GET @Path("/search")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Search by all fields")
    public Answer search(@DefaultValue("")@QueryParam("name") String name,
                                    @DefaultValue("")@QueryParam("category") String category,
                                    @DefaultValue("")@QueryParam("ingredient") List<String> ingredients,
                                    @DefaultValue("")@QueryParam("login") String login){

        return new Answer("Succes", RecipeService.getInstance().search(name, category, ingredients, login));
        }

}
