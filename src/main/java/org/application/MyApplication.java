package org.application;

import io.swagger.jaxrs.config.BeanConfig;
import org.glassfish.jersey.filter.LoggingFilter;
import org.glassfish.jersey.server.ResourceConfig;
import org.handler.PersonsHandler;
import org.handler.RecipesHandler;
import org.provider.AuthenticationFilter;
import org.provider.CORSFilter;


public class MyApplication extends ResourceConfig
{
    public MyApplication(){
        packages("org");
        register(LoggingFilter.class);
//        register(CORSFilter.class);
        register(AuthenticationFilter.class);
        register(PersonsHandler.class);
        register(RecipesHandler.class);
    }
}
