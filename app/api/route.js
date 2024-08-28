import {OpenAIClient,AzureKeyCredential} from '@azure/openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;


export async function POST(req){

    const {messages} = await req.json();

    const client = new OpenAIClient(endpoint,new AzureKeyCredential(apiKey));
   
    messages.unshift({
        role:'system',
        content:`You are PortofolioGPT,answering only questions based on on the resume provided
        Resume: ${DATA_RESUME}

        Help users learn more Anand from his resume`
    })


    // const messages = [
    //     {
    //         role:'system',
    //         content:'Your are helpful assistant'
    //     },
    //     {
    //         role:'user',
    //         content:'Why is Javascript better than Python?'
    //     }
    // ];

    const response = await client.getChatCompletions(model,messages,{
        maxTokens:128,
    })
    return NextResponse.json({
        message:response.choices[0].message.content
    })
}

const DATA_RESUME = `Anand Kumar Sivalanka
anandsiva560@gmail.com
+1 732-558-3968
linkedin.com/in/anandkumar-sivalanka-49683411b

PROFESSIONAL SUMMARY:


Around 10 years of professional experience in all phases of the software development life cycle including requirements analysis and Debugging, Applications Design, Development, Integration, Maintenance, Installation, and Testing of various clients/servers as per Enterprise standards
Experience in developing ML infrastructure and MLOps in the Cloud using AWS Sage maker, LLM, and Generative AI.
Experience integrating GenAI models with existing enterprise applications and workflows
Deep understanding of both front-end and back-end technologies, including languages like JavaScript, Python, Java, HTML, CSS, and frameworks such as React, Angular, Node.js, and Django.
Expertise in database management systems, both relational (SQL) and non-relational (NoSQL), such as MySQL, PostgreSQL, and MongoDB.
Experience in building, training, fine-tuning, and deploying Deep Learning Models/LLMs/ML Models
Skilled in designing, developing, and integrating RESTful and GraphQL APIs, ensuring efficient communication between different parts of the application.
Experience with DevOps practices, continuous integration, and continuous deployment (CI/CD) tools like Jenkins, Travis CI, Docker, and Kubernetes for streamlined and automated software delivery.
Proficiency in deploying and managing applications on cloud platforms such as AWS, Google Cloud Platform, or Microsoft Azure.
Strong analytical and problem-solving abilities, with a proven track record of identifying and resolving complex issues in both development and production environments.
Familiarity with Agile and Scrum methodologies, with experience in leading and managing projects, ensuring timely delivery and effective team collaboration.
Knowledge of security best practices and implementation, including authentication, authorization, encryption, and data protection to ensure the integrity and security of applications.
Advanced use of version control systems, primarily Git, for effective collaboration and version management in software development projects.
Knowledge of security best practices and implementation, including authentication, authorization, encryption, and data protection to ensure the integrity and security of applications.
Excellent communication, teamwork, and leadership skills, capable of mentoring junior developers, collaborating with cross-functional teams, and effectively translating business requirements into technical solutions.


TECHNICAL SKILLS:



IDE Tools
VisualStudio Code (VS Code), IntelliJ IDEA, Eclipse, Atom, IntelliJ, Sublime Text, Jupyter Notebook
Languages
Java, J2EE,C, C++, NodeJS, Python
Web Development
HTML 5, CSS, JavaScript, 
Database
PL/SQL(Oracle), MySQL, NoSQL, Mongo DB
Servers
Apache Tomcat, HTTP Web Server, AWS, GCP
Operating Systems
Windows, Mac OS X, LINUX.
Frameworks
ReactJS, AngularJS,Django,ExpressJS,Vue.js Spring, Bootstrap
Libraries
NumPy, Pandas, SciPy, Matplotlib, Seaborn, Plotly, scikit-learn,  TensorFlow, Keras, XGBoost, LightGBM, NLTK
AI / ML Skills
Generative AI, LLM, Classification, Regression, Clustering, Neural Networks





PROFESSIONAL EXPERIENCE:


TechForce Services 
MachineLearningEngineer                                                                                                                                              Oct’23 to Present                                                  




Responsibilities:
Proven experience working as a Software Engineer, focusing on ML Engineering and Generative AI Applications like chatGPT, Llama Models, Vector DBs, and Prompt Engineering.
St
rong proficiency in programming languages like Java, Scala, and Python, with experience in Google Cloud, Big Query, Hadoop, and Spark.
Solid knowledge of software engineering best practices, including version control systems (e.g., Git), code reviews, API development, and testing methodologies.
Experience with large language models (LLMs) and prompt engineering techniques, including extensive work with vector databases.
Experience working with various embedding techniques and models to enhance AI application performance.
Ability to query and search vector databases such as Milvus, ensuring efficient data retrieval and storage.
Developed Retrieval Augmented Generation(RAG) Applications using vector databases, improving AI model accuracy and relevance.
Strong communication skills to effectively collaborate with and present findings to both technical and non-technical stakeholders.
Proven ability to quickly adapt to and learn new technologies and frameworks, staying current with industry advancements.
A proactive mindset with a passion for continuous learning and research in the field of Generative AI, driving innovation.
Experience with CI/CD pipelines to automate deployment processes, ensuring efficient, consistent, and reliable software delivery.Proficient in using Docker for containerization, streamlining development, testing, and deployment across various environments.




Environment: NLP (Natural Language Processing), RAG, Prompt Engineering, Vector DB, CI/CD,Docker


Machine Learning Engineer                                           April’22 - Sep’23








Responsibilities:
Develop and maintain data pipelines for efficient collection, processing, and analysis of supply chain data from various sources.
Implement machine learning models to predict demand, optimize inventory, and improve overall supply chain efficiency.
Conduct exploratory data analysis to uncover patterns, trends, and insights that inform strategic supply chain decisions.
Collaborate with cross-functional teams to design and deploy data-driven supply chain solutions aligned with business objectives.
Create interactive dashboards and visualizations to communicate supply chain performance metrics and insights to stakeholders.
Perform data cleaning, preprocessing, and validation to ensure accuracy and reliability of supply chain data.
Utilize advanced analytics techniques to conduct root cause analysis and identify areas for process improvement.
Integrate data from disparate systems to provide a comprehensive view of supply chain operations and performance.
Stay updated on industry trends and advancements in data science to enhance supply chain analytics capabilities.
Present findings and recommendations to senior management, facilitating data-driven decision-making and strategic planning.
Environment: Agile Methodologies,Python,NumPy, Pandas, Scikit-Learn, TensorFlow, Apache AirFlow,AWS, DOCKER, Slack


USAA, Plano, Texas                                                                                Aug’21 - May’22
Machine Learning Engineer 
Responsibilities:
Design and implement predictive analytics models to anticipate supply chain disruptions and mitigate potential risks.
Optimize supply chain processes through data-driven insights, reducing costs and improving operational efficiency.
Conduct scenario analysis to evaluate the impact of different supply chain strategies and decisions.
Automate repetitive supply chain tasks using machine learning and artificial intelligence techniques.
Collaborate with IT teams to ensure seamless integration of analytics tools with existing supply chain systems.
Use natural language processing to analyze unstructured data from customer feedback and supplier communications.
Develop simulation models to test and validate supply chain strategies before implementation.
Monitor and evaluate key performance indicators to track the effectiveness of supply chain initiatives.
Provide training and support to supply chain teams on data analytics tools and techniques.
Ensure compliance with data privacy and security regulations in all supply chain analytics activities.




Environment:Python,Graphx,simul8,Looker,CPLEX

Cepheid INC, Sunnyvale, CA                                                         	                      Feb’20-May’21
Data Analyst


Responsibilities:
Gather and integrate diverse datasets related to diagnostic tests, including test results, clinical samples, assay parameters, and performance metrics, ensuring data completeness and accuracy.
Conduct exploratory data analysis to identify patterns, trends, and relationships within the data, providing insights into test performance and potential areas for optimization.
Evaluate the performance of existing diagnostic tests through statistical analysis and hypothesis testing, identifying factors influencing test sensitivity, specificity, and accuracy.
Engage in feature engineering to extract relevant features from raw data, such as genetic sequences, test metrics, and patient demographics, for use in predictive modeling and optimization.
Assist in the development of statistical models and machine learning algorithms to analyze test performance, predict diagnostic outcomes, and optimize assay parameters, ensuring robust and accurate analytical methods
Implement data-driven quality control methods to monitor assay performance, detect anomalies, and ensure the reliability and reproducibility of diagnostic results, contributing to regulatory compliance and
 clinical validation efforts.
Generate reports and visualizations summarizing key findings from data analysis, presenting insights and recommendations to stakeholders, including project managers, scientists, and regulatory personnel.


Environment: PostgreSQL, Extract Transform Load (ETL), Python (Programming Language), NumPy, Pandas, Matplotlib, Scikit-Learn, Jupyter, GitLab CI/CD, Quality Management · Statistical Data Analysis


AT&T, SanRoman, CA                                                                              May’17–Dec’19
AngularJS Developer

Responsibilities:
Establish GitLab repository for version control, organizing project structure for clarity and collaboration.
Develop frontend with AngularJS, focusing on interactive features and seamless client-side routing.
Implement robust security measures throughout the application stack, including authentication, authorization, and data encryption, to safeguard sensitive user information and maintain compliance with regulatory standards.
Establish thorough documentation and knowledge sharing practices to ensure smooth on boarding for new team members and facilitate ongoing maintenance and updates to the application.
Employ Java for backend services, constructing RESTful APIs to manage data and functionality effectively.
Utilize MySQL for robust data storage and retrieval.
Implement microservices architecture to enhance scalability and maintainability.
Write comprehensive unit tests and integration tests to validate functionality and ensure reliability.
Configure GitLab CI/CD pipelines to automate testing, building, and deployment processes seamlessly.
Deploy application to production environment, continuously monitoring performance and gathering feedback for iterative improvements.


Environment: AngularJS, Java, MySQL, GitLab CI/CD, RESTful APIs, Web JIRA, GIT, Visual Studio.

Daugherty Business Solutions, St. Louis, Missouri                          Jan’16 to Mar’17
Java backend developer	


Responsibilities:
Develop user interface using HTML, CSS, and Bootstrap for responsive design.
Implement client-side interactions and layouts for a user-friendly experience.
Use Java to build backend services, including RESTful APIs for data handling.
Implement business logic for managing internet service enhancements.
Configure MySQL database to store internet service data and configurations.
Design database schema to efficiently store and retrieve information.
Break down applications into microservices for scalability and modularity.
Develop microservices to handle specific functionalities such as network optimization and speed enhancements.
Integrate frontend with backend and database components.
Write unit tests and integration tests to ensure functionality and reliability.
Configure GitLab CI/CD pipelines for automated testing, building, and deployment.
Define stages for testing, code quality checks, and deployment to staging and production environments.
Deploy microservices to the production environment using GitLab CI/CD.
Monitor application performance and usage metrics for continuous improvement and optimization.
Environment: HTML5, CSS, JavaScript, Bootstrap, Java, MySql, REST API, Git, GitLab CI/CD, JIRA




Lyse info Global Solutions pvt ltd, Mumbai                                        July’13-April’14
JavaScript Developer


Responsibilities:
Develop and maintain responsive and user-friendly websites using HTML, CSS, and JavaScript.
Use modern web development frameworks and libraries like React or Angular to build complex web applications.
Collaborate with UX designers to create intuitive user interfaces and implement their designs into working code.
Write clean, well-organized, and reusable code that follows industry best practices and coding standards.
Troubleshoot and debug code to identify and resolve issues in a timely manner.
Optimize website performance by minimizing page load times and reducing the size of files.
Test website functionality and user interface to ensure that it meets user requirements and works across different devices and browsers.
Stay up-to-date with the latest developments in web technologies and implement new features into web applications.
Use version control systems like Git to manage code changes and collaborate with other developers.
Participate in code reviews and provide feedback to other developers to ensure that the codebase is maintainable and scalable.
Environment: HTML5, CSS, JSON, JavaScript, Bootstrap, Git




 
				
`