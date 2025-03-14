/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import cardSkills from "../../data/skills";
import { Container, Title } from "../../styles/styles";
import { SkillsContainer, SkillsContent, Vector } from "./styles";
import { BsCodeSquare } from "react-icons/bs";

interface Skills {
  title: string;
  color?: string;
  img?: string;
  id: number;
}

export function Skills() {
  return (
    <Container>
      <Vector>
        <div className="js">
          <Image width={100} height={100} src="/vectors/js.svg" alt="" />
        </div>
        <div className="html">
          <Image width={85} height={85} src="/vectors/html.svg" alt="" />
        </div>
      </Vector>
      <Title>
        Skills
        <span>
          <BsCodeSquare /> Skills
        </span>
      </Title>
      <SkillsContainer>
        {cardSkills.map((skill) => {
          return (
            <SkillsContent color={skill.color} key={skill.id}>
              <Image width={60} height={60} src={skill.img} alt={skill.title} />
              <h4>{skill.title}</h4>
              <span className="border"></span>
            </SkillsContent>
          );
        })}
      </SkillsContainer>
    </Container>
  );
}
