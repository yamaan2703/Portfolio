/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from "next/link";
import { Form } from "./Form";
import { Description, Section, Title } from "../../styles/styles";
import { ContainerContact, ContactContent } from "./styles";
import { BsWhatsapp } from "react-icons/bs";
import {
  Envelope,
  FacebookLogo,
  LinkedinLogo,
  TelegramLogo,
} from "phosphor-react";

export function Contact() {
  return (
    <Section>
      <Title>
        Contact
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
        I’m always excited to explore new job opportunities and collaborate on
        innovative projects that push boundaries! 🚀 Feel free to reach out to
        me on any of these platforms—let’s create something amazing together!
        💡✨
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsWhatsapp size={22} color="#00fffb" /> WhatsApp{" "}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=923350353731">
              <a target="_blank">
                <span>+92 335-035-3731</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {" "}
              <TelegramLogo size={22} color="#00fffb" /> Email{" "}
            </h4>
            <Link href="mailto:yamaan004@gmail.com">
              <a target="_blank">
                <span>yamaan004@gmail.com</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {" "}
              <LinkedinLogo size={22} color="#00fffb" /> Linkedin{" "}
            </h4>
            <Link href="https://www.linkedin.com/in/muhammad-yamaan-1b32202a2/">
              <a target="_blank">
                <span>Muhammad Yamaan</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {" "}
              <FacebookLogo size={22} color="#00fffb" /> Facebook{" "}
            </h4>
            <Link href="https://www.facebook.com/muhammad.yamaan.583">
              <a target="_blank">
                <span>Muhammad Yamaan</span>
              </a>
            </Link>
          </div>
        </ContactContent>
      </ContainerContact>
    </Section>
  );
}
