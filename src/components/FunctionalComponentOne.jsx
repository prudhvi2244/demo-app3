import React ,{useState} from 'react'
function FunctionalComponentOne() {

   const [count,setCount]=useState(0)

   const incrementByTen=()=>
   {
    for(let i=1;i<=10;i++)
    {
        setCount((prevState)=>prevState+1)
    }
   }
    return (
        <div>
            <h3>Functional Component</h3>
            <h4>Count:{count}</h4>
            <button onClick={()=>setCount((prevState)=>prevState+1)}  className='btn btn-primary'>Increment</button>
                &nbsp;
                <button onClick={()=>setCount((prevState)=>prevState-1)} className='btn btn-info'>Decrement</button>
                &nbsp;
                <button onClick={()=>setCount(0)} className='btn btn-danger'>Reset</button>
                &nbsp;
                <button onClick={incrementByTen}  className='btn btn-success'>Increment By 10</button>
                
        </div>
    )
}
export default FunctionalComponentOne
