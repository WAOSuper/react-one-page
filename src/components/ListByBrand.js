import React from "react";
import Product from "./Product";
import Carousel from "react-multi-carousel";
import responsive from "../pages/constants";

export default function ListByBrand({brand, product}) {
  return product.filter(fItem => fItem.brand_name === brand).length > 0 ? (
    <>
    <div className="text-xl mb-5 pb-3 mt-3 product-brand">
      {brand}
    </div>
    <div className="w-full flex items-center product-list-body">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite
        autoPlay={false}
        autoPlaySpeed={5000}
        transitionDuration={1000}
        className="w-full"
      >
        {product.filter(fItem => fItem.brand_name === brand).map((productItem, index) => (
          <Product
            product={productItem}
            key={index}
          />
        ))}
      </Carousel>
    </div>
    </>
  ) : (
    <>
    <div className="text-xl mb-5 pb-3 product-brand">
      {brand}
    </div>
    <div className='w-full flex items-center justify-center product-list-body'>
      No matched items
    </div>
    </>
  )

}