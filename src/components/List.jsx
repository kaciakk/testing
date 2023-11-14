import Item from "./Item";

export default function List({items, handleToggle}) {
  return (
    <div className='list flex '>
        {items.map((item) => { 
            return <Item key={item} item={item} handleToggle={handleToggle}/>;
            })}
    </div>
  )
}
