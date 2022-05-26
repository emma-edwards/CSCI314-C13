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

    //Code is from https://spring.io/guides/tutorials/rest/
    public RegionalSupervisor updateRegionalSupervisor(RegionalSupervisor regionalSupervisor, Long id){
        return regionalSupervisorRepository.findById(id)
                .map(regionalSupervisorMap -> {
                    regionalSupervisorMap.setRegionalSupervisor(regionalSupervisor);
                    return regionalSupervisorRepository.save(regionalSupervisor);
                })
                .orElseGet(() -> {
                    regionalSupervisor.setId(id);
                    return regionalSupervisorRepository.save(regionalSupervisor);
                });
    }

    public void deleteRegionalSupervisor(Long id){
        regionalSupervisorRepository.deleteById(id);
    }
}
