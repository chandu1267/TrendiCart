import React from 'react'
import womensProducts from '../Data/WomensData'
import { Link } from 'react-router-dom'


const WomensData = () => {
  return (
    <div className='mensdata'>
      { womensProducts.map((item) => {
        return (
          <div className="mensimage">
            <Link to={`/womens/${item.id}`}>
            <img src={item.image} alt="" />
            </Link>
            <p>{item.name}</p>
            <div className="pricing">
              <del>
                <p>&#8377;{item.price}</p>{" "}
              </del>
              <p>&#8377;{item.finalPrice}</p>
            </div>
            <div className="mensrating">
                {item.rating}
            <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default WomensData
