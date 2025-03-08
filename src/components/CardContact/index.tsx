import Link from "next/link";
import Image from "next/image";
import { ButtonAlt, Section } from "../../styles/styles";
import { CardContactContainer, CardContactContent } from "./styles";
import { TelegramLogo } from "phosphor-react";

export function CardContact() {
  return (
    <Section>
      <CardContactContainer>
        <div className="ellipse">
          <Image
            width={330}
            height={410}
            src="/vectors/circles.svg"
            alt="circles"
          />
        </div>
        <CardContactContent>
          <div className="description">
            <h2>Let&apos;s talk!</h2>
            <p>
              If you have any questions or just want to say hello, feel free to
              reach out to me. I will do my best to get back to you!
            </p>
          </div>

          <div className="contact">
            <Image
              width={480}
              height={500}
              src="/contact.svg"
              alt="imagem de contato"
            />
          </div>
        </CardContactContent>

        <Link href={"/contact"}>
          <ButtonAlt>
            Get in touch.{" "}
            <TelegramLogo
              style={{
                marginBottom: "-0.1rem",
                marginLeft: "0.2rem",
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
      </CardContactContainer>
    </Section>
  );
}
