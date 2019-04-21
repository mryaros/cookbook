package org.provider;





import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.net.URI;


public class AuthenticationFilter implements javax.ws.rs.container.ContainerRequestFilter {
    @Override
    public void filter(ContainerRequestContext containerRequestContext) throws IOException {
        if(containerRequestContext.getCookies().isEmpty()){
            //containerRequestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("").build());
            containerRequestContext.abortWith(Response.seeOther(URI.create("/authorization")).build());
        }
    }
}
