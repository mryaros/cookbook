package org.service;

import org.glassfish.jersey.internal.util.Base64;

/**
 * Created by kuznetcov-ia on 23.04.2019.
 */
public class SessionService {

    private SessionService(){}
    public static SessionService getInstance() {
        return SingletonHolder.instance;
    }
    private static final class SingletonHolder {
        private static final SessionService instance = new SessionService();
    }

    public String toBase64(String login){
        return new String(Base64.encode((login).getBytes()));
    }
}
