package CSIT314.Project.Repository;

import CSIT314.Project.Model.RegionalSupervisor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionalSupervisorRepository extends JpaRepository<RegionalSupervisor, Long> {
}