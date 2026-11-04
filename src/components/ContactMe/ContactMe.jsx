import './ContactMe.css';
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import Reveal from "../Reveal/Reveal";
import { GitHubIcon, GmailIcon, LinkedInIcon } from "../SocialIcons/SocialIcons";

const ContactMe = () =>
{
    return (
        <section className="section" id="CONTACT">
            <Reveal>
                <p className="section-eyebrow">Contact</p>
                <h2 className="section-title">Let&apos;s work together</h2>
                <p className="contact-intro">
                    I&apos;m looking for my next software engineering role. If you have an opportunity
                    or a project in mind, I&apos;d love to hear from you.
                </p>
            </Reveal>

            <Reveal className="contact-content">
                <div className="contact-column">
                    <ContactInfoCard
                        icon={<GmailIcon />}
                        url="mailto:imashinethmini88@gmail.com"
                        text="imashinethmini88@gmail.com"
                    />
                    <ContactInfoCard
                        icon={<GitHubIcon />}
                        url="https://github.com/Imashi2000"
                        text="github.com/Imashi2000"
                        external
                    />
                    <ContactInfoCard
                        icon={<LinkedInIcon />}
                        url="https://www.linkedin.com/in/imashi-samarawickrama"
                        text="linkedin.com/in/imashi-samarawickrama"
                        external
                    />
                </div>

                <div className="contact-column">
                    <ContactForm />
                </div>
            </Reveal>
        </section>
    )
}

export default ContactMe;
