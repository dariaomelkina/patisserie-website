import "./contacts.css";
import React from "react";
import ContactsHeading from "../../modules/Contacts/components/ContactsHeading";
import LeftContacts from "../../modules/Contacts/components/LeftContacts";
import RightContacts from "../../modules/Contacts/components/RightContacts";


const ContactsView = () => {
    return (
        <div>
            <section id="icd16f" className="flex-sect">
                <ContactsHeading/>

                <div className="row" id="i6g53">

                    <LeftContacts/>

                    <RightContacts/>

                </div>

            </section>
        </div>
    );
};

export default ContactsView;