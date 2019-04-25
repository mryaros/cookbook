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
    @GET @Path("/qwe")
         @Produces(MediaType.APPLICATION_JSON)
         @PermitAll
         public Answer qwe(){
        ArrayList<Ingredient> asd = new ArrayList<Ingredient>();
        asd.add(new Ingredient("potato"));
        asd.add(new Ingredient("carrot"));
        ArrayList<String> zxc =  new ArrayList<String>();
        zxc.add("1. zxc");
        zxc.add("2. vbn");
        RecipeService.getInstance().addRecipe(new Recipe("borsh", new Category("soup"), asd, "qwe",zxc, 1));
        return new Answer("Succes", RecipeService.getInstance().getRecipes());
    }
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get all recipes")
    public Answer getRecipes(){return new Answer("Succes", RecipeService.getInstance().getRecipes()); }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Put new recipe")
    public Answer postRecipe(Recipe recipe, @Context HttpHeaders httpHeaders){
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        recipe.setAuthorID(PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)).getId());

        RecipeService.getInstance().addRecipe(recipe);
        return new Answer("Succes");
    }

    @GET @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get recipe by id")
    public Answer getRecipe(@PathParam("id") int id){
        if(RecipeService.getInstance().getRecipeById(id)==null){
            return new Answer("fail", "There is no recipe with this ID");
        }
        return new Answer("Succes", RecipeService.getInstance().getRecipeById(id));
    }

    @POST @Path("/{id}/{like}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Update rating")
    public Answer updateRating(@PathParam("id") int id, @PathParam("like") int like, @Context HttpHeaders httpHeaders){
        if(!(like== 1 || like==0 || like==-1))
            return new Answer("fail", "You can't do that. Please do not cheat");
        if(RecipeService.getInstance().getRecipeById(id)==null){
            return new Answer("fail", "There is no recipe with this ID");
        }
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        RecipeService.getInstance().updateRating(id, PersonService.getInstance().getPerson(SessionService.getInstance().decodeBase64(encodedLogin)).getId(), like);
        return new Answer("Succes");
    }
    @POST @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Update recipe")
    public Answer updateRecipe(@PathParam("id") int id, Recipe recipe, @Context HttpHeaders httpHeaders){
        if(RecipeService.getInstance().getRecipeById(id)==null){
            return new Answer("fail", "There is no recipe with this ID");
        }
        recipe.setId(id);
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        String decodedLogin = SessionService.getInstance().decodeBase64(encodedLogin);
        recipe.setAuthorID(PersonService.getInstance().getPerson(decodedLogin).getId());
        if(decodedLogin.equals(PersonService.getInstance().getPerson(recipe.getAuthorID()).getLogin())) {
            RecipeService.getInstance().updateRecipe(id, recipe);
            return new Answer("succes");
        }
        return new Answer("fail","You can't update this recipe");
    }

    @DELETE @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Delete recipe")
    public Answer deleteRecipe(@PathParam("id") int id, @Context HttpHeaders httpHeaders){
        if(RecipeService.getInstance().getRecipeById(id)==null){
            return new Answer("fail", "There is no recipe with this ID");
        }
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        if(SessionService.getInstance().decodeBase64(encodedLogin).equals(PersonService.getInstance().getPerson(RecipeService.getInstance().getRecipeById(id).getAuthorID()).getLogin())) {
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
                                    @QueryParam("ingredient") List<String> ingredients,
                                    @DefaultValue("")@QueryParam("login") String login){

        return new Answer("Succes", RecipeService.getInstance().search(name, category, ingredients, login));
        }

}
