package CSIT314.Project;

import CSIT314.Project.Model.Policy;
import CSIT314.Project.Repository.PolicyRepository;
import CSIT314.Project.Service.PolicyService;
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
public class PolicyControllerTests{
    @Mock
    private PolicyRepository policyRepository;

    @InjectMocks
    private PolicyService policyService;

    @Test
    void testPolicySaved(){
        Policy policy = new Policy(1L, "Free", 0);

        given(policyRepository.save(policy)).willReturn(policy);

        Policy savedPolicy = policyService.createPolicy(policy);

        assertThat(savedPolicy).isNotNull();
    }

    @Test
    void testPolicyGet(){
        Policy policy = new Policy(1L, "Free", 0);

        given(policyRepository.findById(1L)).willReturn(Optional.of(policy));

        Policy expectedPolicy = policyService.getPolicyById(1L);

        assertThat(expectedPolicy).isNotNull();
    }

    @Test
    void testPolicyUpdate(){
        Policy policy = new Policy(1L, "Free", 0);

        given(policyRepository.save(policy)).willReturn(policy);

        Policy savedPolicy = policyService.createPolicy(policy);

        Policy expectedPolicy = policyService.updatePolicy(savedPolicy, 1L);

        assertThat(expectedPolicy).isNotNull();
    }

    @Test
    void testPolicyDelete(){
        Policy policy = new Policy(1L, "Free", 0);

        policyService.deletePolicy(1L);

        verify(policyRepository, times(1)).deleteById(1L);
    }
}
