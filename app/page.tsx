"use client";
import { useState } from "react";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "How can I help you learn more about Anand and his Resume?",
    },
  ]);

  const submitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let newMessages = [...messages, { role: "user", content: messageInput }];
    setMessages(newMessages);
    setMessageInput("");
    const apiMessage = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: newMessages }),
    }).then((res) => res.json());
    setMessages([
      ...newMessages,
      { role: "assistant", content: apiMessage.message },
    ]);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">A</div>
          <div className="logo-text">VisionaryAI</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:sivaa8019@gmail.com" className="button">
                {" "}
                Contact Me{" "}
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
            <h1>
  <small>Hi I&apos;m</small>
  AnandKumar Sivalanka
</h1>
              <p>
                With nearly a decade of development experience, I&apos;ve always
                been on the hunt for the next big thing.
                <span>
                  AI and Machine Learning have captured my curiosity, and
                  I&apos;m ready to dive deep and create impactful solutions.
                </span>
              </p>

              <div className="call-to-action">
                <a href="./Anand LLM .pdf" className="button black">
                  {" "}
                  View Resume
                </a>
                <a href="mailto:sivaa8019@gmail.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/">
                  <Image
                    src="/images/github.png"
                    alt="GitHub"
                    width={48}
                    height={48}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/anand-sivalanka-49683411b/?trk=opento_sprofile_details
"
                >
                  <Image
                    src="/images/linkedinfour.png"
                    alt="LinkedIn"
                    width={48}
                    height={48}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <Image
              src="/images/MyPic.jpg"
              alt="Anandkumar"
              width={500}
              height={500}
            />
          </div>
        </section>
        <section className="logos container">
          <div className="andy">
            <div className="track">
              <Image
                src="/images/html.png"
                alt="HTML"
                width={128}
                height={150}
              />
              <Image src="/images/css.png" alt="CSS" width={128} height={150} />
              <Image
                src="/images/javascript.png"
                alt="JavaScript"
                width={128}
                height={150}
              />
              <Image
                src="/images/angular.png"
                alt="Angular"
                width={128}
                height={150}
              />
              <Image
                src="/images/react.png"
                alt="React"
                width={128}
                height={150}
              />
              <Image
                src="/images/python.jpeg"
                alt="Python"
                width={128}
                height={150}
              />
              <Image
                src="/images/java.png"
                alt="Java"
                width={128}
                height={150}
              />
              <Image
                src="/images/postgres.png"
                alt="PostgreSQL"
                width={128}
                height={150}
              />
              <Image
                src="/images/pinecone.jpg"
                alt="Pinecone"
                width={128}
                height={150}
              />
              <Image
                src="/images/chroma.png"
                alt="Chroma"
                width={128}
                height={150}
              />
              <Image src="/images/aws.png" alt="AWS" width={128} height={150} />
              <Image src="/images/gcp.png" alt="GCP" width={128} height={150} />
              <Image
                src="/images/langchain.png"
                alt="LangChain"
                width={128}
                height={150}
              />
              <Image
                src="/images/openai.png"
                alt="OpenAI"
                width={128}
                height={150}
              />
              <Image
                src="/images/huggingface.png"
                alt="Hugging Face"
                width={128}
                height={150}
              />
              <Image
                src="/images/CiCd.png"
                alt="CI/CD"
                width={128}
                height={150}
              />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Angular</li>
              
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Java</li>
          
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
  Hi I&apos;m Anandkumar, developer and AI and ML engineer, looking for Opportunities in AI AND ML roles &quot; &quot; 
</p>
              <p>
                At TechForce Services, our team pioneers in harnessing AI to
                revolutionize transportation in New South Wales. This endeavor
                leverages my expertise in machine learning and data analytics to
                foster operational efficiency and user-centric experiences. Our
                success stems from meticulous data collection and the deployment
                of bespoke algorithms, ensuring that we address the intricate
                patterns of traffic and user behavior with precision. In
                partnership with cross-functional teams, we&apos;ve made significant
                strides in blending predictive analytics with marketing and
                financial strategies. Our collective efforts have notably
                enhanced customer engagement and driven financial performance,
                showcasing a steadfast dedication to innovation. It is this
                relentless pursuit of improvement and excellence that propels
                our projects and aligns with my professional ethos.
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <Image
                    src="/images/NSW.png"
                    alt="Machine"
                    width={692}
                    height={100}
                  />
                  <figcaption>NSW Public Transport</figcaption>
                </div>
              </figure>
              <h3>Machine Learning Engineer</h3>
              <div>2023-Present</div>
              <p>
                The NSW Transport project aims to revolutionize transportation
                infrastructure and services across New South Wales (NSW) by
                leveraging cutting-edge machine learning (ML) and artificial
                intelligence (AI) technologies.{" "}
              </p>
            </article>
            <article>
              <figure>
                <div>
                <Image
  src="/images/salesforce.png"
  alt="Marketing"
  width={692}
  height={150}
/>
                  <figcaption>Marketing And Finance</figcaption>
                </div>
              </figure>
              <h3>Machine Learning Engineer</h3>
              <div>2022-2023</div>
              <p>
                Our project aims to revolutionize marketing and finance
                strategies through the strategic implementation of Machine
                Learning (ML) techniques.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <Image
                    src="/images/customer.jpg"
                    alt="usaa"
                    width={692}
                    height={150}
                  />
                  <figcaption>Customer insights and Analytics</figcaption>
                </div>
              </figure>
              <h3>Machine Learning Engineer</h3>
              <div>2021-2022</div>
              <p>
                The &quot;Customer Insights and Analytics&quot; project aims to transform
                how USAA, a leading insurance provider, understands and engages
                with its members.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <Image
                    src="/images/dataanalyst.jpg"
                    alt="Data"
                    width={692}
                    height={150}
                  />
                  <figcaption>
                    Diagnostic Test Optimization using Data Analysis
                  </figcaption>
                </div>
              </figure>
              <h3>Data Analyst</h3>
              <div>2020-2021</div>
              <p>
                The Diagnostic Test Optimization project aims to enhance the
                performance and accuracy of diagnostic tests developed by
                Cepheid Inc.{" "}
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <Image
                    src="/images/internet.jpg"
                    alt="Marketing"
                    width={692}
                    height={150}
                  />
                  <figcaption>Telecommunications</figcaption>
                </div>
              </figure>
              <h3>UI developer</h3>
              <div>2017-2019</div>
              <p>
                {" "}
                It offered high-speed internet, digital TV with HD channels, and
                VoIP phone services, revolutionizing home entertainment and
                communication.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <Image
                    src="/images/charter.png"
                    alt="Charter"
                    width={692}
                    height={150}
                  />
                  <figcaption>
                    Spectrum Internet Service Enhancements
                  </figcaption>
                </div>
              </figure>
              <h3>Java Backend developer</h3>
              <div>2016-2017</div>
              <p>
                The Spectrum Internet Service Enhancements project focused on
                improving Charter Communications internet service.
              </p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="#" className="bento-item">
              <Image
                src="/images/chatbot.png"
                alt="Constitution ChatBot"
                width={555}
                height={2}
              />
            </a>
            <a href="#" className="bento-item">
              <Image
                src="/images/live.png"
                alt="LiveSpeechToText"
                width={560}
                height={2}
              />
            </a>
            <a href="#" className="bento-item">
              <Image
                src="/images/houseprices.webp"
                alt="HousePrices"
                width={270}
                height={10}
              />
            </a>
            <a href="#" className="bento-item">
              <Image src="/images/rag.jpeg" alt="Rag" width={270} height={30} />
            </a>
            <a href="#" className="bento-item">
              <Image
                src="/images/multiple.jpeg"
                alt="MCQ Generator"
                width={560}
                height={30}
              />
            </a>
            <a href="#" className="bento-item">
              <Image
                src="/images/classficatation.png"
                alt="ImageClassifaction"
                width={1450}
                height={30}
              />
            </a>
          </div>
        </section>

        <section className="chatbot container">
          <h2>
            <small>Talk to me</small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Anand AI Chatbot</h3>
              <p>
                I&apos;ve put together a chatbot here which knows all my skills,
                work experience and has a copy of my CV/Resume. You can use it
                to ask questions about me to get a better idea of who I am and
                what I&apos;ve done.
              </p>
              <p>
                You can also download my resume here if you want to take a look
                at it. I&apos;m currently looking for new opportunities, so if
                you have a project you think I&apos;d be a good fit for, please
                get in touch!
              </p>
              <a href="./Anand LLM .pdf" className="button black">
                Download Resume
              </a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>
                        {message.role === "user" ? "You" : "AI"}
                      </span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input
                  type="text"
                  placeholder="Hey Anand, what skills are you best at?"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
