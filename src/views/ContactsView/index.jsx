import "./contacts.css";
import React from "react";
import ContactsHeading from "../../modules/Contacts/components/ContactsHeading";
import GeneralContacts from "../../modules/Contacts/components/GenerealContacts";


const ContactsView = () => {
    return (
        <div>
            <section id="icd16f" className="flex-sect">
                <ContactsHeading/>

                <GeneralContacts/>

            </section>
        </div>
    );
};

export default ContactsView;