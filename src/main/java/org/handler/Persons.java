package org.handler;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.service.PersonService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by kuznetcov-ia on 18.04.2019.
 */
@Api(value = "persons", description = "Operation with personsList")
@Path("/registration")
public class Persons {
    @PUT
    @Produces(MediaType.TEXT_PLAIN)
    @ApiOperation(value = "User registration")
    public String putPerson(@DefaultValue("")@QueryParam("name") String name,
                            @DefaultValue("")@QueryParam("surname") String surname,
                            @DefaultValue("")@QueryParam("login") String login,
                            @DefaultValue("")@QueryParam("password") String password){
        if (PersonService.getInstance().addPerson(name, surname, login, password))
            return "succes";
        return "login is busy";
    }
}
