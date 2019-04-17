package org.handler;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.domains.Recipe;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

/**
 * Created by kuznetcov-ia on 17.04.2019.
 */
@Api(value = "recipes", description = "Operation with recipesList")
@Path("/recipes")
public class Recipes {
    static ArrayList<Recipe> recipes = new ArrayList<Recipe>();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get all recipes")
    public ArrayList<Recipe> getRecipes(){return recipes; }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    @ApiOperation(value = "Put new recipe")
    public String putRecipe(Recipe recipe){
        recipes.add(recipe);
        return "Succes";
    }

}
