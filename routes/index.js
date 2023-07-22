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
  'description':'Agile methodology is an iterative and incremental approach to software development that emphasizes adaptive planning, continuous customer collaboration, and delivering working software in short, frequent iterations.',
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
  'description':'A data centre is facility that centralizes operations and equipment used to store, manage, and process large amounts of data and information for various purposes. They may be enterprise (on premises), managed (by a third party), collocated (owner by a third party but managed by the user) or cloud (distributed across multiple managed sites).',
  'reference':'Palo Alto Networks, "What is a Data Center?," 2023. [Online]. Available: https://www.paloaltonetworks.com/cyberpedia/what-is-a-data-center. [Accessed 20 July 2023].'},
  {'id':9,'title':'Bootstrapping',
  'description':'Bootstrapping refers to the process of setting up and configuring the initial infrastructure and tools required for automated software development, deployment, and operations, often utilizing scripts, automation tools, or configuration management systems.',
  'reference':'Amazon Web Services, "Bootstrapping," 2023. [Online]. Available: https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html. [Accessed 20 July 2023].'},
  {'id':10,'title':'Microservices',
  'description':'Microservices refers to a software architecture approach where applications are built as a collection of small, loosely coupled, and independently deployable services, enabling greater agility, scalability, and ease of continuous delivery.',
  'reference':'J. Nemer, "Advantages and Disadvantages of Microservices Architecture," Cloud Academy, 17 July 2023. [Online]. Available: https://cloudacademy.com/blog/microservices-architecture-challenge-advantage-drawback/. [Accessed 20 July 2023].'}
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
