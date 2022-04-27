package CSIT314.Project.Service;


import CSIT314.Project.Controller.RegionalSupervisorController;
import CSIT314.Project.Exceptions.CustomException;
import CSIT314.Project.Model.RegionalSupervisor;
import CSIT314.Project.Repository.RegionalSupervisorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegionalSupervisorService implements RegionalSupervisorServiceImpl {
    @Autowired
    private RegionalSupervisorRepository regionalSupervisorRepository;

    public RegionalSupervisor getRegionalSupervisorById(Long id) {
        return regionalSupervisorRepository.findById(id).orElseThrow(() -> new CustomException(id, "Regional Supervisor"));
    }

    public RegionalSupervisor createRegionalSupervisor(RegionalSupervisor newRegionalSupervisor){
        return regionalSupervisorRepository.save(newRegionalSupervisor);
    }

    public RegionalSupervisor updateRegionalSupervisor(RegionalSupervisor regionalSupervisor, Long id){
        RegionalSupervisor regionalSupervisorFound = getRegionalSupervisorById(id);
        if (regionalSupervisorFound == null) {
            throw new CustomException(id , "Regional Supervisor");
        }
        regionalSupervisorFound.setRegionalSupervisor(regionalSupervisor);
        return regionalSupervisorRepository.save(regionalSupervisorFound);
    }

    public void deleteRegionalSupervisor(Long id){
        regionalSupervisorRepository.deleteById(id);
    }
}
