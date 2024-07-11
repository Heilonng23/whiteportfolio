import "./App.css"; // Ensure your CSS is imported
// import { FaReact } from "react-icons/fa";
import pfp from "./images/bgpro.png";
import reactsvg from "./images/react.svg";
import nextjssvg from "./images/nextjs.svg";
import tailwindcsssvg from "./images/tailwindcss.svg";
import postgresqlsvg from "./images/postgresql.svg";
import typescriptsvg from "./images/ts.svg";
import nodesvg from "./images/nodejs.svg";
import resumeio from "./images/resumeio.png";
import algorithm from "./images/12algor.png";
import face from "./images/12face.png";
const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="column column-1">
          <div className="box box-1">
            <p
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "0",
                marginTop: "4px",
                padding: "4px",
                marginLeft: "5px",
              }}
            >
              Ibragim Ibragimov
            </p>
            <ul>
              <li>Software Engineer</li>
              <li>+ 1.5 years of experience</li>
              <li>
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://www.freecodecamp.org/certification/heilong/javascript-algorithms-and-data-structures"
                >
                  FreeCodeCamp
                </a>
                ,{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://www.hackerrank.com/certificates/97381ba1ec07"
                >
                  Hackerrank
                </a>
                , and{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://drive.google.com/file/d/1N-DNmsiIqY6k7xNpCGBP62qgqvYNMTiE/view?usp=drive_link"
                >
                  ZTM certified Web Developer
                </a>
              </li>
              <p style={{ marginTop: "0", fontSize: "12px" }}>
                Click to see ⬆️
              </p>
            </ul>
          </div>
          <div className="box box-2">
            <div>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "0",
                  marginTop: "2px",
                  paddingBottom: "0",
                }}
              >
                Tech Stack
              </p>
              <ul className="techstack">
                <li>
                  <img
                    src={reactsvg}
                    alt={reactsvg}
                    style={{ height: "30px", verticalAlign: "middle" }}
                  />
                  React
                </li>
                <li>
                  <img
                    src={nextjssvg}
                    alt={nextjssvg}
                    style={{ height: "30px", verticalAlign: "middle" }}
                  />
                  Next.js
                </li>
                <li>
                  <img
                    src={tailwindcsssvg}
                    alt={tailwindcsssvg}
                    style={{ height: "30px", verticalAlign: "middle" }}
                  />
                  Tailwind CSS
                </li>
                <li>
                  <img
                    src={postgresqlsvg}
                    alt={postgresqlsvg}
                    style={{ height: "30px", verticalAlign: "middle" }}
                  />
                  PostgreSQL
                </li>
                <li>
                  <img
                    src={typescriptsvg}
                    alt={typescriptsvg}
                    style={{ height: "30px", verticalAlign: "middle" }}
                  />
                  TypeScript
                </li>
                <li>
                  <img
                    src={nodesvg}
                    alt={nodesvg}
                    style={{ height: "30px", verticalAlign: "middle" }}
                  />
                  Node.js
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column column-2" style={{ marginTop: "15px" }}>
          <img src={pfp} alt={pfp} className="box box-3" />
        </div>
      </div>
      {/* <div>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div> */}
      <div className="experience">
        <div className="box box-4" style={{ marginTop: "0" }}>
          <p style={{ fontSize: "25px", fontWeight: "600", marginBottom: "0" }}>
            Experience
          </p>
          <div>
            <p style={{ fontSize: "18px", fontWeight: "600" }}>
              Software Engineer
            </p>
            <p style={{ fontSize: "17px", fontWeight: "600", marginTop: "0" }}>
              @Sinus.ge
            </p>
            <p style={{ fontSize: "16px", fontWeight: "600" }}>
              October 2023 - Present
            </p>
            <ul>
              <li>
                Built and maintained web applications using React, Next.js, and
                Tailwind CSS.
              </li>
              <li>
                Designed and supported RESTful APIs with Node.js and Express.js.
              </li>
              <li>Managed and maintained PostgreSQL databases.</li>
              <li>Worked with and improved TypeScript codebases.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: "18px", fontWeight: "600" }}>
              Software Engineer intern
            </p>
            <p style={{ fontSize: "17px", fontWeight: "600", marginTop: "0" }}>
              @PJATK
            </p>
            <p style={{ fontSize: "16px", fontWeight: "600" }}>
              May 2022 - October 2023
            </p>
            <ul>
              <li>
                Developed a project management tool using React for the
                frontend.
              </li>
              <li>
                Created a Java-based RESTful API backend for secure data
                handling.
              </li>
              <li>Used MySQL for efficient data storage and retrieval.</li>
              <li>
                Implemented user authentication with JWT for secure access.
              </li>
              <li>
                Deployed on AWS with CI/CD for automated testing and deployment.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="box box-5">
          <p
            style={{
              fontSize: "25px",
              marginTop: "0",
              fontWeight: "600",
              marginBottom: "6px",
            }}
          >
            Projects
          </p>
          <div className="project">
            <div className="projectdetails">
              <div>
                <p className="projectheader">Resume.io</p>
                <img
                  src={resumeio}
                  alt=""
                  className="projectimage"
                  style={{ maxWidth: "320px", minHeight: "230px" }}
                />
              </div>
              <div className="projectdescription">
                <p className="projecttext">
                  Resumeio is an online resume builder tool that helps you to
                  build a fast and good looking resume in matter of minutes
                  <div className="linksof">
                    <button className="btn">
                      <a
                        href="https://resumeio-delta.vercel.app/"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/Heilonng23/resumeio"
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </button>
                  </div>
                </p>
                <p style={{ marginBottom: "8px" }}>Tech stack</p>
                <ul className="prostack">
                  <li>
                    <img
                      src={reactsvg}
                      alt={reactsvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    React
                  </li>
                  <li>
                    <img
                      src={tailwindcsssvg}
                      alt={tailwindcsssvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    Tailwind CSS
                  </li>
                  <li>
                    <img
                      src={nextjssvg}
                      alt={nextjssvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    Next.js
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectdetails">
              <div>
                <p className="projectheader">Algorithm Visualization</p>
                <img
                  src={algorithm}
                  alt=""
                  className="projectimage"
                  style={{ minWidth: "320px", minHeight: "230px" }}
                />
              </div>
              <div className="projectdescription">
                <p className="projecttext">
                  Algorithm Visualization is a web application that helps you to
                  visualize how bread-first search, depth-first search work.
                  <div className="linksof">
                    <button className="btn">
                      <a
                        href="https://path-finder-algorithm.vercel.app/"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/Heilonng23/Path-finder-Algorithm"
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </button>{" "}
                  </div>
                </p>
                <p style={{ marginBottom: "8px" }}>Tech stack</p>
                <ul className="prostack">
                  <li>
                    <img
                      src={reactsvg}
                      alt={reactsvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    React
                  </li>
                  <li>
                    <img
                      src={tailwindcsssvg}
                      alt={tailwindcsssvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    Tailwind CSS
                  </li>
                  <li>
                    <img
                      src={nextjssvg}
                      alt={nextjssvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    Next.js
                  </li>
                  <li>
                    <img
                      src={typescriptsvg}
                      alt={typescriptsvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    TypeScript
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectdetails">
              <div>
                <p className="projectheader">Face Recognition </p>
                <img
                  src={face}
                  alt=""
                  className="projectimage"
                  style={{ maxWidth: "320px", minHeight: "230px" }}
                />
              </div>
              <div className="projectdescription">
                <p className="projecttext">
                  Face Recognition is a full stack web application that helps
                  you to detect faces in images.
                  <div className="linksof">
                    <button className="btn">
                      <a
                        href="https://github.com/Heilonng23/MatrixMind"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/Heilonng23/MatrixMind"
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </button>{" "}
                  </div>
                </p>
                <p style={{ marginBottom: "8px" }}>Tech stack</p>
                <ul
                  className="prostack"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                  }}
                >
                  <li style={{ marginTop: "6px" }}>
                    <img
                      src={reactsvg}
                      alt={reactsvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    React
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    <img
                      src={tailwindcsssvg}
                      alt={tailwindcsssvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    Tailwind CSS
                  </li>
                  <li>
                    <img
                      src={nodesvg}
                      alt={nodesvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    Node.js
                  </li>
                  <li>
                    <img
                      src={typescriptsvg}
                      alt={typescriptsvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    TypeScript
                  </li>{" "}
                  <li>
                    <img
                      src={postgresqlsvg}
                      alt={postgresqlsvg}
                      style={{ height: "30px", verticalAlign: "middle" }}
                    />
                    PostgreSQL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
