import React from 'react';

const Item = props => {
    const myStyle = {
        minWidth: "100%",
        maxHeight: "65%",
    };
    return (
        <div className="card">
            <img src={props.image} alt={`${props.title}`} style={myStyle}/>
            <div className="card-body" id="io9imj">

                <div className="card-title" id="iujzpi">{props.title}
                    <br/>
                </div>
                <div className="card-title" id="im23vl">Price: -{props.price}$ for 1 kg.
                    <br/>
                </div>
            </div>

        </div>
    );
};

export default Item;
