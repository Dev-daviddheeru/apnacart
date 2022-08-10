import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import  product  from "./data";
 
function App() {

  let [productList, setProductList] = useState(product);
  let [totalAmount, setTotalAmount] = useState(0)
  let incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  let decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0)
      { 
        newProductList[index].quantity-- ;
        newTotalAmount-=newProductList[index].price;

      }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount)
  };
  let resetQuantity = ()=>{
    let newProductList = [...productList];
    newProductList.map((product)=>{
      product.quantity=0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }
  return (
    <>
      <Navbar />
      <div className="container text-center">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </div>
      <Footer totalAmount ={totalAmount} resetQuantity={ resetQuantity} />
    </>
  );
}

export default App;
