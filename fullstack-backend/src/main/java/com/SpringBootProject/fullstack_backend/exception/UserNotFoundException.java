package com.SpringBootProject.fullstack_backend.exception;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id){
        super("Could Not Found The User With ID "+id);
    }
}
