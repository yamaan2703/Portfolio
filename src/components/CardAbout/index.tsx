import Image from "next/image";
import Link from "next/link";
import { Button, Container, ButtonAlternatives } from "../../styles/styles";
import { AboutContainer } from "./styles";
import { ArrowRight, TelegramLogo } from "phosphor-react";

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={500}
            height={500}
            className="AboutImg"
            src="/about.svg"
            alt="Imagem de perfil"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Let me introduce myself</h2>
            <p>
              I&apos;m Yamaan, a passionate Software Developer skilled in HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, and React Native. I craft high-performance web and mobile apps with sleek designs using Tailwind, Bootstrap, and Material UI. Experienced in Firebase Authentication and Database, I ensure secure and efficient backend integration. Constantly evolving, I thrive on new challenges to build innovative digital solutions. 🚀
            </p>

            <strong>
              P.S. this site is open source and is available on&nbsp;
              <Link href="https://github.com/yamaan2703" target="_blank">
                Github
              </Link>
            </strong>
          </div>

          <div className="aboutButton">
            <Link href="/contact">
              <Button>
                Contact me
                <TelegramLogo
                  style={{
                    marginBottom: "-0.1rem",
                    marginLeft: "0.2rem",
                  }}
                  size={16}
                  weight="bold"
                />
              </Button>
            </Link>
            <Link href="/about">
              <ButtonAlternatives>
                Read more
                <ArrowRight
                  style={{
                    marginBottom: "-0.1rem",
                    marginLeft: "0.2rem",
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
