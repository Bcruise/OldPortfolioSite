import React, {useState} from 'react';
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  const [imageNums, setImageNums] = useState(0);

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          Scroll through the below project carousels to view my latest work, to better understand my skills and to get and idea of where I am in my development.
        </p>
      </div>
      <div className="pl-list">
          <Product imageNums={imageNums} setImageNums={setImageNums}/>
      </div>
    </div>
  );
};

export default ProductList;