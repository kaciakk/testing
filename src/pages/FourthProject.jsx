import {useState} from 'react'

export default function FourthProject() {

    const [text, setText] = useState("")
    const [age, setAge] = useState(null)
 

    const handleSubmit = async () => {
        try{
            const response = await fetch(`https://api.agify.io/?name=${text}'`);
            const value = await response.json()
            setAge(value.age)
        } catch{
            console.log("not working api")
        }
    }


  return (
    <div className='card flex'>
        <div className='card-submit'>

            <input 
            placeholder='Enter a name' 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />

            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
        <div className='card-ticket'>{age ?? "-"}</div>
    </div>
  )
}
