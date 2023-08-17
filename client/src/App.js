import profile from './profile.jpg';
import './styles.css';

function App() {
  return (
    <div>
      {/* <!-- Navigation--> */}
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Sayantan Kundu</span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profile}
              alt="..."
            />
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#workhistory">
                Work History
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- Page Content--> */}
      <div class="container-fluid p-0">
        {/* <!-- About--> */}
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Sayantan
              <span class="text-primary">Kundu</span>
            </h1>
            <div class="subheading mb-5">
              38, Hunt Club Drive · Collegeville, PA 19426 · (610) 787-4040 ·
              <a href="mailto:name@email.com">sayantan.kundu@temple.edu</a>
            </div>
            <p class="lead mb-5">
              Results-driven Technology Analyst with 4.5 years of experience in
              financial application development using NodeJS and Loopback.
              Proficient in Tensorlfow and Python for deep learning. Skilled in
              analyzing complex requirements, designing scalable solutions, and
              delivering high-quality software. Collaborative team player with
              expertise in agile methodologies and effective communication.
              Committed to continuous improvement and client satisfaction
              through innovative solutions and staying updated with the latest
              technologies.
            </p>
            <div class="social-icons">
              <a
                class="social-icon"
                href="https://www.linkedin.com/in/sayantan-kundu-sk1611/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/sayantan16">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://www.npmjs.com/~sayantan16">
                <i class="fab fa-npm"></i>
              </a>
              <a
                class="social-icon"
                href="https://www.facebook.com/sayantan.kundu.7/"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Work History--> */}
        <section class="resume-section" id="workhistory">
          <div class="resume-section-content">
            <h2 class="mb-5 text-primary">Work History</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Technology Analyst</h3>
                <div class="subheading mb-3">Infosys Ltd., Bengaluru</div>
                <p>1. Project - Finacle Banking Solutions</p>
                <p>
                  2. Designed views that display financial data, such as account
                  balances, transaction history, charts, and reports for
                  different user groups.
                </p>
                <p>
                  3. Defined controllers that receive user input as form
                  submissions, and process it accordingly to initiate
                  transactions under a master application.
                </p>
                <p>
                  4. Implemented authentication and authorization, ensuring that
                  only authorized users can access sensitive information or
                  perform specific actions.
                </p>
                <p>
                  5. Exposed endpoints that provide financial data, such as
                  account balances, transaction history, investment portfolios,
                  and market data. These endpoints can be consumed by different
                  clients or even other services within other applications that
                  provide proper credentials.
                </p>
                <p>
                  6. Used to build integration endpoints that communicate with
                  payment gateways, banking APIs, or market data providers as
                  external systems and retrieve or update data as needed.
                </p>
                <p>
                  7. Created authentication mechanisms like token-based
                  authentication or OAuth to secure access to your API
                  endpoints.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">October 2021 — July 2022</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Senior Systems Engineer</h3>
                <div class="subheading mb-3">Infosys Ltd., Bengaluru</div>
                <p>1. Project - Finacle Banking Solutions</p>
                <p>
                  2. Started to create web pages for the application interface
                  for an end user trying to initiate NEFT & RTGS. There were
                  payment initiation screens created using HTML5 & CSS.
                </p>
                <p>
                  3. After the basic structure of the initiation screens, the
                  request API was controlled using ReactJs, making the payment
                  initiation screen dynamic.
                </p>
                <p>
                  4. Developed and designed and flow for the 24*7 architecture
                  of IMPS and added it as a standalone application under the
                  Finacle Payment System.
                </p>
                <p>
                  5. Worked on refactoring the application to handle all
                  different micro-services to accumulate the bank servicing
                  parameters and maintenance of accounts and IFSC of a bank and
                  to use it with the processing of the main application
                  properly, have been kept by the Law of Demeter (The Principle
                  of Least Knowledge) for the refactoring.
                </p>
                <p>
                  6. Worked on creating a Decision Engine for different
                  scenarios of a Payment cycle. The failure scenarios and
                  blocking conditions are being handled to reduce the wait time
                  of a particular Payment life cycle.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">October 2020 — September 2021</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Systems Engineer</h3>
                <div class="subheading mb-3">Infosys Ltd., Bengaluru</div>
                <p>1. Project - Finacle Banking Solutions</p>
                <p>
                  2. Worked on creating a standalone micro-service to handle the
                  different message transformations (XML, Tag, etc to JSON) in
                  the Payment System.
                </p>
                <p>
                  3. Worked on creating a fully functioning micro-service to
                  generate and maintain the Mandates of a Payment Service using
                  the Finacle Core Banking App and the Message Handling
                  micro-service using REST services.
                </p>
                <p>
                  4. Extensively used the Loopback Framework by IBM to provide
                  and generate the REST services for the connectivity of the
                  micro-services.
                </p>
                <p>
                  5. Used and implemented the node-red flow services to
                  organize, maintain and create scalable code structure for
                  faster development of payment services as and when required.
                </p>
                <p>
                  6. Used the RabbitMq Message Queuing Service for the smooth
                  transfer of data as most Banking Application requires 0 loss
                  of data in the network.
                </p>
                <p>
                  7. Co-developed the Indian Payment Service for NEFT & RTGS
                  using the functional requirements from the RBI and used the
                  MongoDB for development of the backend.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">
                  September 2018 — September 2020
                </span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Junior Developer</h3>
                <div class="subheading mb-3">Infosys Ltd., Mysore</div>
                <p>
                  1. Trained under the Infosys Training Center, Mysore.
                  Completing the 1st leg of the course by learning Python and
                  OOPS.
                </p>
                <p>
                  2. Trained in Java standalone application, Springboot, and
                  Oracle SQL Server.
                </p>
                <p>
                  3. Trained in HTML, CSS, and AngularJs to make a UI for the
                  application created in Java.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2018 — September 2018</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Data QA Analyst</h3>
                <div class="subheading mb-3">eClerx Services, Pune</div>
                <p>
                  1. Worked in cleaning and scanning high-performance and
                  extensive data in the travel industry to create dynamic
                  pricing for all days across the world to keep client company
                  with competitive pricing using VB script.
                </p>
                <p>
                  2. Worked on creating a web crawler to fetch pricing data from
                  various websites and comparing it with the client's data set
                  to find standard deviation and creating an automated update
                  and renewal system in the website using Python scripting and
                  the use of XML tags.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">November 2016 — March 2018</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Education--> */}
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5 text-primary">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Temple University</h3>
                <div class="subheading mb-3">Master of Science(MS)</div>
                <div>Computer Science</div>
                <p>GPA: 3.17</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2022 - May 2024</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">
                  West Bengal University of Technology (aka. MAKAUT)
                </h3>
                <div class="subheading mb-3">
                  Bachelor of Technology (BTECH)
                </div>
                <div>Electronics and Communication Engineering</div>
                <p>GPA: 3.33</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2012 - May 2016</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Skills--> */}
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5 text-primary">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-group dev-icons">
              <li class="list-group-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-angular"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-node-js"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-sass"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-less"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-wordpress"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-gulp"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-grunt"></i>
              </li>
              <li class="list-group-item">
                <i class="fab fa-npm"></i>
              </li>
            </ul>
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Functional Teams
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Agile Development & Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Experience--> */}
        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5 text-primary">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Graduate Teaching Assistant</h3>
                <div class="subheading mb-3">
                  Temple University, Philadelphia
                </div>
                <p>
                  1. Worked as a Teaching Assistant for an undergraduate course
                  - CIS 5331 under Prof. Cindy Li in the Department of Computer
                  and Information Science.
                </p>
                <p>
                  2. Conducted Lab for Oracle SQL server with a final project
                  with a presentation from the students where they created the
                  whole database where they got to use the end-to-end design to
                  implementation process from ER to Relational diagrams and then
                  implementation.
                </p>
                <p>
                  3. Experience with conducting student discussions and query
                  clearance as part of the TA office.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">January 2023 — May 2023</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Student Worker</h3>
                <div class="subheading mb-3">
                  Dept. of EHSA, Temple University, Philadelphia
                </div>
                <p>
                  1. Worked extensively on MS Excel for the department of EHSA
                  for the chemical inventory migration.
                </p>
                <p>
                  2. Created a dashboard with raw data for housing radiation
                  testing which is being used by the healthcare facilities.
                </p>
                <p>
                  3. Migrated database set in local machines using Maria DB to
                  create a local copy for office purposes.
                </p>
                <p>
                  4. Created a VB script macro for ease of work for various
                  manual works done in the office.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">October 2022 — Current</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Projects--> */}
        <section class="resume-section" id="projects">
          <div class="resume-section-content">
            <h2 class="mb-5 text-primary">Projects & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Google Analytics Certified Developer
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Mobile Web Specialist - Google Certification
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2009
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Adobe Creative Jam 2008
                (UI Design Category)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                2<sup>nd</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2008
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - James Buchanan High School - Hackathon 2006
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;