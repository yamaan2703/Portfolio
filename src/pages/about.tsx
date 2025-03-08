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
                  <Link href={"https://github.com/yamaan2703"}>
                    <a target="_blank" aria-label="Link para o Github">
                      <AiFillGithub size={25} /> @Muhammad Yamaan
                    </a>
                  </Link>
                  <Link href={"https://www.linkedin.com/in/muhammad-yamaan-1b32202a2/"}>
                    <a target="_blank" aria-label="Link para o Linkedin">
                      <BsLinkedin size={25} /> @Muhammad Yamaan
                    </a>
                  </Link>
                  <Link
                    href={"https://api.whatsapp.com/send?phone=5511995085916"}
                  >
                    <a target="_blank" aria-label="Link para o WhatsApp">
                      <RiWhatsappFill size={25} /> +92 335-035-3731
                    </a>
                  </Link>
                  <Link href={"mailto:yamaan004@gmail.com"}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link para o email"
                    >
                      <GrMail size={25} /> @yamaan004@gmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Let&apos;s talk—who knows, we might create an amazing project
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
              I am Muhammad Yamaan Fahim, a passionate software developer with a strong command of frontend development. I have extensive experience in building web and mobile applications, specializing in HTML, CSS, JavaScript, TypeScript, ReactJS, and NextJS for web development, while leveraging React Native for mobile app development.
              </p>
              <p>
              I am also proficient in Firebase Authentication and Firebase Database, which I use to develop secure and scalable web & mobile applications. To craft modern and interactive user interfaces, I incorporate Material UI, Tailwind CSS, and other advanced frontend libraries. With a continuous learning mindset, I embrace new technologies and challenges to create innovative solutions that elevate every project I work on.
              </p>
              <p>
              I am also proficient in Firebase Authentication and Firebase Database, which I use to develop secure and scalable web & mobile applications. To craft modern and interactive user interfaces, I incorporate Material UI, Tailwind CSS, and other advanced frontend libraries. With a continuous learning mindset, I embrace new technologies and challenges to create innovative solutions that elevate every project I work on.
              </p>
              <p>I am currently pursuing a BS in Computer Science (BSCS) at Federal Urdu University of Arts, Science & Technology (FUUAST). Alongside my studies, I actively explore new technologies and enhance my practical development skills.</p>
              <p>I’m a lifelong learner passionate about exploring new ideas and technologies. To me, software development is not just coding but a way to create innovative solutions. My goal is to build modern, scalable, and user-centric applications that solve real-world problems because innovation drives growth.</p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  );
}
