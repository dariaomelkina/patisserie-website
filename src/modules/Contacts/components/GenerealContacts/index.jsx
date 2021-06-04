import React from "react";

import Contacts from "../Contacts";

const GeneralContacts = () => {

    return (
        <div className="row" id="i6g53">

            <Contacts name="Northern Hill" email="patsserie.northern.hill@ucu.edu.ua" phone="0 (12) 345 678 90"
                      beginTime="10 am" endTime="6 pm"/>

            <Contacts name="Southern Hill" email="patsserie.southern.hill@ucu.edu.ua" phone="0 (12) 457 381 49"
                      beginTime="9 am" endTime="5 pm"/>


        </div>
    );
};

export default GeneralContacts;