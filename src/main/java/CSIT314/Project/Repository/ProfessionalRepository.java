package CSIT314.Project.Repository;

import CSIT314.Project.Model.Professional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProfessionalRepository extends JpaRepository<Professional, Long> {
    Optional<Professional> findByEmail(String s);
    Optional<Professional> findByPassword(String s);
}