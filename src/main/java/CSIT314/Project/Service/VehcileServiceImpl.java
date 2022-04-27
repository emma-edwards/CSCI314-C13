package CSIT314.Project.Service;

import CSIT314.Project.Model.Vehicle;

public interface VehcileServiceImpl {
    public Vehicle getVehicleById(Long id);
    public Vehicle createVehicle(Vehicle newVehicle);
    public Vehicle updateVehicle(Vehicle vehicle, Long id);
    public void deleteVehicle(Long id);
}