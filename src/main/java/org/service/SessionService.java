package org.service;

import org.domains.Person;
import org.glassfish.jersey.internal.util.Base64;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by kuznetcov-ia on 23.04.2019.
 */
public class SessionService {
    private Map<String, Person> sessions = new HashMap<>();

    private SessionService(){}
    public static SessionService getInstance() {
        return SingletonHolder.instance;
    }
    private static final class SingletonHolder {
        private static final SessionService instance = new SessionService();
    }

    public void addSession(String login){
        sessions.put(toBase64(login), PersonService.getInstance().getPerson(login));
    }

    public String toBase64(String login){
        return new String(Base64.encode((login).getBytes()));
    }

    public String decodeBase64(String login){
        return new String(Base64.decode(login.getBytes()));
    }
}
