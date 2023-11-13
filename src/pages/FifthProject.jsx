import List from "../components/List"
import Action from "../components/Action"
import { items } from "../dataFifthProject"
import { useState } from "react"

export default function FifthProject() {
    const [leftItems, setLeftItems] = useState(items)
    const [rightItems, setRightItems] = useState([])

  return (
    <div className="flex list-container">
        <List items={leftItems}/>
        <Action />
        <List items={rightItems}/>
    </div>
  )
}
