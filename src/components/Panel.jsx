import React from 'react'

export default function Panel({panel, tab, index}) {
  return (
    <div hidden={tab === index ? false:true}>
                {panel}
         </div>
  )
}
