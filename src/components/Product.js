import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useProductContext } from "../context/productContext";

const Product = (product) => {
  const { id, name, image, price, category, isLoading } = useProductContext();

  return (
    <>
      <div className="col-md-4">
        <NavLink to={`/singleproduct/${product.id}`}>
          <figure>
            <img src={product.image} className="img-responsive" />
          </figure>
          <div className="card-data flex">{product.name}</div>
          <div className="card-data flex">{product.price}</div>

          {/* <div class="card" style="width: 18rem;">
          <img src={product.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product.category}</p>
            <a href="#" class="btn btn-primary"></a>
          </div>
        </div> */}
        </NavLink>
      </div>
    </>
  );
};

export default Product;
