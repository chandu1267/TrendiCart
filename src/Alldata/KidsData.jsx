import React from "react";
import kidsData from "../Data/KidsData";
import { Link } from "react-router-dom";

const KidsData = () => {
  return (
    <div className="mensdata">
      {kidsData.map((item) => {
        return (
          <div className="mensimage">
            <Link to={`/kids/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
            <div className="pricing">
              <del>
                <p>&#8377;{item.price}</p>
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
  );
};

export default KidsData;
