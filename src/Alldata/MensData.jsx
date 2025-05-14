import React from "react";
import mensProducts from "../Data/MensData";
import { Link } from "react-router-dom";

const MensData = () => {
  return (
    <div className="mensdata">
      {mensProducts.map((item) => {
        return (
          <div className="mensimage">
            <Link to={`/mens/${item.id}`}>
            <img src={item.image} alt="" />
            </Link>
            <p>{item.name}</p>
            <div className="pricing">
              <del>
                <p>&#8377;{item.price}</p>
              </del>
              <p>&#8377;{item.finalPrice}</p>
            </div>
            <div className="mensrating">
              {item.rating}
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MensData;
