import React from 'react'

function List({tarea, description}) {
  return (
    <div className='list-container'>
        <ul>
            <li>{tarea}</li>
            <li>{description}</li>
        </ul>
    </div>
  )
}

export default List