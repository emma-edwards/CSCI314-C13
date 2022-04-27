package CSIT314.Project.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Professional {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String DOB;
    private String email;
    private int phone;
    private int yearsWorked;

    public Professional(){}

    public Professional(Long id, String firstName, String lastName, String DOB, String email, int phone, int yearsWorked) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
        this.email = email;
        this.phone = phone;
        this.yearsWorked = yearsWorked;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDOB() {
        return DOB;
    }

    public void setDOB(String DOB) {
        this.DOB = DOB;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public int getYearsWorked() {
        return yearsWorked;
    }

    public void setYearsWorked(int yearsWorked) {
        this.yearsWorked = yearsWorked;
    }

    public void setProfessional(Professional professional){
        setFirstName(professional.firstName);
        setLastName(professional.lastName);
        setDOB(professional.DOB);
        setEmail(professional.email);
        setPhone(professional.phone);
        setYearsWorked(professional.yearsWorked);
    }
}
