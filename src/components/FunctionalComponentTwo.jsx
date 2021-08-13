import React,{useState} from 'react'

function FunctionalComponentTwo() {


   const [name,setName]= useState({firstName:'',lastName:''})

    return (
        <div>
            <h3>Functional Componenet</h3>
            <hr/>
            <div className='form-group'>
                  <label>First Name</label>
                  <input value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})} className='form-control'/>
            </div>
            <div className='form-group'>
                  <label>Last Name</label>
                  <input value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})} className='form-control'/>
            </div>
            <hr/>

            <h4>First Name : <span className='text-danger'>{name.firstName}</span></h4>
            <h4>Last Name : <span className='text-danger'>{name.lastName}</span></h4>

        </div>
    )
}

export default FunctionalComponentTwo
