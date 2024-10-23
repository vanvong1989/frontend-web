import React from "react";
import { TbArrowRight } from "react-icons/tb";

const ProductHd = ({ product }) => {
  return (
    <div className="flex max-padd-container items-center flex-wrap gap-x-2 medium-16 py-4 
    capitalize rounded-tl-xl rounded-tr-xl bg-primary">
      Home <TbArrowRight />
      {product.name}
    </div>
  );
};

export default ProductHd;
