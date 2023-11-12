import React, { useState} from 'react'

export default function SecondProject() {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [displaySurname, setDisplaySurname] = useState('')

    
    const handleNameInputChange = (e) => {
        setName(e.target.value)
    }
    const handleSurnnameInputChange = (e) => {
        setSurname(e.target.value)
    }

    const nameClick = () => {
        console.log("Name:", name, "Surname:", surname);
        setDisplayName(name);
        setDisplaySurname(surname);
    }


  return (
    <div className='second-project'>
    <input type="text" value={name} onChange={handleNameInputChange}></input>
    <input type="text" value={surname} onChange={handleSurnnameInputChange}></input>
    <button onClick={nameClick} >OK</button>
    <div className='second-project-display-name'>
        <p>"Name": {displayName}</p>
        <p> "Surname": {displaySurname}</p>
    </div>
    </div>
  )
}
