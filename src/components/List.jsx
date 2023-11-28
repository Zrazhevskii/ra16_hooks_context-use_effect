import React from 'react'
import '../style/List.css'

export const List = ( { elem } ) => {
    // console.log(elem)
    const { id, name } = elem;
    // console.log(name)
  return (
    <div className='list-box'>
        {name}
    </div>
  )
}
