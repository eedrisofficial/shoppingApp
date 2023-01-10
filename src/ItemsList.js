import React from 'react'
import Listline from './Listline';

const ItemsList = ({ handleCheck, handleDelete, items }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <Listline
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            item={item}
            key = {item.id}
          />
        ))}
      </ul>
    </>
  );
};

export default ItemsList