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

const DATA_RESUME = `
Name: Anand Kumar Sivalanka 
Email: anandsiva560@gmail.com 
Phone Number: +1 732-558-3968
 
PROFESSIONAL SUMMARY:
● Around 10 years of experience covering all phases of the software development lifecycle, including end-to-end application design, development, and maintenance, following enterprise standards.
● I have worked across various domains, including telecommunications, healthcare, marketing and finance, insurance, and public transportation.
● Experience integrating GenAI models with existing enterprise applications and workflows
● Experience in building, training, fine-tuning, and deploying Deep Learning Models/LLMs/ML
Models
● Experience developing ML infrastructure and MLOps in the Cloud using GCP, LLM, and
Generative AI.
● Deep understanding of both front-end and back-end technologies, including languages like
JavaScript, Python, Java, HTML, CSS, and frameworks such as React, Angular, Node.js,
and Django.
● Expertise in database management systems, both relational (SQL) and non-relational
(NoSQL), such as MySQL, PostgreSQL, and MongoDB.
● Experience with DevOps practices, continuous integration, and continuous deployment
(CI/CD) tools like Jenkins, Travis CI, Docker, and Kubernetes for streamlined and automated
software delivery.
● Proficiency in deploying and managing applications on cloud platforms such as AWS, Google
Cloud Platform, or Microsoft Azure.
● Familiarity with Agile and Scrum methodologies, with experience in leading and managing
projects, ensuring timely delivery and effective team collaboration.
● Knowledge of security best practices and implementation, including authentication,
authorization, encryption, and data protection to ensure the integrity and security of
applications.
● Advanced use of version control systems, primarily Git, for effective collaboration and version
management in software development projects.
● Excellent communication, teamwork, and leadership skills, capable of mentoring junior
developers, collaborating with cross-functional teams, and effectively translating business requirements into technical solutions.
 
  Technical Skills:
     IDE Tools
VisualStudio Code (VS Code), IntelliJ IDEA, Eclipse, Atom, IntelliJ, Sublime Text, Jupyter Notebook
Languages
Python,Java,NodeJS,
Machine Learning
TensorFlow, PyTorch, Scikit-learn, Keras, Numpy, Pandas, XGBoost, LightGBM, OpenCV, YOLO, MLLib,
Artificial intelligence
Hugging Face Transformers, OpenAI, LangChain, Google Gemini, Hugging Face Models, Llama
Vector Database
Pinecone, ChromoDB, CosomsDB, Faiss, Color, OpenSearch, Milvus, ElasticSearch
Big Data
Hadoop, Apache Spark, Apache Kafka, ApacheHive, Google BigQuery, Data Lake, Apache Flink
ETL Tools
Databricks, Snowflake, Azure Data Factory, AWS Glue, Informatica, Apache Airflow, Kinesis
Operating Systems
MacOS, Windows, Linux
Web Development &Frameworks
HTML5, CSS, JavaScript,Django, React, Angular, Express.js, Spring, Flask, FastAPI, Bootstrap
Databases
PL/SQL(Oracle), MySQL, NoSQL, MongoDB, GraphQL
Cloud &Servers
GCP, AWS, AZURE,Apache Tomcat, HTTP Web Server, Ngnix
Logging and Data Analytics&Version Control Systems
Prometheus,Grafana,Datadog, ELK,Git, BitBucket,GitLab
Container Tools &Infrastructure Tools
Docker, Kubernetes, ACS, AKS, EKS,Terraform, Ansible
              Educational Experience:
● Masters of Science in Computer Science, SFBU
● Bachelor from GIITS in ECE

 PROFESSIONAL EXPERIENCE:
 
TechForce Services/Nsw Public Transport Sanjose,CA,Remote
Gen AI Engineer Oct’23 to Present Responsibilities:
● We use Google Cloud Pub/Sub for real-time data ingestion from ticketing systems, parking databases, and legal records via Apache Kafka.
● Data is processed and cleaned using Apache Spark and PySpark on Google Dataproc, transforming raw data into structured formats.
● Embeddings are generated using OpenAI GPT-3 API and stored in FAISS, hosted on Google Kubernetes Engine for fast retrieval.
● The backend API is developed with Flask in Python, integrating RAG with FAISS for document retrieval and response generation.
● Frontend interface is built with React, allowing users to interact with the chatbot and fetch ticket and court details.
● Docker containers are used for backend and frontend deployment, orchestrated by Kubernetes to ensure scalability and availability
Environment:GCP,OpenAI, FAISS, CI/CD, Docker, Kubernetes, React, Python, FlaskAPI, Apache Kafka, Apache Spark

TechForce Services/SalesForce India,Remote Machine Learning Engineer                    May’22 - Sep’23
Responsibilities:
● Develop and maintain scalable machine learning models using Python, TensorFlow, focusing on customer recommendations and personalization.
● Collaborate with data engineers to preprocess large datasets from CRM systems, ensuring data quality and integrity for model training.
● Implement APIs for real-time recommendations, integrating the machine learning model with Salesforce or other CRM platforms seamlessly.
● Monitor, evaluate, and fine-tune machine learning models in production, using MLOps tools to ensure continuous improvement and accuracy.
● Collaborate with cross-functional teams, including product managers and developers, to align machine learning solutions with business objectives.
● Lead model deployment through CI/CD pipelines using tools like Jenkins, GitHub Actions, and Docker for automated updates.
Environment:Python,SalesforceAPIs,GitHubActions,CI/CD,TensorFlow,Jenkins,GCP,DOCKER.
     
 USAA/TCS India,Remote Machine Learning Engineer                                        Aug’21 - Feb’22
Responsibilities:
● Collect customer data from transactional and behavioral sources using Apache Spark, ensuring scalable data ingestion and feature extraction processes.
● Segment customers with K-Means clustering using Python and scikit-learn, analyzing demographic patterns for deeper insights into customer behavior.
● Train predictive models using Random Forests or XGBoost in Python to forecast customer churn and recommend personalized product offerings.
● Containerize and deploy machine learning models with Flask and Docker for real-time customer insights integration within USAA’s internal systems.
● Implement CI/CD pipelines with Jenkins and deploy models on Kubernetes, enabling continuous training, monitoring, and seamless production deployment.
● Visualize customer insights using Tableau or Power BI, presenting machine learning predictions to business teams for strategic decision-making in real-time.
Environment:Python,ApacheSpark,K-means,scikit-learn,RandomForests,Flask,Docker,CI/CD, Kubernetes.

Cepheid INC Sunnyvale, CA 
Data Analyst                                                                               Feb’20-May’21
Responsibilities:
● Collect diagnostic test data using SQL queries and Python (Pandas) from multiple sources, ensuring high data accuracy and consistency.
● Perform data analysis and exploratory data analysis (EDA) with Python (Seaborn, Matplotlib) to identify trends, correlations, and anomalies.
● Conduct statistical tests like T-tests or chi-squared tests using Python (SciPy, statsmodels) to validate test performance and optimization.
● Implement predictive models using Random Forest or XGBoost in Python to forecast test outcomes and optimize diagnostic efficiency.
● Generate visual reports and dashboards in Tableau or Power BI to deliver insights on diagnostic test performance to stakeholders.
● Automate reporting workflows using Python (Jupyter Notebooks, ReportLab) and schedule regular reports for management and operations teams.
Environment:SQL, Python,Seaborn,Scikit-learn, XGBoost, Random Forest,Power BI
    
 AT&T,SanRoman,CA                                                                           May’17–Dec’19 
 AngularJS Developer
Responsibilities:
● Develop the frontend using AngularJS for interactive features and smooth client-side routing.
● Implement strong security measures, including authentication, authorization, and encryption, to protect user data and ensure compliance.
● Build backend services with Java, using RESTful APIs, and MySQL for efficient data management in a microservices architecture.
● Write unit and integration tests, and configure GitLab CI/CD pipelines to automate testing, building, and deployment.
● Deploy the application, monitor performance, and gather feedback for continuous improvements in production.
● Set up a GitLab repository for version control and project organization, ensuring clarity and collaboration.
Environment:AngularJS,Java,MySQL,GitLabCI/CD,RestFullAPIs,WebJIRA,GIT,VisualStudio. 

Daugherty Business Solutions, St. Louis, Missouri                                           Jan’16 to Mar’17
Java backend developer
Responsibilities:
● Develop a responsive user interface with HTML, CSS, and Bootstrap, ensuring client-side interactions for a user-friendly experience.
● Build backend services with Java, implementing RESTful APIs and business logic for internet service management.
● Configure MySQL database, design schemas, and break down the application into microservices for scalability and modularity.
● Develop microservices for specific functionalities like network optimization and integrate frontend, backend, and database components.
● Write unit and integration tests, and set up GitLab CI/CD pipelines for automated testing, building, and deployment.
● Deploy microservices to production, monitor performance, and optimize based on usage metrics for continuous improvement.
Environment: HTML5,CSS,JavaScript,BootStrap,Java,MySql,RESTAPI, Git, CI/CD,JIRA

LyseinfoinfoGolbalSolutionspvtltd,                                                          Mumbai July’13-April’14
JavaScript Developer
Responsibilities:
● Develop responsive, user-friendly websites using HTML, CSS, and JavaScript, incorporating modern frameworks like React or Angular.
● Collaborate with UX designers to implement intuitive interfaces and write clean, reusable code following best practices.
● Troubleshoot, debug, and optimize performance by reducing load times and file sizes for better user experience.
● Test functionality across devices and browsers, ensuring compatibility and meeting user requirements.
● Use Git for version control and collaborate effectively with other developers on code changes.
● Stay updated with web technologies and continuously integrate new features into web applications.
Environment: HTML5,CSS,JSON,JavaScript,BootStrap,Git



 
				
`