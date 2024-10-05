import React from "react";
import './ContactMe.css';
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () =>
{
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl=""
                        text="imashi.samarawickrama@outlook.com"
                    />
                    <ContactInfoCard
                        iconUrl=""
                        text="https://github.com/Imashi2000"
                    />
                    <ContactInfoCard
                        iconUrl=""
                        text="www.linkedin.com/in/imashi-samarawickrama"
                    />
                </div>

                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe;