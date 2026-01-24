import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <div style={{ marginBottom: "1.5rem" }}>
        <h3>Education</h3>
        <p>
          B.S. in Computer Science | University of the People | April 2025 - Present <br />
          B.A. in English, History & Hindi | Subharti University | 2022 - March 2025 <br />
          Diploma in Dental Hygiene | Dr. B. R. Ambedkar University | 2021 - 2023
        </p>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h3>Experience</h3>
        <p>
          AI Training Specialist & Voice Artist | Scale AI | 2022 - Present
        </p>
        <p>
          AI Trainer & Evaluator | OneForma | 2023 - Present
        </p>
        <p>
          Freelance Full-Stack Developer | Fiverr | 2020 - 2024
        </p>
      </div>
      <div>
        <h3>Certifications</h3>
        <p>
          CS50: Introduction to Computer Science – Harvard University (2024)
        </p>
        <p>
          Scale AI Annotation Specialist Certification (2022)
        </p>
        <p>
          Google Analytics, Ads, and Digital Marketing (2023)
        </p>
        <p>
          Deloitte Technology & Data Analytics Simulation (2025)
        </p>
        <p>
          Advanced Prompt Engineering for LLMs (Self-Certified)
        </p>
      </div>
    </Wrapper>
  );
};



export default Education;
