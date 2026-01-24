import { Wrapper } from "../styles/Output.styled";

const Skills: React.FC = () => {
    return (
        <Wrapper data-testid="skills">
            <div style={{ marginBottom: "1.5rem" }}>
                <h3>Full-Stack Development</h3>
                <p>
                    HTML5 | CSS3 | JavaScript | React | WordPress | Webflow <br />
                    Python | Flask | Node.js | RESTful APIs | Docker | Git
                </p>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
                <h3>AI & Machine Learning</h3>
                <p>
                    LLM Fine-Tuning | Prompt Engineering | Voice Data Annotation <br />
                    GPT-4/Claude Integration | Hugging Face | Isaac Sim (USD + PhysX)
                </p>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
                <h3>Automation & Integration</h3>
                <p>
                    n8n Workflow Automation | WhatsApp/Email APIs | Webhooks <br />
                    Business Process Automation | Data Pipeline Development
                </p>
            </div>
            <div>
                <h3>Digital Marketing</h3>
                <p>
                    SEO Optimization | Google Analytics | Content Strategy <br />
                    Performance Marketing | Social Media Integration
                </p>
            </div>
        </Wrapper>
    );
};

export default Skills;
