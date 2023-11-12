import React, { useState} from 'react'


export default function FirstProject() {
const [count, setCount] = useState(0)

function addCount (){
    setCount(prevCount => prevCount + 1);
    
}
function decCount (){
    setCount(prevCount => prevCount - 1);
}
  return (
  <div className='first-project'>
    <p>Count: {count}</p>
    <button onClick={addCount}>+</button>
    <button onClick={decCount}>-</button>
  </div>
  
  )
}
