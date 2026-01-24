import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Shashank Kumar</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Senior AI Training Specialist & Full-Stack Developer</HighlightAlt> based in Baraut,
        India.
      </p>
      <p>
        I have 4+ years of experience in large-scale text/voice annotation, <br />
        LLM fine-tuning, and building scalable web applications.
      </p>
    </AboutWrapper>
  );
};

export default About;
