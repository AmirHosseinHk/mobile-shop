import React from "react";
import "./Product.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductTable from "../productTable/ProductTable";
import { useState,useEffect } from "react";

function Product() {
  useEffect(()=>{
    getAllProducts()
  },[])
  const [AllProducts,setAllProducts]=useState([])
  
  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) =>{
        setAllProducts(products)

      });
  }

  
  return (
    <div className="product-body">
      <AddNewProduct getAllProducts={getAllProducts}/>
      <ProductTable AllProducts={AllProducts} getAllProducts={getAllProducts} />
    </div>
  );
}

export default Product;
