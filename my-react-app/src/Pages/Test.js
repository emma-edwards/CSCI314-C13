import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export default function useTest(){
    const[customers,setCustomer]=useState([])

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
                console.log("Customer added")
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

    return(
        <div>
            <Button onClick={handleClick}>Load Test Data</Button>     
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
        </div>
    );
}

