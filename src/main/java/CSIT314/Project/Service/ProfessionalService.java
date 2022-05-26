package CSIT314.Project.Service;

import CSIT314.Project.Exceptions.CustomException;
import CSIT314.Project.Model.Professional;
import CSIT314.Project.Repository.ProfessionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfessionalService implements ProfessionalServiceImpl {
    @Autowired
    private ProfessionalRepository professionalRepository;

    public Professional getProfessionalById(Long id) {
        return professionalRepository.findById(id).orElseThrow(() -> new CustomException(id, "Professional"));
    }

    public Professional createProfessional(Professional newProfessional){
        return professionalRepository.save(newProfessional);
    }

    //Code is from https://spring.io/guides/tutorials/rest/
    public Professional updateProfessional(Professional professional, Long id){
        return professionalRepository.findById(id)
                .map(professionalMap -> {
                    professionalMap.setProfessional(professional);
                    return professionalRepository.save(professional);
                })
                .orElseGet(() -> {
                    professional.setId(id);
                    return professionalRepository.save(professional);
                });
    }

    public void deleteProfessional(Long id){
        professionalRepository.deleteById(id);
    }
}
