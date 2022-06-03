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
    private String sNumber;
    private String streetName;
    private String suburb;
    private String report;
    private String total;

    public Request(){}

    public Request(Long id, String sNumber, String streetName, String suburb, String report, String total) {
        this.id = id;
        this.sNumber = sNumber;
        this.streetName = streetName;
        this.suburb = suburb;
        this.report = report;
        this.total = total;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getsNumber() {
        return sNumber;
    }

    public void setsNumber(String sNumber) {
        this.sNumber = sNumber;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getSuburb() {
        return suburb;
    }

    public void setSuburb(String suburb) {
        this.suburb = suburb;
    }

    public String getReport() {
        return report;
    }

    public void setReport(String report) {
        this.report = report;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public void setRequest(Request request){
        setsNumber(request.sNumber);
        setSuburb(request.suburb);
        setStreetName(request.streetName);
        setReport(request.report);
        setTotal(request.total);
    }
}
