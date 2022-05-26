package CSIT314.Project;

import CSIT314.Project.Model.Professional;
import CSIT314.Project.Repository.ProfessionalRepository;
import CSIT314.Project.Service.ProfessionalService;
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
public class ProfessionalControllerTests{
    @Mock
    private ProfessionalRepository professionalRepository;

    @InjectMocks
    private ProfessionalService professionalService;

    @Test
    void testProfessionalSaved(){
        Professional professional = new Professional(1L, "Angus", "Dumaresq", "20/09/2001", "angus@gmail.com", 041234567, 1);

        given(professionalRepository.save(professional)).willReturn(professional);

        Professional savedProfessional = professionalService.createProfessional(professional);

        assertThat(savedProfessional).isNotNull();
    }

    @Test
    void testProfessionalGet(){
        Professional professional = new Professional(1L, "Angus", "Dumaresq", "20/09/2001", "angus@gmail.com", 041234567, 1);

        given(professionalRepository.findById(1L)).willReturn(Optional.of(professional));

        Professional expectedProfessional = professionalService.getProfessionalById(1L);

        assertThat(expectedProfessional).isNotNull();
    }

    @Test
    void testPolicyUpdate(){
        Professional professional = new Professional(1L, "Angus", "Dumaresq", "20/09/2001", "angus@gmail.com", 041234567, 1);

        given(professionalRepository.save(professional)).willReturn(professional);

        Professional savedProfessional = professionalService.createProfessional(professional);

        Professional expectedProfessional = professionalService.updateProfessional(savedProfessional, 1L);

        assertThat(expectedProfessional).isNotNull();
    }

    @Test
    void testPolicyDelete(){
        Professional professional = new Professional(1L, "Angus", "Dumaresq", "20/09/2001", "angus@gmail.com", 041234567, 1);

        professionalService.deleteProfessional(1L);

        verify(professionalRepository, times(1)).deleteById(1L);
    }
}
