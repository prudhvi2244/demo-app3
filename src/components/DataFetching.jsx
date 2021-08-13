import React ,{useEffect,useState} from 'react'
import axios from 'axios'
function DataFetching() {

   const [customers,setCustomers]= useState([])

     useEffect(()=>
     {
           axios.get('http://localhost:8080/customer/allCustomers')
                .then(response=>
                    {
                        console.log(response)
                        setCustomers(response.data)
                    })
                .catch(error=>
                    {
                        console.log(error)
                    })
     },[])

    return (
        <div>
            <h3>All Customers</h3>
            <hr/>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Customer City</th>
                        <th>Customer Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(customer=>(
                            <tr>
                                <td>{customer.cid}</td>
                                <td>{customer.cname}</td>
                                <td>{customer.city}</td>
                                <td>{customer.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataFetching
