import React from "react";
import './ContactMe.css';
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () =>
{
    return (
        <section className="contact-container" id="CONTACT">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="./assets/images/outlook.png"
                        url="imashi.samarawickrama@outlook.com"
                        target_text="_blank"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/github.png"
                        url="https://github.com/Imashi2000"
                        target_text="_blank"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/linkedin.png"
                        url="https://www.linkedin.com/in/imashi-samarawickrama"
                        target_text="_blank"
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