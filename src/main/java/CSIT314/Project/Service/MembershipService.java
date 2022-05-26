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
    private MembershipService membershipService;

    public Membership getMembershipById(Long id) {
        return membershipRepository.findById(id).orElseThrow(() -> new CustomException(id, "Membership"));
    }

    public Membership createMembership(Membership newMembership){
        return membershipRepository.save(newMembership);
    }

    //Code is from https://spring.io/guides/tutorials/rest/
    public Membership updateMembership(Membership membership, Long id){
        return membershipRepository.findById(id)
                .map(membershipMap -> {
                    membershipMap.setMembership(membership);
                    return membershipRepository.save(membership);
                })
                .orElseGet(() -> {
                    membership.setId(id);
                    return membershipRepository.save(membership);
                });
    }

    public void deleteMembership(Long id){
        membershipRepository.deleteById(id);
    }
}
