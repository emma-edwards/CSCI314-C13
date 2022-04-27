package CSIT314.Project.Controller;

import CSIT314.Project.Model.Policy;
import CSIT314.Project.Service.PolicyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/policy")
@CrossOrigin
public class PolicyController {
    @Autowired
    private PolicyServiceImpl policyService;

    @GetMapping("/getPolicy/{id}")
    Policy getPolicyById(@PathVariable Long id) {
        return policyService.getPolicyById(id);
    }

    @PostMapping("/addPolicy")
    Policy createMembership(@RequestBody Policy newPolicy) {return policyService.createPolicy(newPolicy);
    }

    @PutMapping("/updatePolicy/{id}")
    Policy updatePolicy(@RequestBody Policy policy, @PathVariable Long id){
        return policyService.updatePolicy(policy, id);
    }

    @DeleteMapping("deletePolicy/{id}")
    void deletePolicy(@PathVariable Long id){
        policyService.deletePolicy(id);
    }
}
