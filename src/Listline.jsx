import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Listline = ({handleCheck, handleDelete, item}) => {
  return (
        <li className="item">
            <input
              className="check"
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label 
                    htmlFor=""
                    style={(item.checked) ? 
                    { color: 'red', 
                    textDecoration:"line-through",
                    fontSize:"1rem",
                    fontWeight:'bold', } : null}
                    onDoubleClick={() => handleCheck(item.id)}>
              {item.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
              aria-label= {`Delete ${item.item}`}
            />
        </li>
  )
}

export default Listline