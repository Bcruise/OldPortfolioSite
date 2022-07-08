import React, {useState} from 'react';
import "./product.css";
import Untitled from "../../img/Untitled.png";
import Untitled1 from "../../img/Untitled1.png";
import Untitled2 from "../../img/Untitled2.png";
import Untitled3 from "../../img/Untitled3.png";
import { Link } from 'react-router-dom';
import ECommerceSite from "../Projects/ecommerce/src/App.js";

const Product = ({imageNums, setImageNums}) => {

  const ProductImages = () => {
    if (imageNums === 0 ) {
      return (<img src={Untitled} alt="Image" className="productImages"></img>)
    } else if (imageNums === 1 ) {
      return (<img src={Untitled1} alt="Image" className="productImages" ></img>)
    } else if (imageNums === 2) {
      return (<img src={Untitled2} alt="Image" className="productImages" ></img>)
    } else {
      return (<img src={Untitled3} alt="Image" className="productImages" ></img>)
    }
  }

  const PlusButton = () => {
    if (imageNums === 3) {
      setImageNums(0);
    } else {
      setImageNums(imageNums + 1);
    }
  }

  const MinusButton = () => {
    if (imageNums === 0) {
      setImageNums(3);
    } else {
      setImageNums(imageNums - 1);
    }
  }

  return (<>
    <Link to="/ECommerceSite" className="p" style={{textDecoration: 'none'}}>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-buttonsDiv">
          <button className="p-buttons" onClick={PlusButton} style={{paddingBottom: '5px'}}><span style={{fontWeight: '600', fontSize: '30px'}}>+</span></button>
          <button className="p-buttons" onClick={MinusButton} style={{paddingBottom: '5px'}}><span style={{fontWeight: '600', fontSize: '30px'}}>-</span></button>
        </div>
      </div>
      <ProductImages />
    </Link>
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-20px'}}>
        <span style={{fontSize: '30px'}}>Currently being edited</span>
      </div>
    </div>
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-20px'}}>
        <span style={{fontSize: '30px'}}>Currently being edited</span>
      </div>
    </div>
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-20px'}}>
        <span style={{fontSize: '30px'}}>Currently being edited</span>
      </div>
    </div>
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-20px'}}>
        <span style={{fontSize: '30px'}}>Currently being edited</span>
      </div>
    </div>
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-20px'}}>
        <span style={{fontSize: '30px'}}>Currently being edited</span>
      </div>
    </div>
    </>
  );
};

export default Product;