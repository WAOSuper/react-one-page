import React from "react";
import Carousel from "react-multi-carousel";
import Product from "./Product";
import responsive from "../pages/constants";

export default function ListByAll({brand, products}) {
    return (
    <>
    <div className="text-xl mb-5 pb-3 product-brand">
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
        {products.map((productItem, index) => (
          <Product
            product={productItem}
            key={index}
          />
        ))}
      </Carousel>
    </div>
    </>
    )
}