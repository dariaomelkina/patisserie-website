import React from "react";

const CartForm = props => {

    return (
        <div className="cell" id="ilmot">
            <div className="row">
            </div>
            <form className="form" id="isar4">
                <div className="form-group" id="ivwtt">
                    <label className="label" id="ik0l2">Name</label>
                    <input placeholder="Type here your name" className="input" id="ifxgl"/>
                </div>
                <div className="form-group" id="imp0h">
                    <label className="label" id="idi8q">Surname</label>
                    <input placeholder="Type here your surname" className="input" id="is448"/>
                </div>
                <label className="label" id="iiest">Total sum: -{props.total}$</label>
                <div className="form-group" id="iv7qw">
                    <button type="submit" className="button" id="i8lf1">Send</button>
                </div>
            </form>
        </div>
    );
};

export default CartForm;