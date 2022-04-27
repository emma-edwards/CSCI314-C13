package CSIT314.Project.Service;

import CSIT314.Project.Model.Customer;

import java.util.List;

public interface CustomerServiceImpl {
    public List<Customer> getAllCustomers();
    public Customer getCustomerById(Long id);
    public Customer createCustomer(Customer newCustomer);
    public Customer updateCustomer(Customer customer, Long id);
    public void deleteCustomer(Long id);
}
