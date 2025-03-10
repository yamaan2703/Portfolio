import Head from "next/head";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { CV } from "../components/CV";
import { Description, Section, Title } from "../styles/styles";
import { PageSection } from "../styles/resume";
import { BsFileText } from "react-icons/bs";

export default function Resume() {
  const resumeData =
    "https://www.canva.com/design/DAF_I6LWUlk/lSdvxMMcVxnpXCcM9eDsUg/edit?utm_content=DAF_I6LWUlk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

  const previewData = `${resumeData.substr(
    0,
    resumeData.lastIndexOf("/") + 1
  )}view?embed`;

  return (
    <>
      <Head>
        <title>Resume | Muhammad Yamaan </title>
        {/* <meta
          name="description"
          content="Aqui você poderá ver ou baixar o meu currículo."
        />
        <meta property="og:title" content="Resume | Evander Inácio" />
        <meta
          property="og:description"
          content="Aqui você poderá ver ou baixar o meu currículo."
        /> */}
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          Resume
          <span>
            <BsFileText /> Resume
          </span>
        </Title>
        <Description>Here you can view or download my resume. </Description>

        <PageSection>
          <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="Evander Inácio"
          />

          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  );
}
