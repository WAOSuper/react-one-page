import React from 'react'

export default function Product({product}) {
    return (
        <div className="product-card flex items-center justify-center p-2.5 mx-auto cursor-pointer">
            <div className="p-3 select-none w-full h-full product-card-body">
                <div className="pb-3.5 grid grid-cols-9">
                    <div className="col-span-4">
                        <img alt="img" src={product.image} draggable="false" className="cursor-pointer product-image" />
                    </div>
                    <div className="col-span-5 pl-2">
                        <div className="truncate pb-2.5 product-name">
                            {product.product_name}
                        </div>
                        <div className="truncate pb-2.5 product-card-text">
                            {product.brand_name}
                        </div>
                        <div className="product-card-price">
                            <span className="text-base">$</span>  {product.price}
                        </div>
                    </div>
                </div>
                <div className="pb-3 grid grid-cols-9 items-center">
                    <div className="col-span-4 truncate product-card-text">
                    {product.address.city}, {product.address.state}
                    </div>
                    <div className="col-span-5 pl-2 truncate product-card-text">
                    <span className="product-card-date">Date: </span>
                    {product.time}
                    </div>
                </div>
                <div className="truncate product-card-discription">
                    {product.discription}
                </div>
            </div>
        </div>
    )
}