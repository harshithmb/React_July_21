import React, { useState, useEffect } from "react";

const Products = () => {
  const photosUrl = "https://jsonplaceholder.typicode.com/photos";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(photosUrl)
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }); // component DidMount and DidUpdate

  useEffect(() => {
    return () => {
      console.log("Component Will MOunt");
    };
  }, []);

  return (
    <div>
      {products.map(({ title, thumbnailUrl }, index) => (
        <div>
          <img width="200" src={thumbnailUrl} alt={title} />
          <h5>{title}</h5>
        </div>
      ))}
    </div>
  );
};

export default Products;
