package org.domains;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("Person Class")
public class Person {
    private String name;
    private String surname;
    private String login;
    private String password;
    private String role;
    private int id;

    public Person(){}
    public Person(String name, String surname, String login, String password, String role){
        this(name, surname, login, password, role, -1);
    }
    public Person(String name, String surname, String login, String password, String role, int id){
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.password = password;
        this.role = role;
        this.id = id;
    }

    @ApiModelProperty(value = "Name of person", example = "Ivan")
    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }


    @ApiModelProperty(value = "Surname of person", example = "Ivanov")
    public String getSurname(){
        return surname;
    }

    public void setSurname(String surname){
        this.surname = surname;
    }

    @ApiModelProperty(value = "login of person", example = "mister123")
    public String getLogin(){
        return login;
    }

    public void setLogin(String login){
        this.login = login;
    }

    @ApiModelProperty(value = "Password of person", example = "qwe123")
    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    @ApiModelProperty(value = "role of person", example = "USER, ADMIN")
    public String getRole(){
        return role;
    }

    public void setRole(String role){
        this.role = role;
    }

    @ApiModelProperty(value = "id of person", example = "1")
    public int getId(){
        return id;
    }

    public void setId(int id){this.id = id;}

}
