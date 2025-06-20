import React from "react";
import mensProducts from "../Data/MensData";
import { useParams } from "react-router-dom";

const Mensingle = () => {
  const { id } = useParams();

  const products = mensProducts.find((item) => item.id === parseInt(id));

  // if(!products) return <h5>Webpage under construction</h5>

  return (
    <div className="img">
      <div className="singleimg">
        <img src={products.image} class="img-fluid" alt="..." />
      </div>
      <div className="single_img_data">
        <h6 className="text-start">Product  : {products.name}</h6>
        <h6 className="text-start">Price : <del>{products.price}</del> {products.finalPrice}</h6>
        <h6 className="text-start">Discount : {products.discount}%</h6>
        <h6 className="text-start">Rating : {products.rating}⭐</h6>
        <h6 className="text-start">Size : {products.size}</h6>
        <h6 className="text-start">Brand : {products.brand}</h6>
        <h6><button class="btn btn-outline-primary bg_red" ><i class="fa-solid fa-cart-shopping"></i> Add to cart</button></h6>
        <h6><button class="btn btn-outline-primary bg_red" ><i class="fa-solid fa-heart"></i> Add to Favourite</button></h6>
        <h6><button class="btn btn-outline-primary bg_red" ><i class="fa-solid fa-truck"></i> Buy Now</button></h6>
      </div>
    </div>
  );
};

export default Mensingle;
