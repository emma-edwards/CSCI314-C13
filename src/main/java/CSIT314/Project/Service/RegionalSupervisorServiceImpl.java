package CSIT314.Project.Service;

import CSIT314.Project.Model.RegionalSupervisor;

public interface RegionalSupervisorServiceImpl {
    public RegionalSupervisor getRegionalSupervisorById(Long id);
    public RegionalSupervisor createRegionalSupervisor(RegionalSupervisor newRegionalSupervisor);
    public RegionalSupervisor updateRegionalSupervisor(RegionalSupervisor regionalSupervisor, Long id);
    public void deleteRegionalSupervisor(Long id);
}