import React from 'react';

const Item = props => {
    return (
        <div className="shopping-cart_item">
            <img src={props.image} alt={`${props.title} book`}/>

            <div>
                <h1>{props.title}</h1>
                <p>$ {props.price}</p>
            </div>
        </div>
    );
};

export default Item;
