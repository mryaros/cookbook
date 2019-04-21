package org.handler;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.domains.Person;
import org.service.PersonService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.net.URI;
import java.util.ArrayList;

@Api(value = "persons", description = "Operation with personsList")
@Path("/persons")
public class PersonsHandler {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Person> getpersons(){
        return PersonService.getInstance().getPersons();
    }

    @POST @Path("/registration")
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "User registration")
    public String postPerson(Person person){
        if (PersonService.getInstance().addPerson(person))
            return "succes";
        return "login is busy";
    }
    @POST @Path("/authorization")
    @ApiOperation(value = "User authorization")
    public Response personAuthorization(@QueryParam("login") String login, @QueryParam("password") String password){
        if (PersonService.getInstance().isExists(login, password)){
            return Response.ok().cookie(new NewCookie("login", login)).build();
        } else {
            return Response.seeOther(URI.create("/authorization")).build();
        }
    }

    @GET @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Get user by id")
    public Person getPerson(@PathParam("id") int id){
        return PersonService.getInstance().getPerson(id);
    }
    @POST @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    @ApiOperation(value = "Update person by id")
    public String updatePerson(@PathParam("id") int id, Person person){
        PersonService.getInstance().updatePerson(id, person);
        return "Succes";
    }
    @DELETE @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @ApiOperation(value = "Delete person")
    public String deletePerson(@PathParam("id") int id){
        PersonService.getInstance().deletePerson(id);
        return "Succes";
    }
}
