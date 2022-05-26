package CSIT314.Project;

import CSIT314.Project.Model.Vehicle;
import CSIT314.Project.Repository.VehicleRepository;
import CSIT314.Project.Service.VehcileService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;


@ExtendWith(MockitoExtension.class)
public class VehicleControllerTests{
    @Mock
    private VehicleRepository vehicleRepository;

    @InjectMocks
    private VehcileService vehicleService;

    @Test
    void testVehicleSaved(){
        Vehicle vehicle = new Vehicle(1L, "ABC1234", "Toyota", 10000.0, "NRMA");

        given(vehicleRepository.save(vehicle)).willReturn(vehicle);

        Vehicle savedVehicle = vehicleService.createVehicle(vehicle);

        assertThat(savedVehicle).isNotNull();
    }

    @Test
    void testVehicleGet(){
        Vehicle vehicle = new Vehicle(1L, "ABC1234", "Toyota", 10000.0, "NRMA");

        given(vehicleRepository.findById(1L)).willReturn(Optional.of(vehicle));

        Vehicle expectedVehicle = vehicleService.getVehicleById(1L);

        assertThat(expectedVehicle).isNotNull();
    }

    @Test
    void testVehicleUpdate(){
        Vehicle vehicle = new Vehicle(1L, "ABC1234", "Toyota", 10000.0, "NRMA");

        given(vehicleRepository.save(vehicle)).willReturn(vehicle);

        Vehicle savedVehicle = vehicleService.createVehicle(vehicle);

        Vehicle expectedVehicle = vehicleService.updateVehicle(savedVehicle, 1L);

        assertThat(expectedVehicle).isNotNull();
    }

    @Test
    void testVehicleDelete(){
        Vehicle vehicle = new Vehicle(1L, "ABC1234", "Toyota", 10000.0, "NRMA");

        vehicleService.deleteVehicle(1L);

        verify(vehicleRepository, times(1)).deleteById(1L);
    }
}
