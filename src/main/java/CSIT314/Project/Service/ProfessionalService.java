package CSIT314.Project.Service;

import CSIT314.Project.Exceptions.CustomException;
import CSIT314.Project.Exceptions.CustomException2;
import CSIT314.Project.Model.Professional;
import CSIT314.Project.Repository.ProfessionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessionalService implements ProfessionalServiceImpl {
    @Autowired
    private ProfessionalRepository professionalRepository;

    public List<Professional> getAllProfessionals(){
        return professionalRepository.findAll();
    }

    public Professional getProfessionalById(Long id) {
        return professionalRepository.findById(id).orElseThrow(() -> new CustomException(id, "Professional"));
    }

    public Professional getProfessionalFindEmail(String email){
        if(professionalRepository.findByEmail(email).isPresent()) {
            return professionalRepository.findByEmail(email).orElseThrow(() -> new CustomException2("Cannot find email"));
        }else{
            throw new CustomException2("Incorrect Email or Password");
        }
    }

    public Professional getProfessionalFindPassword(String password){
        if(professionalRepository.findByPassword(password).isPresent()) {
            return professionalRepository.findByPassword(password).orElseThrow(() -> new CustomException2("Cannot find password"));
        }else{
            throw new CustomException2("Incorrect Email or Password");
        }
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
