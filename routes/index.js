var express = require('express');
var router = express.Router();

const itemList = [
  {'id':1,'title':'DevOps',
  'description':'DevOps is a group of concepts that stress communication, collaboration, integration, and automation in order to improve the flow of work between software developers and IT operations professionals. This increased flow is expected to lead to faster delivery of software and more stable operating environments, which helps to achieve business goals.',
  'reference':'E. Mueller, "What Is DevOps?," The Agile Admin, 23 April 2023. [Online]. Available: https://theagileadmin.com/what-is-devops/. [Accessed 20 July 2023].'},
  {'id':2,'title':'Waterfall Method',
  'description':'The Waterfall Method is a traditional software development approach that follows a linear and sequential process. A project is broken down into distinct phases completed one after the other which can provide limited flexibility for changes or iterations during the development lifecycle.',
  'reference':'R. Sherman, Business Intelligence Guidebook, Amsterdam: Elsevier, 2015.'},
  {'id':3,'title':'Agile methods',
  'description':'Agile methodology is an iterative and incremental approach to software development that emphasises adaptive planning, continuous customer collaboration, and delivering working software in short, frequent iterations.',
  'reference':'K. Beck, M. Beedle, A. van Bennekum, A. Cockburn, W. Cunningham and M. Fowler, "Manifesto for Agile Software Development," 2001. [Online]. Available: https://agilemanifesto.org/. [Accessed 20 July 2023].'},
  {'id':4,'title':'Git Hub',
  'description':'GitHub is a web-based platform and collaborative version control system that facilitates code hosting, sharing, and collaboration among software developers, allowing them to manage and track changes to their code repositories.',
  'reference':'O. Sofela, "Git vs GitHub – What is Version Control and How Does it Work?," FreeCodeCamp, 19 August 2020. [Online]. Available: https://www.freecodecamp.org/news/git-and-github-overview/. [Accessed 22 July 2023].'},
  {'id':5,'title':'Visual Studio Code',
  'description':'Visual Studio Code is a lightweight, cross-platform source code editor developed by Microsoft, featuring built-in support for various programming languages, extensive extensions, and powerful debugging capabilities.',
  'reference':'F. Khalid, "Visual Studio VS. Visual Studio Code," DevTeam.Space, 2023. [Online]. Available: https://www.devteam.space/blog/visual-studio-vs-visual-studio-code/. [Accessed 20 July 2023].'},
  {'id':6,'title':'NodeJS',
  'description':'Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute server-side JavaScript code, enabling scalable and efficient network applications.',
  'reference':'OpenJS Foundation, "About Node.js," OpenJS Foundation, 2023. [Online]. Available: https://nodejs.org/en/about. [Accessed 20 July 2023].'},
  {'id':7,'title':'Cloud',
  'description':'The cloud refers to a network of remote computing resources (networks, servers, storage, applications and services) hosted on the internet, which allows users to store, manage, and access data and applications over the internet rather than on local physical servers or devices. The model is characteristics include on-demand self service, broad network access, resource pooling, rapid elasticity and measure service.',
  'reference':'P. Mell and T. Grance, "The NIST Definition of Cloud Computing," September 2011. [Online]. Available: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf. [Accessed 20 July 2023].'},
  {'id':8,'title':'Data Centre',
  'description':'A data centre is facility that centralises operations and equipment used to store, manage, and process large amounts of data and information for various purposes. They may be enterprise (on premises), managed (by a third party), collocated (owner by a third party but managed by the user) or cloud (distributed across multiple managed sites).',
  'reference':'Palo Alto Networks, "What is a Data Center?," 2023. [Online]. Available: https://www.paloaltonetworks.com/cyberpedia/what-is-a-data-center. [Accessed 20 July 2023].'},
  {'id':9,'title':'Bootstrapping',
  'description':'Bootstrapping refers to the process of setting up and configuring the initial infrastructure and tools required for automated software development, deployment, and operations, often utilising scripts, automation tools, or configuration management systems.',
  'reference':'Amazon Web Services, "Bootstrapping," 2023. [Online]. Available: https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html. [Accessed 20 July 2023].'},
  {'id':10,'title':'Microservices',
  'description':'Microservices refers to a software architecture approach where applications are built as a collection of small, loosely coupled, and independently deployable services, enabling greater agility, scalability, and ease of continuous delivery.',
  'reference':'J. Nemer, "Advantages and Disadvantages of Microservices Architecture," Cloud Academy, 17 July 2023. [Online]. Available: https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/. [Accessed 20 July 2023].'},
  {'id':11,'title':'Enterprise',
  'description':'The term Enterprise refers to large-scale organisations or businesses with complex and diverse IT infrastructures, software systems, and applications. These organisations typically have multiple teams, departments, and projects, and they deal with a high volume of users, transactions, and data. ',
  'reference':'D. Siroky, “What is Enterprise DevOps?,” Plutora, 2022. [Online]. Available: https://www.plutora.com/blog/what-is-enterprise-devops#:~:text=In%20an%20Enterprise%20DevOps%20approach%2C%20your%20operations%20teams%20supply%20a,to%20automate%20deployment%20to%20production.. [Accessed 3 August 2023].'},
  {'id':12,'title':'Automation',
  'description':'Atlassian, “DevOps Automation Tutorials,” 2023. [Online]. Available: https://www.atlassian.com/devops/automation-tutorials#:~:text=DevOps%20is%20a%20set%20of,is%20essential%20to%20DevOps%20success.. [Accessed 3 August 2023], Automation is a fundamental principle that follows the idea of "everything is code" and seeks to "automate everything." It involves using a wide range of tools, scripts, and technologies to replace manual, repetitive tasks in the software development and delivery process. The aim of automation is to streamline and optimise the software development lifecycle, leading to faster releases, enhanced efficiency, and reduced human errors.',
  'reference':'J. Mulder, Enterprise DevOps for Architects : Leveraging AIops and DevSecOps for secure digital transformation, Packt Publishing, 2021. '},
  {'id':13,'title':'Collaboration',
  'description':'Collaboration is the practice of effective communication and teamwork among cross-functional teams to accelerate software delivery. It involves breaking down barriers between development and operations, fostering a culture of shared responsibility, and utilising a common toolset for seamless collaboration and automation. By prioritising collaboration organisations can rapidly achieve reliable software releases and enhance overall efficiency in the development lifecycle.',
  'reference':'J. Mulder, Enterprise DevOps for Architects : Leveraging AIops and DevSecOps for secure digital transformation, Packt Publishing, 2021. '},
  {'id':14,'title':'Integration',
  'description':'Integration is at the core of the practice of bringing together development, operations, and business demands. It involves merging code changes with new functionality driven by user requests and aligning IT delivery with changing business demands. Continuous Integration ensures that development keeps pace with rapid changes, prompting operations to adopt these advancements at a similar speed.',
  'reference':'J. Mulder, Enterprise DevOps for Architects : Leveraging AIops and DevSecOps for secure digital transformation, Packt Publishing, 2021. '},
  {'id':15,'title':'Portfolio and Configuration Management',
  'description':'In DevOps, successful automation and integration depend on a well-defined portfolio of building blocks representing packages of functionality that can be easily automated. These building blocks are part of the Architecture Development Method (ADM) cycle. They should be clearly defined, documented, and managed through configuration management to ensure reusability and replaceability. Well-defined interfaces enable seamless automation of these building blocks, facilitating efficient software development and deployment.',
  'reference':'J. Mulder, Enterprise DevOps for Architects : Leveraging AIops and DevSecOps for secure digital transformation, Packt Publishing, 2021. '},
  {'id':16,'title':'Behaviour Driven Design',
  'description':'Behaviour-Driven Design is an approach that emphasises collaboration among developers, testers, and business stakeholders to define and understand the desired behaviour of software applications. It involves expressing software requirements using natural language and structured formats like Given-When-Then statements to create executable specifications that guide development and testing. It encourages a shared understanding of software behaviour, enabling teams to deliver high-quality software that aligns closely with business needs and expectations.',
  'reference':'M. Krief, Learning DevOps - Second Edition, Packt Publishing, 2022.'},
  {'id':17,'title':'Test-Driven Design',
  'description':'Test-Driven Design is a software development practice that involves writing automated tests before writing the actual code. The process starts with creating a test that defines the expected behaviour of a particular feature or functionality. Developers then write code to fulfill the test requirements, iterating and refining the code until the code passes the define test. This ensures a reliable and predictable development process and promotes code quality.',
  'reference':'M. Krief, Learning DevOps - Second Edition, Packt Publishing, 2022.'},
  {'id':18,'title':'Continuous Integration',
  'description':'Continuous Integration is a software development practice where code changes committed to the source-code repository are automatically and continuously tested against a preset series of tests. These tests may include automated builds, unit, and functional tests. The tests are performed on a separate server and the results are provided to the DevOps teams for fixes and improvements. By reducing the time frame between code commits and CI testing, issues are identified and resolved more quickly.',
  'reference':'M. Krief, Learning DevOps - Second Edition, Packt Publishing, 2022.'},
  {'id':19,'title':'Continuous Delivery',
  'description':'Continuous Delivery involves automatically deploying successfully tested code from the Continuous Integration stage to a staging environment for automated acceptance and performance testing. Human intervention is still required for sign-off on the testing outcomes before releasing the code to the production system. This enables faster and more reliable software delivery, ensuring new features and updates reach end-users efficiently while maintaining high-quality standards.',
  'reference':'M. Krief, Learning DevOps - Second Edition, Packt Publishing, 2022.'},
  {'id':20,'title':'Continuous Deployment',
  'description':'Continuous Deployment an advanced software development practice where code changes that pass the automated tests in the Continuous Delivery stage are automatically deployed to the production environment. By eliminating this manual step automated deployment enables rapid and continuous software releases and reduces the time between code changes and their availability to end-users. This streamlined approach ensures that every successful code change seamlessly and efficiently reaches production, optimising the software delivery cycle.',
  'reference':'M. Krief, Learning DevOps - Second Edition, Packt Publishing, 2022.'}

  
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 DevOps Glossary', 
    subheading: 'Welcome to my website showing a collection of DevOps terms and their brief descriptions.', 
    items: itemList, 
    disclaimer: 'All above terms were also researched through OpenAI ChatGPT so should be considered to have a reference of (Please tell me about [TERM], OpenAI ChatGPT, Private Communication, 20 July 2023) as well'});
});

module.exports = router;
