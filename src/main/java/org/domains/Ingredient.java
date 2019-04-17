package org.domains;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("Ingredient Bean")
public class Ingredient {
    private String name;
    private int id;

    public Ingredient(){}
    public Ingredient(String name){
        this(name, -1);
    }
    public Ingredient(String name, int id){
        this.name = name;
        this.id = id;
    }

    @ApiModelProperty(value = "Name of ingredient", example ="potato")
    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    @ApiModelProperty(value = "ID of ingredient", example ="1")
    public int getId(){
        return id;
    }

}
