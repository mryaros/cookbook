package org.domains;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.ws.rs.core.Response;

@ApiModel("Answer Class")
public class Answer {
    private String status;
    private String message;
    private Object data;

    public Answer(String status){
        this.status = status;
    }
    public Answer(String status, Object data){
        this(status, "", data);
    }
    public Answer(String status, String message){
        this(status, message, null);
    }
    public Answer (String status, String message, Object data){
        this.status = status;
        this.message = message;
        this.data = data;
    }
    @ApiModelProperty(value = "Status of response", example = "Succes")
    public String getStatus(){
        return status;
    }

    @ApiModelProperty(value = "Message", example = "You can't do this")
    public String getMessage(){
        return message;
    }

    @ApiModelProperty(value = "Body of response", example = "{ \"name\": \"Вася\", \"age\": 35 }")
    public Object getData(){
        return data;
    }
}
