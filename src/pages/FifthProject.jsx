import List from "../components/List"
import Action from "../components/Action"
import { items } from "../dataFifthProject"
import { useState } from "react"
import { intersecionFifthProject, not } from "../utils"
export default function FifthProject() {
    const [leftItems, setLeftItems] = useState(items)
    const [rightItems, setRightItems] = useState([])
    const [checkedItems, setCheckedItems] = useState([])

    const leftCheckedItems = intersecionFifthProject(leftItems, checkedItems);
    const rightCheckedItems = intersecionFifthProject(rightItems, checkedItems);

  const handleToggle = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems]

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }
    setCheckedItems(newCheckedItems); 
  }

  const moveRight = () => {
    setRightItems(rightItems.concat(leftCheckedItems));
    setLeftItems(not(leftItems, leftCheckedItems));
    setCheckedItems(not(checkedItems, leftCheckedItems))
  }
  const moveLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItems));
    setRightItems(not(rightItems, rightCheckedItems));
    setCheckedItems(not(checkedItems, rightCheckedItems))
  }

  console.log(checkedItems)
  return (
    <div className="flex list-container">
        <List items={leftItems} handleToggle={handleToggle}/>
        <Action moveRight={moveRight} moveLeft={moveLeft}/>
        <List items={rightItems} handleToggle={handleToggle}/>
    </div>
  )
}
