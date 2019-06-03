package org.service;

import org.domains.Person;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class PersonService {
    private ConcurrentHashMap<Integer, Person> persons = new ConcurrentHashMap<Integer, Person>();
    private AtomicInteger idSingle = new AtomicInteger();

    private PersonService(){}
    public static PersonService getInstance() {
        return SingletonHolder.instance;
    }
    private static final class SingletonHolder {
        private static final PersonService instance = new PersonService();
    }

//    public boolean addPerson(String name, String surname, String login, String password, String role){
//        if(!isExists(login)) {
//            int id = idSingle.addAndGet(1);
//            persons.put(id, new Person(name, surname, login, password, role, id));
//            return true;
//        }
//        return false;
//    }

    public boolean addPerson(Person person){
        if(!isExists(person.getLogin())){
            int id = idSingle.addAndGet(1);
            person.setId(id);
            persons.put(id, person);
            return true;
        }
        return false;
    }
    public void deletePerson(int id){
        persons.remove(id);
    }
    public Person getPerson(int id){
        return persons.get(id);
    }
    public Person getPerson(String login){
        for(Person person : persons.values()){
            if (person.getLogin().equals(login))
                return person;
        }
        return null;
    }
    public ArrayList<Person> getPersons(){
        return new ArrayList<Person>(persons.values());
    }
    public void updatePerson(int id, Person person){
        person.setPassword(getPerson(id).getPassword());
        person.setId(id);
        persons.put(id, person);
    }

    public boolean isExists(String login){
        for (Person person : persons.values()){
            if (person.getLogin().equals(login))
                return true;
        }
        return false;
    }

    public boolean isExists(int id){
        return (persons.get(id) == null);

    }

    public boolean checkLoginPassword(String login, String password){
        for (Person person : persons.values()){
            if (person.getLogin().equals(login)&&person.getPassword().equals(password))
                return true;
        }
        return false;
    }
}
