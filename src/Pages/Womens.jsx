import React from 'react'
import dressData from '../Data/data'

const Womens = () => {
const firstThree = dressData.slice(5,8)

  return (
    <div className="dataSection">
      {
        firstThree.map((item)=>{
            return(
                <div className="data">
                <img className="dataImage" src={item.imageUrl} alt="" srcset="" />
                <p><h6>{item.name}</h6></p>
                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>{item.rating}</p>
                <div className="pricing">
                  <p>&#8377;<del>{item.originalPrice}</del></p> <p>&#8377;{item.price}</p>
                </div>
            </div>
            )
        })
      }
    </div>
  )
}

export default Womens
