package CSIT314.Project;

import CSIT314.Project.Model.RegionalSupervisor;
import CSIT314.Project.Repository.RegionalSupervisorRepository;
import CSIT314.Project.Service.RegionalSupervisorService;
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
public class RegionalSupervisorControllerTests{
    @Mock
    private RegionalSupervisorRepository regionalSupervisorRepository;

    @InjectMocks
    private RegionalSupervisorService regionalSupervisorService;

    @Test
    void testRegionalSupervisorSaved(){
        RegionalSupervisor regionalSupervisor = new RegionalSupervisor(1L, "Angus", "Dumaresq");

        given(regionalSupervisorRepository.save(regionalSupervisor)).willReturn(regionalSupervisor);

        RegionalSupervisor savedRegionalSupervisor = regionalSupervisorService.createRegionalSupervisor(regionalSupervisor);

        assertThat(savedRegionalSupervisor).isNotNull();
    }

    @Test
    void testRegionalSupervisorGet(){
        RegionalSupervisor regionalSupervisor = new RegionalSupervisor(1L, "Angus", "Dumaresq");

        given(regionalSupervisorRepository.findById(1L)).willReturn(Optional.of(regionalSupervisor));

        RegionalSupervisor expectedRegionalSupervisor = regionalSupervisorService.getRegionalSupervisorById(1L);

        assertThat(expectedRegionalSupervisor).isNotNull();
    }

    @Test
    void testRegionalSupervisorUpdate(){
        RegionalSupervisor regionalSupervisor = new RegionalSupervisor(1L, "Angus", "Dumaresq");

        given(regionalSupervisorRepository.save(regionalSupervisor)).willReturn(regionalSupervisor);

        RegionalSupervisor savedRegionalSupervisor = regionalSupervisorService.createRegionalSupervisor(regionalSupervisor);

        RegionalSupervisor expectedRegionalSupervisor = regionalSupervisorService.updateRegionalSupervisor(savedRegionalSupervisor, 1L);

        assertThat(expectedRegionalSupervisor).isNotNull();
    }

    @Test
    void testRegionalSupervisorDelete(){
        RegionalSupervisor regionalSupervisor = new RegionalSupervisor(1L, "Angus", "Dumaresq");

        regionalSupervisorService.deleteRegionalSupervisor(1L);

        verify(regionalSupervisorRepository, times(1)).deleteById(1L);
    }
}
