package CSIT314.Project.Service;

import CSIT314.Project.Exceptions.CustomException;
import CSIT314.Project.Repository.MembershipRepository;
import CSIT314.Project.Model.Membership;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MembershipService implements MembershipServiceImpl {
    @Autowired
    private MembershipRepository membershipRepository;

    public Membership getMembershipById(Long id) {
        return membershipRepository.findById(id).orElseThrow(() -> new CustomException(id, "Membership"));
    }

    public Membership createMembership(Membership newMembership){
        return membershipRepository.save(newMembership);
    }

    public Membership updateMembership(Membership membership, Long id){
        Membership membershipFound = getMembershipById(id);
        if (membershipFound == null) {
            throw new CustomException(id , "Customer");
        }
        membershipFound.setMembership(membership);
        return membershipRepository.save(membershipFound);
    }

    public void deleteMembership(Long id){
        membershipRepository.deleteById(id);
    }
}
