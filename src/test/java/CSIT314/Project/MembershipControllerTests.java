package CSIT314.Project;

import CSIT314.Project.Model.Membership;
import CSIT314.Project.Repository.MembershipRepository;
import CSIT314.Project.Service.MembershipService;
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
public class MembershipControllerTests{
    @Mock
    private MembershipRepository membershipRepository;

    @InjectMocks
    private MembershipService membershipService;

    @Test
    void testMembershipSaved(){
        Membership membership = new Membership(1L, "address1", "address2", "Wollongong", "NSW", "2500", "Australia");

        given(membershipRepository.save(membership)).willReturn(membership);

        Membership savedMembership = membershipService.createMembership(membership);

        assertThat(savedMembership).isNotNull();
    }

    @Test
    void testMembershipGet(){
        Membership membership = new Membership(1L, "address1", "address2", "Wollongong", "NSW", "2500", "Australia");

        given(membershipRepository.findById(1L)).willReturn(Optional.of(membership));

        Membership expectedMembership = membershipService.getMembershipById(1L);

        assertThat(expectedMembership).isNotNull();
    }

    @Test
    void testMembershipUpdate(){
        Membership membership = new Membership(1L, "address1", "address2", "Wollongong", "NSW", "2500", "Australia");

        given(membershipRepository.save(membership)).willReturn(membership);

        Membership savedMembership = membershipService.createMembership(membership);

        Membership expectedMembership = membershipService.updateMembership(savedMembership, 1L);

        assertThat(expectedMembership).isNotNull();
    }

    @Test
    void testMembershipDelete(){
        Membership membership = new Membership(1L, "address1", "address2", "Wollongong", "NSW", "2500", "Australia");

        membershipService.deleteMembership(1L);

        verify(membershipRepository, times(1)).deleteById(1L);
    }
}
