import axios from 'axios'
import React ,{useState,useEffect} from 'react'



function SingleCustomerFetching() {
   
    const [customer,setCustomer]=useState({})
    const [cid,setCid]=useState(32)
    const [error,setError]=useState('')

    useEffect(()=>
    {
        axios.get(`http://localhost:8080/customer/singleCustomer/${cid}`)
        .then(response=>
            {
              setCustomer(response.data)  
            })
        .catch(err=>
        {
            console.log(err)
            setError(err.toString())
        })
    },[cid])

   let data1=
   <div className='form-group'>
   <label>Customer ID</label>
   <input value={cid} onChange={(e)=>setCid(e.target.value)} className='form-control'/>
   <hr/>
   <h4>Customer ID : {customer.cid}</h4>
   <h4>Customer Name :{customer.cname}</h4>
   <h4>Customer City :{customer.city}</h4>
   <h4>Customer Gender :{customer.gender}</h4>
    </div>
  
  let data2=
  <div className='form-group'>
  <label>Customer ID</label>
  <input value={cid} onChange={(e)=>setCid(e.target.value)} className='form-control'/>
  <hr/>
  <h5 className='text-danger'>{error && error}</h5>
 </div>

 if(error=='')
 {
     return data1
 }
 else
 {
     return data2
 }


}

export default SingleCustomerFetching
