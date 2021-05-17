import React from 'react';

const Product = props => {
    return (
        <div className="card" id="icx6um" style="background-image: var(--img);">
            <style>
                :root {
                --img:props.product.image;
            }
            </style>
            <div className="card-header ch2" id="i06htm">
            </div>
            <div className="card-body" id="io9imj">
                <div className="card-title" id="iujzpi">props.product.title
                    <br/>
                </div>
                <div className="card-title" id="im23vl">Price: {props.product.price}$ for 1 kg.
                    <br/>
                </div>
                <button onClick={() => props.addItem(props.product)}>
                    Add to cart
                </button>
            </div>
        </div>
    )
        ;
};

export default Product;