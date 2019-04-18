package org.service;

import org.domains.Person;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class PersonService {
    private HashMap<Integer, Person> persons;
    private AtomicInteger idSingle;

    private PersonService(){}
    public static PersonService getInstance() {
        return SingletonHolder.instance;
    }
    private static final class SingletonHolder {
        private static final PersonService instance = new PersonService();
    }

    public boolean addPerson(String name, String surname, String login, String password){
        if(!isExists(login, password)) {
            int id = idSingle.addAndGet(1);
            persons.put(id, new Person(name, surname, login, password, id));
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
        return getPerson(1); //
    }
    public ArrayList<Person> getPersons(){
        ArrayList<Person> personsAll = new ArrayList<Person>();
        for(Person person : persons.values())
            personsAll.add(person);
        return personsAll;
    }
    public void updatePerson(Person person){
        persons.put(person.getId(), person);
    }

    public boolean isExists(String login, String password){
        for (Person person : persons.values()){
            if (person.getLogin().equals(login) && person.getPassword().equals(password))
                return true;
        }
        return false;
    }
}
