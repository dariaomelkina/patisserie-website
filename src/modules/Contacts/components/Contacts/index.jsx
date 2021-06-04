import React from "react";

const Contacts = props => {
    return (
        <div className="cell" id="iael6">
            <div id="i171k">{props.name}
                <br/>
            </div>
            <div id="icise">
                <div>{props.email}
                </div>
                <div>
                    <br/>
                </div>
                <div>{props.phone}
                </div>
            </div>
            <div id="igavh">
                <strong>Monday –– Friday:<br/></strong>{props.beginTime} –– {props.endTime}
                <br/>
                <strong>Saturday </strong>
                <strong><strong>–– </strong>Sunday:<br/></strong>closed
            </div>
        </div>
    );
}

export default Contacts