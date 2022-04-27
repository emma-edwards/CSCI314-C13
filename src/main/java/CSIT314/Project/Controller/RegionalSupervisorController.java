package CSIT314.Project.Controller;

import CSIT314.Project.Model.RegionalSupervisor;
import CSIT314.Project.Service.RegionalSupervisorServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/regionalSupervisor")
@CrossOrigin
public class RegionalSupervisorController {
    @Autowired
    private RegionalSupervisorServiceImpl regionalSupervisorService;

    @GetMapping("/getRegionalSupervisor/{id}")
    RegionalSupervisor getRegionalSupervisorById(@PathVariable Long id) {
        return regionalSupervisorService.getRegionalSupervisorById(id);
    }

    @PostMapping("/addRegionalSupervisor")
    RegionalSupervisor createRegionalSupervisor(@RequestBody RegionalSupervisor newRegionalSupervisor) {return regionalSupervisorService.createRegionalSupervisor(newRegionalSupervisor);
    }

    @PutMapping("/updateRegionalSupervisor/{id}")
    RegionalSupervisor updateRegionalSupervisor(@RequestBody RegionalSupervisor regionalSupervisor, @PathVariable Long id){
        return regionalSupervisorService.updateRegionalSupervisor(regionalSupervisor, id);
    }

    @DeleteMapping("deleteRegionalSupervisor/{id}")
    void deleteRegionalSupervisor(@PathVariable Long id){
        regionalSupervisorService.deleteRegionalSupervisor(id);
    }
}
