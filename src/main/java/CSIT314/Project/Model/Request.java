package CSIT314.Project.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean requestStatus;
    private boolean member;
    private double price;
    private int availableProfessionals;
    //private Professional professionalProfile;
    private String professionalNotes;
    private String professionalReviews;
    private int professionalPhone;
    private String professionalEstimatedTime;
    private double professionalPayment;
    private String customerNotes;
    private int customerPhone;
    private String report;

    public Request(){}

    public Request(Long id, boolean requestStatus, boolean member, double price, int availableProfessionals, String professionalNotes, String professionalReviews, int professionalPhone, String professionalEstimatedTime, double professionalPayment, String customerNotes, int customerPhone, String report) {
        this.id = id;
        this.requestStatus = requestStatus;
        this.member = member;
        this.price = price;
        this.availableProfessionals = availableProfessionals;
        //this.professionalProfile = professionalProfile;
        this.professionalNotes = professionalNotes;
        this.professionalReviews = professionalReviews;
        this.professionalPhone = professionalPhone;
        this.professionalEstimatedTime = professionalEstimatedTime;
        this.professionalPayment = professionalPayment;
        this.customerNotes = customerNotes;
        this.customerPhone = customerPhone;
        this.report = report;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isRequestStatus() {
        return requestStatus;
    }

    public void setRequestStatus(boolean requestStatus) {
        this.requestStatus = requestStatus;
    }

    public boolean isMember() {
        return member;
    }

    public void setMember(boolean member) {
        this.member = member;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getAvailableProfessionals() {
        return availableProfessionals;
    }

    public void setAvailableProfessionals(int availableProfessionals) {
        this.availableProfessionals = availableProfessionals;
    }

   /* public Professional getProfessionalProfile() {
        return professionalProfile;
    }

    public void setProfessionalProfile(Professional professionalProfile) {
        this.professionalProfile = professionalProfile;
    }*/

    public String getProfessionalNotes() {
        return professionalNotes;
    }

    public void setProfessionalNotes(String professionalNotes) {
        this.professionalNotes = professionalNotes;
    }

    public String getProfessionalReviews() {
        return professionalReviews;
    }

    public void setProfessionalReviews(String professionalReviews) {
        this.professionalReviews = professionalReviews;
    }

    public int getProfessionalPhone() {
        return professionalPhone;
    }

    public void setProfessionalPhone(int professionalPhone) {
        this.professionalPhone = professionalPhone;
    }

    public String getProfessionalEstimatedTime() {
        return professionalEstimatedTime;
    }

    public void setProfessionalEstimatedTime(String professionalEstimatedTime) {
        this.professionalEstimatedTime = professionalEstimatedTime;
    }

    public double getProfessionalPayment() {
        return professionalPayment;
    }

    public void setProfessionalPayment(double professionalPayment) {
        this.professionalPayment = professionalPayment;
    }

    public String getCustomerNotes() {
        return customerNotes;
    }

    public void setCustomerNotes(String customerNotes) {
        this.customerNotes = customerNotes;
    }

    public int getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(int customerPhone) {
        this.customerPhone = customerPhone;
    }

    public String getReport() {
        return report;
    }

    public void setReport(String report) {
        this.report = report;
    }

    public void setRequest(Request request){
        setRequestStatus(request.requestStatus);
        setMember(request.member);
        setPrice(request.price);
        setAvailableProfessionals(request.availableProfessionals);
        setProfessionalNotes(request.professionalNotes);
        setProfessionalReviews(request.professionalReviews);
        setProfessionalPhone(request.professionalPhone);
        setProfessionalEstimatedTime(request.professionalEstimatedTime);
        setProfessionalPayment(request.professionalPayment);
        setCustomerNotes(request.customerNotes);
        setCustomerPhone(request.customerPhone);
        setReport(request.report);
    }
}
