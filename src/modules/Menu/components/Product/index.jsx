import React from 'react';

const Product = props => {
    const myStyle = {
        minWidth: "100%",
        maxHeight: "65%",
    };

    const myButton = {
        color: "gray",
        backgroundColor: "GhostWhite",
    }
    return (

        <div className="card" id="icx6um" style={{"background-image": props.product.image}}>

            <img src={props.product.image} alt={`${props.product.title} book`} style={myStyle}/>

            <div className="card-body" id="io9imj">
                <div className="card-title" id="iujzpi">{props.product.title}
                    <br/>
                </div>
                <div className="card-title" id="im23vl">Price: -{props.product.price}$ for 1 kg.
                    <br/>
                </div>
                <button onClick={() => props.addItem(props.product)} style={myButton}>
                    Add to cart
                </button>
            </div>
        </div>
    )
        ;
};

export default Product;