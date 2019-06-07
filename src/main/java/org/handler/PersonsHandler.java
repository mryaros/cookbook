package org.handler;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.domains.Answer;
import org.domains.Person;
import org.service.PersonService;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.net.Authenticator;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.glassfish.jersey.internal.util.Base64;
import org.service.RecipeService;
import org.service.SessionService;

@Api(value = "persons", description = "Operation with personsList")
@Path("/persons")
public class PersonsHandler {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @RolesAllowed("ADMIN")
    @PermitAll
    @JsonIgnoreProperties("password") //не уверен, будет ли правильно работать в случае с Answer
    @ApiOperation(value = "Get all persons")
    public Answer getpersons(){
        return Answer.succes(PersonService.getInstance().getPersons());
//        return new Answer("succes", PersonService.getInstance().getPersons());
    }

    @POST @Path("/registration")
    @PermitAll
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "User registration")
    public Answer postPerson(Person person){
        if (PersonService.getInstance().addPerson(person))
            return Answer.succes();
        return Answer.fail("login is busy");
    }
    @POST @Path("/authorization")
    @Consumes(MediaType.APPLICATION_JSON)
    @PermitAll
    @ApiOperation(value = "User authorization")
    public Answer personAuthorization(Map<String, String> map){
        if (PersonService.getInstance().checkLoginPassword(map.get("login"), map.get("password"))){
            SessionService.getInstance().addSession(map.get("login"));
            HashMap<String, String> hash = new HashMap<>();
            hash.put("header", SessionService.getInstance().getSession(map.get("login")));
            hash.put("id", String.valueOf(PersonService.getInstance().getPerson(map.get("login")).getId()));
            //return Answer.succes (SessionService.getInstance().toBase64(list.get(0)));
            return Answer.succes(hash);
//            return Answer.succes(SessionService.getInstance().getSession(map.get("login")));
        } else {
            return Answer.fail("check your login or password");
            //return Response.seeOther(URI.create("/authorization")).build();
        }
    }

    @GET @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @JsonIgnoreProperties("password") //не уверен, будет ли правильно работать в случае с Answer
    @ApiOperation(value = "Get user by id")
    public Answer getPerson(@PathParam("id") int id){
        if (PersonService.getInstance().isExists(id))
            return Answer.fail("There is no user with this ID");
        return Answer.succes(PersonService.getInstance().getPerson(id));
    }
    @POST @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Update person by id")
    public Answer updatePerson(@PathParam("id") int id, Person person, @Context HttpHeaders httpHeaders){
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        if (PersonService.getInstance().isExists(id))
            return Answer.fail("There is no user with this ID");
        if(SessionService.getInstance().isActionAllowed(encodedLogin, id)) {
            SessionService.getInstance().deleteSession(PersonService.getInstance().getPerson(id).getLogin());
            if (PersonService.getInstance().getPerson(person.getLogin()) != null)
                return Answer.fail("Сорян, но логин занят");
            PersonService.getInstance().updatePerson(id, person);
            SessionService.getInstance().addSession(person.getLogin());
            HashMap<String, String> hash = new HashMap<>();
            hash.put("header", SessionService.getInstance().getSession(person.getLogin()));
            return Answer.succes(hash);
        }
        return Answer.fail("You can't update this Person");
    }
    @DELETE @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ApiOperation(value = "Delete person")
    public Answer deletePerson(@PathParam("id") int id, @Context HttpHeaders httpHeaders){
        List<String> login = httpHeaders.getRequestHeader("Session");
        String encodedLogin = login.get(0);
        if (PersonService.getInstance().isExists(id))
            return Answer.fail("There is no user with this ID");
        if(SessionService.getInstance().isActionAllowed(encodedLogin, id)) {
            SessionService.getInstance().deleteSession(encodedLogin);
            RecipeService.getInstance().deleteAllRecipeByPersonId(id);
            PersonService.getInstance().deletePerson(id);
            return Answer.succes();
        }
        return  Answer.fail("You can't delete this person");
    }
}
