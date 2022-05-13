package CSIT314.Project.Exceptions;

public class CustomException2 extends RuntimeException{
    public CustomException2(String name) {
        super("Warning, " + name);
    }
}
