import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { LuMoveUpRight } from "react-icons/lu";

const ProductMd = (props) => {
    const {product} = props;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <section className="max-padd-container flex-1 flex-col gap-8 xl:flex-row bg-primary py-4">
      <div className="flex gap-x-2 xl:flex-1 py-5">
        <div className="flexCenter flex-col gap-[7px] flex-wrap">
          <img
            src={product.image}
            alt="productImg"
            className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
          />
          <img
            src={product.image}
            alt="productImg"
            className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
          />
          <img
            src={product.image}
            alt="productImg"
            className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
          />
          <img
            src={product.image}
            alt="productImg"
            className="max-h-[89px] rounded-lg bg-gray-10 object-cover"
          />
        </div>
        <div className="max-h-[377px] w-auto flex">
          <img
            src={product.image}
            alt="bigImg"
            className="rounded-xl bg-gray-10 object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-[1.5] bg-white px-6 py-2 rounded-lg">
        <h4 className="bold-28">{product.name}</h4>
        <div className="flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-3">
          <div>${product.price}.00</div>
          <div className="flex items-start gap-x-1 medium-16 text-secondary">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(233)</p>
          </div>
        </div>
        <div className="flex flex-col items-center sm:flex-row gap-x-10 gap-y-3 my-4">
          <div>
            <h4 className="bold-16">Select Color:</h4>
            <div className="flex gap-3 my-3">
              <div
                className="h-10 w-10 flexCenter cursor-pointer bg-secondaryRed rounded-sm
                 border-b-black active-color"
              ></div>
              <div
                className="h-10 w-10 flexCenter cursor-pointer bg-secondaryYellow rounded-sm
                 "
              ></div>
              <div
                className="h-10 w-10 flexCenter cursor-pointer bg-secondaryBlue rounded-sm
                  "
              ></div>
              <div
                className="h-10 w-10 flexCenter cursor-pointer bg-secondaryGreen rounded-sm
                 "
              ></div>
            </div>
          </div>
          <div>
            <h4 className="bold-16">Select Size:</h4>
            <div className="flex gap-3 my-3">
              <div className="border-[1.5px] border-slate-900/15 h-10 w-10 flexCenter cursor-pointer rounded-sm">
                S
              </div>
              <div className="border-[1.5px] border-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-sm ">
                M
              </div>
              <div className="border-[1.5px] border-slate-900/15 h-10 w-10 flexCenter cursor-pointer rounded-sm">
                L
              </div>
              <div className="border-[1.5px] border-slate-900/15 h-10 w-10 flexCenter cursor-pointer rounded-sm">
                XL
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mb-8 max-w-[555px] flex-wrap">
          <button className="btn-secondary rounded-sm !px-4">
            <FaHeart />
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="btn-dark rounded-sm !px-20 flexCenter gap-x-2"
          >
            Go to cart
            <LuMoveUpRight className="text-xl" />
          </button>
          {cartItems && !cartItems[product._id] ? (
            <FaPlus
              onClick={() => addToCart(product._id)}
              className="bg-tertiary text-white rounded-sm 
                       h-[38px] w-[38px] p-2 cursor-pointer"
            />
          ) : (
            <>
              <div className="bg-tertiary text-white rounded-sm flexCenter gap-2">
                <FaMinus
                  onClick={() => removeFromCart(product._id)}
                  className="h-8 w-8 p-2 cursor-pointer"
                />
                <p className="text-white pr-2 w-3">{cartItems[product._id]}</p>
                <FaPlus onClick={()=> addToCart(product._id)} className="rounded-sm bg-secondary h-8 w-8 mr-1 cursor-pointer" />
              </div>
            </>
          )}
        </div>
        <p>
            <span className="medium-16 text-tertiary">Category:</span> Women | Jacket | Winter
        </p>
        <p>
            <span className="medium-16 text-tertiary">Tags:</span>
            Modern | New 
            Arrivals
        </p>
      </div>
    </section>
  );
};

export default ProductMd;