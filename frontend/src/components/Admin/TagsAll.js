import React from 'react'
import { Data } from './data'
import TagsPrint from './TagsPrint'

function TagsAll() {
  return (
    <div>
    {Data.map((tag,index) => {
        return <TagsPrint key={index}>{tag}</TagsPrint>
        })}
    </div>
  )
}

export default TagsAll