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

    public Professional updateProfessional(Professional professional, Long id){
        Professional professionalFound = getProfessionalById(id);
        if (professionalFound == null) {
            throw new CustomException(id , "Professional");
        }
        professionalFound.setProfessional(professional);
        return professionalRepository.save(professionalFound);
    }

    public void deleteProfessional(Long id){
        professionalRepository.deleteById(id);
    }
}
