
export default function Tab({tab, onClick, active}) {

  return (
    <div 
    className='tab'
    onClick={onClick}
    style={{
      borderBottom: active ? "10px solid blue" : "10px solid black",
    }}
    >
      <b style={{
       borderBottom: active ? "blue" : "black",}} >
        {tab}</b>
    </div>
  )
}
