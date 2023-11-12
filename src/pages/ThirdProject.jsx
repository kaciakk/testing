import {useState} from 'react'
import Tab from '../components/Tab'
import Panel from '../components/Panel'
const tabs = ['TAB1', 'TAB2', 'TAB3', ]
const panels = ['Panel1', 'Panel2', 'Panel3']

export default function ThirdProject() {
    const [curTab, setCurTab] = useState(0)

    const handleTabChange = (tab) => {
        setCurTab(tab)
    }

    console.log(curTab)

  return (
    
    <div>
        
        <div className='tabs-container'>
            
        {tabs.map((tab, index) => {
            return ( <Tab key={index} tab={tab} onClick={() => handleTabChange(index)} active={curTab === index} />
            
            )
        })}
        </div>
        <div>
            {panels.map((panel, index) => {
                return (
                    <Panel key={index} tab={curTab} index={index} panel={panel}/>
                )
        
        })}
        </div>
    </div>
  )
  
}
