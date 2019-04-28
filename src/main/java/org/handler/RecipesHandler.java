package org.handler;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.domains.Answer;
import org.domains.Category;
import org.domains.Ingredient;
import org.domains.Recipe;
import org.domains.Person;
import org.service.PersonService;
import org.service.RecipeService;
import org.service.SessionService;

import javax.annotation.security.PermitAll;
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
    public Answer getRecipes(){return Answer.succes(RecipeService.getInstance().getRecipes()); }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Put new recipe")
    public Answer postRecipe(Recipe recipe, @Context HttpHeaders httpHeaders){
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        recipe.setAuthorID(PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)).getId());

        RecipeService.getInstance().addRecipe(recipe);
        return Answer.succes();
    }

    @GET @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get recipe by id")
    public Answer getRecipe(@PathParam("id") int id){
        if(RecipeService.getInstance().getRecipeById(id)==null){
            return Answer.fail("There is no recipe with this ID");
        }
        return Answer.succes(RecipeService.getInstance().getRecipeById(id));
    }

    @POST @Path("/like/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Update rating")
    public Answer updateRatingLike(@PathParam("id") int id, @Context HttpHeaders httpHeaders){
        if(RecipeService.getInstance().getRecipeById(id)==null){
            return Answer.fail("There is no recipe with this ID");
        }
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        if (RecipeService.getInstance().getRecipeById(id).getRating().get(PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)).getId()) == 1)
            RecipeService.getInstance().updateRating(id, PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)).getId(), 0);
        else RecipeService.getInstance().updateRating(id, PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)).getId(), 1);
        return Answer.succes();
    }

    @POST @Path("/dislike/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Update rating")
    public Answer updateRatingDislike(@PathParam("id") int id, @Context HttpHeaders httpHeaders){
        if(RecipeService.getInstance().isExists(id)){
            return Answer.fail("There is no recipe with this ID");
        }
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        if (RecipeService.getInstance().getRecipeById(id).getRating().get(PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)).getId()) == -1)
            RecipeService.getInstance().updateRating(id, PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)).getId(), 0);
        else RecipeService.getInstance().updateRating(id, PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)).getId(), -1);
        return Answer.succes();
    }

    @POST @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Update recipe")
    public Answer updateRecipe(@PathParam("id") int id, Recipe recipe, @Context HttpHeaders httpHeaders){
        if(RecipeService.getInstance().isExists(id)){
            return Answer.fail("There is no recipe with this ID");
        }
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        recipe.setAuthorID(PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)).getId());
        if(SessionService.getInstance().isActionAllowed(encodedLogin, recipe.getAuthorID())) {
            RecipeService.getInstance().updateRecipe(id, recipe);
            return Answer.succes();
        }
        return Answer.fail("You can't update this recipe");
    }

    @DELETE @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Delete recipe")
    public Answer deleteRecipe(@PathParam("id") int id, @Context HttpHeaders httpHeaders){
        if(RecipeService.getInstance().isExists(id)){
            return Answer.fail("There is no recipe with this ID");
        }
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        if(SessionService.getInstance().decodeBase64(encodedLogin).equals(PersonService.getInstance().getPerson(RecipeService.getInstance().getRecipeById(id).getAuthorID()).getLogin())) {
            RecipeService.getInstance().deleteRecipe(id);
            return Answer.succes();
        }
        return Answer.fail("You can't delete this recipe");
    }

    @GET @Path("/search")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Search by all fields")
    public Answer search(@DefaultValue("")@QueryParam("name") String name,
                                    @DefaultValue("")@QueryParam("category") String category,
                                    @QueryParam("ingredient") List<String> ingredients,
                                    @DefaultValue("")@QueryParam("login") String login){

        return Answer.succes(RecipeService.getInstance().search(name, category, ingredients, login));
        }

}
