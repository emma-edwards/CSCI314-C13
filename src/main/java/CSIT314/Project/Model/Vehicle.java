package CSIT314.Project.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String plate;
    private String vehicleMake;
    private double price;
    private String insuranceProvider;

    public Vehicle(){}

    public Vehicle(Long id, String plate, String vehicleMake, double price, String insuranceProvider) {
        this.id = id;
        this.plate = plate;
        this.vehicleMake = vehicleMake;
        this.price = price;
        this.insuranceProvider = insuranceProvider;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public String getVehicleMake() {
        return vehicleMake;
    }

    public void setVehicleMake(String vehicleMake) {
        this.vehicleMake = vehicleMake;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getInsuranceProvider() {
        return insuranceProvider;
    }

    public void setInsuranceProvider(String insuranceProvider) {
        this.insuranceProvider = insuranceProvider;
    }

    public void setVehicle(Vehicle vehicle){
        setPlate(vehicle.plate);
        setVehicleMake(vehicle.vehicleMake);
        setPrice(vehicle.price);
        setInsuranceProvider(vehicle.insuranceProvider);
    }
}
