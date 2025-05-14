import React from "react";
import kidsData from "../Data/KidsData";

const KidsData = () => {
  return (
    <div className="mensdata">
      {kidsData.map((item) => {
        return (
          <div className="mensimage">
            <img src={item.image} alt="" />
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
