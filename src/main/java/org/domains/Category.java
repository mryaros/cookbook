package org.domains;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel("Category Bean")
public class Category {
    private String name;
    private int id;

    public Category(){}
    public Category(String name){
        this(name, -1);
    }
    public Category(String name, int id){
        this.name = name;
        this.id = id;
    }

    @ApiModelProperty(value = "Name of category", example ="soup")
    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    @ApiModelProperty(value = "ID of category", example ="1")
    public int getId(){
        return id;
    }

}
