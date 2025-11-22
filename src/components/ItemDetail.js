import React from 'react'
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Item { id }</h1>
      <p>Description from item { id }</p>
    </>
  )
}

export default ItemDetails