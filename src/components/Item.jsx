
export default function Item({item, handleToggle}) {
  return (
    <div>
       <input type="checkbox" onChange={() => handleToggle(item)}/> {item}</div>
  )
}
