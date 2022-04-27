package CSIT314.Project.Service;

import CSIT314.Project.Model.Request;

public interface RequestServiceImpl {
    public Request getRequestById(Long id);
    public Request createRequest(Request newRequest);
    public Request updateRequest(Request request, Long id);
    public void deleteRequest(Long id);
}