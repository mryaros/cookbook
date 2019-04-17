package org.service;

import org.domains.Person;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class UserService {
    private HashMap<Integer, Person> persons;
    private AtomicInteger idSingle;

    private UserService(){}
    public static UserService getInstance() {
        return SingletonHolder.instance;
    }
    private static final class SingletonHolder {
        private static final UserService instance = new UserService();
    }

    public void addPerson(String name, String surname, String login, String password){
        int id = idSingle.addAndGet(1);
        persons.put(id, new Person(name, surname, login, password, id));
    }
    public void deletePerson(int id){
        persons.remove(id);
    }
    public Person getPerson(int id){
        return persons.get(id);
    }
    public ArrayList<Person> getPersons(){
        ArrayList<Person> personsAll = new ArrayList<Person>();
        for(Person person : persons.values())
            personsAll.add(person);
        return personsAll;
    }
    //реализовать красиво
    public void updatePerson(int id){}

    public boolean isExists(String login, String password){
        for (Person person : persons.values()){
            if (person.getLogin().equals(login) && person.getPassword().equals(password))
                return true;
        }
        return false;
    }
}
