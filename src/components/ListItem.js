import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = () => {
  return (
    <div>
        <h1>List Item</h1>
        <ul>
            <li>
                <Link to="/item/1">Item 1</Link>
            </li>
            <li>
                <Link to="/item/2">Item 2</Link>
            </li>
            <li>
                <Link to="/item/3">Item 3</Link>
            </li>
        </ul>
    </div>
  )
}

export default ListItem