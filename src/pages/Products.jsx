import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../components/Product';

const products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(Response.data)
        setProducts(response.data);
      });
  }, []);

  console.log(products);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products &&
            products.length > 0 &&
            products.map((it) => {
              return <Product key={it.id} product={it}></Product>
            })}
        </div>
      </div>
    </section>
  );
};
export default products;