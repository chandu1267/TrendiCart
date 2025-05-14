import React from 'react'
import mensProducts from '../Data/MensData';
import { useParams } from 'react-router-dom'


const Mensingle = () => {

  const {params} = useParams();

  const products = mensProducts.find((item)=>item.id === parseInt(params));

  // if(!products) return <h5>Webpage under construction</h5>

    

  return (
    <div>
      {products.brand}
      <h2>hello</h2>
    </div>
  )
}

export default Mensingle;
