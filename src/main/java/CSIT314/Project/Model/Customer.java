package CSIT314.Project.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String DOB;
    private String email;
    private int phone;

    public Customer() {
    }

    public Customer(Long id, String firstName, String lastName, String DOB, String email, int phone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
        this.email = email;
        this.phone = phone;
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

    public void setCustomer (Customer customer) {
        if (customer.firstName != null) {
            setFirstName(customer.firstName);
        }
        if (customer.lastName != null) {
            setLastName(customer.lastName);
        }
        if (customer.DOB != null) {
            setDOB(customer.DOB);
        }
        if (customer.email != null) {
            setEmail(customer.email);
        }
        setPhone(customer.phone);
    }
}
