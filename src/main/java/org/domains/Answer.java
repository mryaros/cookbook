package org.domains;

public class Answer {
    private String status;
    private String message;
    private Object data;

    public Answer(String status){
        this.status = status;
    }
    public Answer(String status, Object data){
        this.status = status;
        this.data = data;
    }
    public Answer(String status, String message){
        this.status = status;
        this.message = message;
    }
    public Answer (String status, String message, Object data){
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public String getStatus(){
        return status;
    }

    public String getMessage(){
        return message;
    }

    public Object getData(){
        return data;
    }
}
