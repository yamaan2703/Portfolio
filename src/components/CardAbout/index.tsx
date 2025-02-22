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
              I'm Yamaan, a passionate Software Developer specializing in HTML,
              CSS, JavaScript, TypeScript, ReactJS, and NextJS. I build dynamic,
              high-performance web applications with seamless user experiences,
              leveraging Bootstrap, Tailwind, and Material UI for sleek and
              modern designs. With expertise in React Native, I develop robust
              and scalable mobile applications. I also have hands-on experience
              with Firebase Authentication and Database, ensuring secure and
              efficient backend integration. Dedicated to staying ahead in the
              ever-evolving tech world, I continuously refine my skills to
              tackle new challenges and create innovative digital solutions. 🚀
            </p>

            <strong>
              P.S. this site is open source and is available on{" "}
              <Link href={"https://github.com/yamaan2703"}>
                <a target="_blank">Github</a>
              </Link>
            </strong>
          </div>

          <div className="aboutButton">
            <Link href={"/contact"}>
              <a>
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
              </a>
            </Link>
            <Link href={"/about"}>
              <a>
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
              </a>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
