package CSIT314.Project.Controller;

import CSIT314.Project.Model.Vehicle;
import CSIT314.Project.Service.VehcileServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    private VehcileServiceImpl vehicleService;

    @GetMapping("/getVehicle/{id}")
    Vehicle getVehicleById(@PathVariable Long id) {
        return vehicleService.getVehicleById(id);
    }

    @PostMapping("/addVehicle")
    Vehicle createVehicle(@RequestBody Vehicle newVehicle) {return vehicleService.createVehicle(newVehicle);
    }

    @PutMapping("/updateVehicle/{id}")
    Vehicle updateVehicle(@RequestBody Vehicle vehicle, @PathVariable Long id){
        return vehicleService.updateVehicle(vehicle, id);
    }

    @DeleteMapping("deleteVehicle/{id}")
    void deleteVehicle(@PathVariable Long id){
        vehicleService.deleteVehicle(id);
    }
}
