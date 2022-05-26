package CSIT314.Project.Service;

import CSIT314.Project.Exceptions.CustomException;
import CSIT314.Project.Exceptions.CustomException2;
import CSIT314.Project.Model.Customer;
import CSIT314.Project.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements CustomerServiceImpl {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElseThrow(() -> new CustomException(id, "Customer"));
    }

    public Customer getCustomerFindEmail(String email){
        if(customerRepository.findByEmail(email).isPresent()) {
            return customerRepository.findByEmail(email).orElseThrow(() -> new CustomException2("Cannot find email"));
        }else{
            throw new CustomException2("Incorrect Email or Password");
        }
    }

    public Customer getCustomerFindPassword(String password){
        if(customerRepository.findByPassword(password).isPresent()) {
            return customerRepository.findByPassword(password).orElseThrow(() -> new CustomException2("Cannot find password"));
        }else{
            throw new CustomException2("Incorrect Email or Password");
        }
    }

    public Customer createCustomer(Customer newCustomer){
        return customerRepository.save(newCustomer);
    }

    //Code is from https://spring.io/guides/tutorials/rest/
    public Customer updateCustomer(Customer customer, Long id){
        return customerRepository.findById(id)
                .map(customerMap -> {
                    customerMap.setCustomer(customer);
                    return customerRepository.save(customer);
                })
                .orElseGet(() -> {
                    customer.setId(id);
                    return customerRepository.save(customer);
                });
    }

    public void deleteCustomer(Long id){
        customerRepository.deleteById(id);
    }
}
