import React ,{useState} from 'react'

function FunctionalComponentThree() {

  const [items,setItems]= useState([])

  const addItem=()=>
  {
     setItems([...items,{
         id:items.length,
         eid:Math.random(100)
     }])
  }

    return (
        <div>
            <h3>Functional Componenet</h3>
            <hr/>
            <button onClick={addItem} className='btn btn-primary mb-3'>Add Item</button>
            <ul className='list-group'>
                {
                    items.map(item=>(
                    <li className='list-group-item'>{item.eid}</li>
                    ))
                }
                
            </ul>
        </div>
    )
}

export default FunctionalComponentThree
