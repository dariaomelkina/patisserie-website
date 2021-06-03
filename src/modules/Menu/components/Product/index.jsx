import React from 'react';
import { connect } from 'react-redux';
import { addToCard } from '../../../../redux/Shopping/ShoppingActions';

const Product = ({ product, addToCard }) => {
    const myStyle = {
        minWidth: "100%",
        maxHeight: "65%",
    };

    const myButton = {
        color: "gray",
        backgroundColor: "GhostWhite",
    }
    return (

        <div className="card" id="icx6um" style={{ "background-image": product.image }}>

            <img src={product.image} alt={`${product.title} book`} style={myStyle} />

            <div className="card-body" id="io9imj">
                <div className="card-title" id="iujzpi">{product.title}
                    <br />
                </div>
                <div className="card-title" id="im23vl">Price: -{product.price}$ for 1 kg.
                    <br />
                </div>
                <button onClick={() => addToCard(product.id)} style={myButton}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProbs = dispatch => {
    return {
        addToCard: (id) => dispatch(addToCard(id)),
    }
}

export default connect(null, mapDispatchToProbs)(Product);