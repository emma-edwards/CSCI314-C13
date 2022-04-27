package CSIT314.Project.Service;

import CSIT314.Project.Model.Policy;

public interface PolicyServiceImpl {
    public Policy getPolicyById(Long id);
    public Policy createPolicy(Policy newPolicy);
    public Policy updatePolicy(Policy policy, Long id);
    public void deletePolicy(Long id);

}