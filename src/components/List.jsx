import { items } from "../dataFifthProject";
import Item from "./Item";
export default function List({items}) {
  return (
    <div className='list flex '>
        {items.map((item) => { 
            return <div><Item key={item} item={item}/></div>;
            })}
    </div>
  )
}
