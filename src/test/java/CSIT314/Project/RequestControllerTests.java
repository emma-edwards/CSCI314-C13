package CSIT314.Project;

import CSIT314.Project.Model.Request;
import CSIT314.Project.Repository.RequestRepository;
import CSIT314.Project.Service.RequestService;
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
public class RequestControllerTests{
    @Mock
    private RequestRepository requestRepository;

    @InjectMocks
    private RequestService requestService;

    @Test
    void testRequestSaved(){
        Request request = new Request(1L, "10", "John", "Wollongong", "Car battery", "1000");

        given(requestRepository.save(request)).willReturn(request);

        Request savedRequest = requestService.createRequest(request);

        assertThat(savedRequest).isNotNull();
    }

    @Test
    void testRequestGet(){
        Request request = new Request(1L, "10", "John", "Wollongong", "Car battery", "1000");

        given(requestRepository.findById(1L)).willReturn(Optional.of(request));

        Request expectedRequest = requestService.getRequestById(1L);

        assertThat(expectedRequest).isNotNull();
    }

    @Test
    void testRequestUpdate(){
        Request request = new Request(1L, "10", "John", "Wollongong", "Car battery", "1000");

        given(requestRepository.save(request)).willReturn(request);

        Request savedRequest = requestService.createRequest(request);

        Request expectedRequest = requestService.updateRequest(savedRequest, 1L);

        assertThat(expectedRequest).isNotNull();
    }

    @Test
    void testRequestDelete(){
        Request request = new Request(1L, "10", "John", "Wollongong", "Car battery", "1000");

        requestService.deleteRequest(1L);

        verify(requestRepository, times(1)).deleteById(1L);
    }
}
