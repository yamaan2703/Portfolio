import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { Links } from "../components/Links";
import { BiUserPin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import * as S from "../styles/about";
import { ButtonAlt, Section, Title } from "../styles/styles";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Muhammad Yamaan </title>
        {/* <meta
          name="description"
          content="Meu nome é Evander Inácio, sou um desenvolvedor front-end React
          do Brasil."
        />
        <meta property="og:title" content="About | Evander Inácio" />
        <meta
          property="og:description"
          content="Meu nome é Evander Inácio, sou um desenvolvedor front-end React do Brasil."
        /> */}
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            About
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/Yamaan_1.jpeg"
                alt="Imagem de perfil Evander"
              />

              <div className="links">
                <ul>
                  <Link href={"https://github.com/EvanderInacio"}>
                    <a target="_blank" aria-label="Link para o Github">
                      <AiFillGithub size={25} /> @EvanderInacio
                    </a>
                  </Link>
                  <Link href={"https://www.linkedin.com/in/evander-inacio/"}>
                    <a target="_blank" aria-label="Link para o Linkedin">
                      <BsLinkedin size={25} /> @evander-inacio
                    </a>
                  </Link>
                  <Link
                    href={"https://api.whatsapp.com/send?phone=5511995085916"}
                  >
                    <a target="_blank" aria-label="Link para o WhatsApp">
                      <RiWhatsappFill size={25} /> +55 (11) 99508-5916
                    </a>
                  </Link>
                  <Link
                    href={"https://www.discordapp.com/users/evander_inacio"}
                  >
                    <a
                      className="dc"
                      target="_blank"
                      aria-label="Link para o Discord"
                    >
                      <FaDiscord size={25} /> @evander_inacio
                    </a>
                  </Link>
                  <Link href={"mailto:evander.20116@gmail.com"}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link para o email"
                    >
                      <GrMail size={25} /> @evander.20116@gmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Let's talk—who knows, we might create an amazing project
                  together!{" "}
                </h3>
                <p>Send me a message! 😉</p>
                <Link href={"/contact"}>
                  <a>
                    <ButtonAlt>Contact</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
              My name is Evander Inácio, I am a front-end React developer from Brazil, passionate about designing and coding. My specialty is creating interfaces and functionalities for web applications using React.js and Next.js.
              </p>
              <p>
              I started my journey at university with the initial goal of studying Systems Analysis and Development. I have always been interested in computers and curious about web page creation. So, I decided to combine these two passions and enrolled in college to explore the possibilities of the IT field.
              </p>
              <p>
              It was only in 2021, during the second-to-last semester of college, that I started taking programming more seriously. I made my first attempt at learning HTML and CSS, but I ended up taking a break after a few months due to a lack of free time.
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  );
}
