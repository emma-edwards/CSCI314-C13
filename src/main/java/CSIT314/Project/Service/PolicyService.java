package CSIT314.Project.Service;

import CSIT314.Project.Exceptions.CustomException;
import CSIT314.Project.Model.Policy;
import CSIT314.Project.Repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PolicyService implements PolicyServiceImpl {
    @Autowired
    private PolicyRepository policyRepository;

    public Policy getPolicyById(Long id) {
        return policyRepository.findById(id).orElseThrow(() -> new CustomException(id, "Customer"));
    }

    public Policy createPolicy(Policy newPolicy){
        return policyRepository.save(newPolicy);
    }

    //Code is from https://spring.io/guides/tutorials/rest/
    public Policy updatePolicy(Policy policy, Long id){
        return policyRepository.findById(id)
                .map(policyMap -> {
                    policyMap.setPolicy(policy);
                    return policyRepository.save(policy);
                })
                .orElseGet(() -> {
                    policy.setId(id);
                    return policyRepository.save(policy);
                });
    }

    public void deletePolicy(Long id){
        policyRepository.deleteById(id);
    }
}
