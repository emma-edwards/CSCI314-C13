package CSIT314.Project;

import CSIT314.Project.Model.Customer;
import CSIT314.Project.Repository.CustomerRepository;
import CSIT314.Project.Service.CustomerService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;


@ExtendWith(MockitoExtension.class)
public class CustomerControllerTests{
    @Mock
    private CustomerRepository customerRepository;

    @InjectMocks
    private CustomerService customerService;

    @Test
    void testCustomerSaved(){
        Customer customer = new Customer(1L, "Angus", "Dumaresq", "20/09/2001", "angusdq@gmail.com", 041234567, "password", true);

        given(customerRepository.save(customer)).willReturn(customer);

        Customer savedCustomer = customerService.createCustomer(customer);

        assertThat(savedCustomer).isNotNull();
    }

    @Test
    void testCustomerAllGet(){
        List<Customer> expectedCustomers = new ArrayList<>();
        Customer customer = new Customer(1L, "Angus", "Dumaresq", "20/09/2001", "angusdq@gmail.com", 041234567, "password", true);
        Customer customer2 = new Customer(2L, "Angus", "Dumaresq", "20/09/2001", "angusdq@gmail.com", 041234567, "password", true);

        given(customerRepository.findAll()).willReturn(expectedCustomers);

        List<Customer> customersReturned = customerService.getAllCustomers();

        assertEquals(customersReturned, expectedCustomers);
    }

    @Test
    void testCustomerUpdate(){
        Customer customer = new Customer(1L, "Angus", "Dumaresq", "20/09/2001", "angusdq@gmail.com", 041234567, "password", true);

        given(customerRepository.save(customer)).willReturn(customer);

        Customer savedCustomer = customerService.createCustomer(customer);

        Customer expectedCustomer = customerService.updateCustomer(savedCustomer, 1L);

        assertThat(expectedCustomer).isNotNull();
    }

    @Test
    void testCustomerDelete(){
        Customer customer = new Customer(1L, "Angus", "Dumaresq", "20/09/2001", "angusdq@gmail.com", 041234567, "password", true);

        customerService.deleteCustomer(1L);

        verify(customerRepository, times(1)).deleteById(1L);
    }
}
