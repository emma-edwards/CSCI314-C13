import * as React from 'react';
import { useEffect, useState } from 'react';

export default function useTest(){
    const[customers,setCustomer]=useState([])
    const[requests,setRequest]=useState([])
    const[professionals,setProfessional]=useState([])

    const handleClick=(e)=>{
        //Loads 20 Customers 
        for (var i = 0; i < 20; i++) {
            const firstName = "firstName" + i;
            const lastName = "lastName" + i;
            const password = "password" + i;
            const email = "email" + i + "@email.com";
            const phone = "12345" + i;
            const dob = i + "/01/2022";

            e.preventDefault()
            const customer={firstName, lastName, password, email, phone, dob}
            console.log(customer)
            fetch("http://localhost:8080/customer/addCustomer",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(customer)
            }).then(()=>{
                console.log(customer)
            })
        }

        //Loads 20 Requests 
        for (i = 0; i < 20; i++) {
            const sNumber = "firstName" + i;
            const streetName = "lastName" + i;
            const suburb = "password" + i;
            const report = "email" + i + "@email.com";


            e.preventDefault()
            const request={sNumber, streetName, suburb, report}
            console.log(request)
            fetch("http://localhost:8080/request/addRequest",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(request)
            }).then(()=>{
                console.log(request)
            })
        }

        //Loads 100 professionals
        for (i = 0; i < 100; i++) {
            const firstName = "pFirstName" + i;
            const lastName = "pLastName" + i;
            const dob = "01/01/20" + i;
            const email = "pemail" + i + "@professional.com";
            const phone = "12345" + i;
            const yearsWorked = i;

            e.preventDefault()
            const professional={firstName, lastName, dob, email, phone, yearsWorked}
            console.log(professional)
            fetch("http://localhost:8080/professional/addProfessional",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(professional)
            }).then(()=>{
                console.log(professional)
            })
        }
    }


    useEffect(()=>{
        fetch("http://localhost:8080/customer/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setCustomer(result);
        }
      )
      },[])

      useEffect(()=>{
        fetch("http://localhost:8080/request/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setRequest(result);
        }
      )
      },[])

      useEffect(()=>{
        fetch("http://localhost:8080/professional/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setProfessional(result);
        }
      )
      },[])

    return(
        <div>
            <button onClick={handleClick}>Load Test Data</button>     
            <br></br>
            <p>Refresh the page after loading the data</p>
            <br></br>
            <p>This data shows 20 customers</p>   
            <table className="customerTable">
                <tbody> 
                    {
                        customers.map(
                            customer=>
                                <tr key={customer.id}>    
                                        <td>{customer.id}</td>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.lastName}</td>
                                        <td>{customer.password}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.dob}</td>
                                    
                                </tr>
                        )
                    }
                </tbody>
            </table> 


            <br></br>
            <p>This data shows 20 requests</p>  
            <table className="requestTable">
                <tbody> 
                    {
                        requests.map(
                            request=>
                                <tr key={request.id}>    
                                        <td>{request.id}</td>
                                        <td>{request.sNumber}</td>
                                        <td>{request.streetName}</td>
                                        <td>{request.suburb}</td>
                                        <td>{request.report}</td>                                    
                                </tr>
                        )
                    }
                </tbody>
            </table>     

            <br></br>
            <p>This data shows 100 professionals</p>  
            <table className="professionalTable">
                <tbody> 
                    {
                        professionals.map(
                            professional=>
                                <tr key={professional.id}>    
                                        <td>{professional.id}</td>
                                        <td>{professional.firstName}</td>     
                                        <td>{professional.lastName}</td>
                                        <td>{professional.dob}</td>
                                        <td>{professional.email}</td>
                                        <td>{professional.phone}</td>
                                        <td>{professional.yearsWorked}</td>                           
                                </tr>
                        )
                    }
                </tbody>
            </table>   
        </div>
    );
}

