package CSIT314.Project.Controller;

import CSIT314.Project.Model.Request;
import CSIT314.Project.Service.RequestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/requestController")
@CrossOrigin
public class RequestController {

    @Autowired
    private RequestServiceImpl requestService;

    @GetMapping("/getRequest/{id}")
    Request getRequestById(@PathVariable Long id) {
        return requestService.getRequestById(id);
    }

    @PostMapping("/addRequest")
    Request createRequest(@RequestBody Request newRequest) {return requestService.createRequest(newRequest);
    }

    @PutMapping("/updateRequest/{id}")
    Request updateRequest(@RequestBody Request request, @PathVariable Long id){
        return requestService.updateRequest(request, id);
    }

    @DeleteMapping("deleteRequest/{id}")
    void deleteRequest(@PathVariable Long id){
        requestService.deleteRequest(id);
    }
}
