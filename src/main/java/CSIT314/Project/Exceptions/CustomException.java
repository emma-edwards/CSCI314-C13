package CSIT314.Project.Exceptions;

public class CustomException extends RuntimeException{
    public CustomException(Long id, String name) {
        super("-- Warning : Could not find " + name + " with ID : " + id + "! --");
    }
}
