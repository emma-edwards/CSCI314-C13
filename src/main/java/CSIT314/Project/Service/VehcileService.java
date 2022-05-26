package CSIT314.Project.Service;

import CSIT314.Project.Exceptions.CustomException;
import CSIT314.Project.Model.Vehicle;
import CSIT314.Project.Repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehcileService implements VehcileServiceImpl {
    @Autowired
    private VehicleRepository vehicleRepository;

    public Vehicle getVehicleById(Long id) {
        return vehicleRepository.findById(id).orElseThrow(() -> new CustomException(id, "Request"));
    }

    public Vehicle createVehicle(Vehicle newVehicle){
        return vehicleRepository.save(newVehicle);
    }

    //Code is from https://spring.io/guides/tutorials/rest/
    public Vehicle updateVehicle(Vehicle vehicle, Long id){
        return vehicleRepository.findById(id)
                .map(vehicleMap -> {
                    vehicleMap.setVehicle(vehicle);
                    return vehicleRepository.save(vehicle);
                })
                .orElseGet(() -> {
                    vehicle.setId(id);
                    return vehicleRepository.save(vehicle);
                });
    }

    public void deleteVehicle(Long id){
        vehicleRepository.deleteById(id);
    }
}
