package CSIT314.Project.Service;

import CSIT314.Project.Model.Membership;

public interface MembershipServiceImpl {
    public Membership getMembershipById(Long id);
    public Membership createMembership(Membership newMembership);
    public Membership updateMembership(Membership membership, Long id);
    public void deleteMembership(Long id);
}