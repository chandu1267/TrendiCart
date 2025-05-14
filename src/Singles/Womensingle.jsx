import React from 'react'
import womensProducts from '../Data/WomensData'
import { useParams } from 'react-router-dom'

const Womensingle = () => {

    const {id} = useParams();
    const data = womensProducts.find((item)=>item.id===id);
  return (
    <div>
      <img src={data.image} alt="" />
    </div>
  )
}

export default Womensingle
