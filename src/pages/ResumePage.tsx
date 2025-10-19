import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaNpm, FaPython, FaDocker, FaCode } from 'react-icons/fa';
import {
    SiNodedotjs,
    SiJavascript,
    SiTypescript,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiGraphql,
    SiPrisma,
    SiMongoose,
    SiSequelize,
    SiSharp,
    SiPostman,
    SiRender,
    SiNetlify,
    SiCypress,
    SiJest
} from 'react-icons/si';



export default function Resume() {
    return (
        <section className="resume">
            <div className="resume__content">
                <h2 className="resume__title">Resume</h2>

                <p className="resume__description">
                    Download my{' '}
                    <a
                        href="https://docs.google.com/document/d/1f4lbETwKA1RQQddepxXzhfaZ-v9Jysc8j33ZMxCNJ1c/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume__link"
                        aria-label="Download Sharon Heim's resume as a PDF"
                    >
                        resume (PDF)
                    </a>
                    .
                </p>

                <section className="skills">
                    <h3 className="skills__title">Technical Skills</h3>

                    <div className="skills__category">
                        <h4 className="skills__category-title">Frontend Technologies</h4>
                        <div className="skills__icons">
                            <div className="skill__item">
                                <FaHtml5 size={70} title="HTML5" className="skill__icon" />
                                <span className="skill__name">HTML5</span>
                            </div>
                            <div className="skill__item">
                                <FaCss3 size={70} title="CSS3" className="skill__icon" />
                                <span className="skill__name">CSS3</span>
                            </div>
                            <div className="skill__item">
                                <SiJavascript size={70} title="JavaScript ES6+" className="skill__icon" />
                                <span className="skill__name">JavaScript</span>
                            </div>
                            <div className="skill__item">
                                <FaReact size={70} title="React" className="skill__icon" />
                                <span className="skill__name">React</span>
                            </div>
                            <div className="skill__item">
                                <SiTypescript size={70} title="TypeScript" className="skill__icon" />
                                <span className="skill__name">TypeScript</span>
                            </div>
                            <div className="skill__item">
                                <FaBootstrap size={70} title="Bootstrap" className="skill__icon" />
                                <span className="skill__name">Bootstrap</span>
                            </div>
                            <div className="skill__item">
                                <SiTailwindcss size={70} title="Tailwind CSS" className="skill__icon" />
                                <span className="skill__name">Tailwind</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__category">
                        <h4 className="skills__category-title">Backend Technologies</h4>
                        <div className="skills__icons">
                            <div className="skill__item">
                                <SiNodedotjs size={70} title="Node.js" className="skill__icon" />
                                <span className="skill__name">Node.js</span>
                            </div>
                            <div className="skill__item">
                                <SiExpress size={70} title="Express.js" className="skill__icon" />
                                <span className="skill__name">Express</span>
                            </div>
                            <div className="skill__item">
                                <SiGraphql size={70} title="GraphQL APIs" className="skill__icon" />
                                <span className="skill__name">GraphQL</span>
                            </div>
                            <div className="skill__item">
                                <SiPrisma size={70} title="Prisma ORM" className="skill__icon" />
                                <span className="skill__name">Prisma</span>
                            </div>
                            <div className="skill__item">
                                <SiMongoose size={70} title="Mongoose ODM" className="skill__icon" />
                                <span className="skill__name">Mongoose</span>
                            </div>
                            <div className="skill__item">
                                <SiSequelize size={70} title="Sequelize ORM" className="skill__icon" />
                                <span className="skill__name">Sequelize</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__category">
                        <h4 className="skills__category-title">Databases</h4>
                        <div className="skills__icons">
                            <div className="skill__item">
                                <SiMongodb size={70} title="MongoDB" className="skill__icon" />
                                <span className="skill__name">MongoDB</span>
                            </div>
                            <div className="skill__item">
                                <SiPostgresql size={70} title="PostgreSQL" className="skill__icon" />
                                <span className="skill__name">PostgreSQL</span>
                            </div>
                            <div className="skill__item">
                                <SiMysql size={70} title="MySQL" className="skill__icon" />
                                <span className="skill__name">MySQL</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__category">
                        <h4 className="skills__category-title">Programming Languages</h4>
                        <div className="skills__icons">
                            <div className="skill__item">
                                <FaPython size={70} title="Python (Familiar)" className="skill__icon" />
                                <span className="skill__name">Python</span>
                            </div>
                            <div className="skill__item">
                                <SiSharp size={70} title="C# (Familiar)" className="skill__icon" />
                                <span className="skill__name">C#</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__category">
                        <h4 className="skills__category-title">Tools & Platforms</h4>
                        <div className="skills__icons">
                            <div className="skill__item">
                                <FaGitAlt size={70} title="Git Version Control" className="skill__icon" />
                                <span className="skill__name">Git</span>
                            </div>
                            <div className="skill__item">
                                <FaGithub size={70} title="GitHub" className="skill__icon" />
                                <span className="skill__name">GitHub</span>
                            </div>
                            <div className="skill__item">
                                <FaNpm size={70} title="NPM Package Manager" className="skill__icon" />
                                <span className="skill__name">NPM</span>
                            </div>
                            <div className="skill__item">
                                <FaCode size={70} title="VS Code" className="skill__icon" />
                                <span className="skill__name">VS Code</span>
                            </div>
                            <div className="skill__item">
                                <SiPostman size={70} title="Postman API Testing" className="skill__icon" />
                                <span className="skill__name">Postman</span>
                            </div>
                            <div className="skill__item">
                                <SiRender size={70} title="Render Deployment" className="skill__icon" />
                                <span className="skill__name">Render</span>
                            </div>
                            <div className="skill__item">
                                <SiNetlify size={70} title="Netlify Deployment" className="skill__icon" />
                                <span className="skill__name">Netlify</span>
                            </div>
                            <div className="skill__item">
                                <FaDocker size={70} title="Docker (Familiar)" className="skill__icon" />
                                <span className="skill__name">Docker</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__category">
                        <h4 className="skills__category-title">Testing & QA</h4>
                        <div className="skills__icons">
                            <div className="skill__item">
                                <SiCypress size={70} title="Cypress E2E Testing" className="skill__icon" />
                                <span className="skill__name">Cypress</span>
                            </div>
                            <div className="skill__item">
                                <SiJest size={70} title="Jest Unit Testing (Familiar)" className="skill__icon" />
                                <span className="skill__name">Jest</span>
                            </div>
                        </div>
                    </div>

                    <p className="skills__description">
                        The technologies above represent my comprehensive skill set as a Full-Stack
                        Software Developer. My experience spans modern frontend frameworks, robust
                        backend systems, multiple database technologies, and industry-standard
                        development tools. I excel in building responsive web applications,
                        implementing RESTful and GraphQL APIs, and working with agile development
                        methodologies. I am passionate about continuous learning and staying
                        current with emerging technologies to deliver innovative solutions.
                    </p>
                </section>
            </div>
        </section>
    );
}
