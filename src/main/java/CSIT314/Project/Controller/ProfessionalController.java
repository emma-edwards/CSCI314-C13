package CSIT314.Project.Controller;

import CSIT314.Project.Model.Customer;
import CSIT314.Project.Model.Professional;
import CSIT314.Project.Service.ProfessionalServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/professional")
@CrossOrigin
public class ProfessionalController {
    @Autowired
    private ProfessionalServiceImpl professionalService;

    @GetMapping("/getAll")
    public List<Professional> getAllProfessionals(){
        return professionalService.getAllProfessionals();
    }

    @GetMapping("/getProfessional/{id}")
    Professional getProfessionalById(@PathVariable Long id) {
        return professionalService.getProfessionalById(id);
    }

    @GetMapping("/findProfessionalEmail/{email}")
    Professional getProfessionalFindEmail(@PathVariable String email) {
        return professionalService.getProfessionalFindEmail(email);
    }

    @GetMapping("/findProfessionalPassword/{password}")
    Professional getProfessionalFindPassword(@PathVariable String password) {
        return professionalService.getProfessionalFindPassword(password);
    }

    @PostMapping("/addProfessional")
    Professional createProfessional(@RequestBody Professional newProfessional) {return professionalService.createProfessional(newProfessional);
    }

    @PutMapping("/updateProfessional/{id}")
    Professional updateProfessional(@RequestBody Professional professional, @PathVariable Long id){
        return professionalService.updateProfessional(professional, id);
    }

    @DeleteMapping("deleteProfessional/{id}")
    void deleteProfessional(@PathVariable Long id){
        professionalService.deleteProfessional(id);
    }
}
