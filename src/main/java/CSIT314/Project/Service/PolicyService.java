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

    public Policy updatePolicy(Policy policy, Long id){
        Policy policyFound = getPolicyById(id);
        if (policyFound == null) {
            throw new CustomException(id , "Policy");
        }
        policyFound.setPolicy(policy);
        return policyRepository.save(policyFound);
    }

    public void deletePolicy(Long id){
        policyRepository.deleteById(id);
    }
}
