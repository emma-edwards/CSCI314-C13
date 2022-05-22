package CSIT314.Project.Service;

import CSIT314.Project.Model.Customer;
import CSIT314.Project.Model.Request;

import java.util.List;

public interface RequestServiceImpl {
    public Request getRequestById(Long id);
    public List<Request> getAllRequests();
    public Request createRequest(Request newRequest);
    public Request updateRequest(Request request, Long id);
    public void deleteRequest(Long id);
}