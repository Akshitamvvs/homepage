import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <section className="main-section">
        <h1>About</h1>
        <p>
          Hi! My name is Akshita Maradapu Vera Venkata Sai. I'm a 4th year Ph.D.
          student working under the supervision of{" "}
          <a
            href="http://li.csgsu.org/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Yingshu Li
          </a>{" "}
          and{" "}
          <a
            href="http://cai.csgsu.org/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Zhipeng Cai
          </a>{" "}
          in the{" "}
          <a
            href="https://csds.gsu.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Department of Computer Science
          </a>{" "}
          at{" "}
          <a
            href="https://www.gsu.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Georgia State University
          </a>
          . I completed my Masters in Computer Science from Georgia State
          University in 2017, with research focused on VNE and Security and
          Privacy under{" "}
          <a
            href="https://xiaojuncao.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Xiaojun Cao
          </a>{" "}
          and B.Tech from GITAM University, India in 2016. I've been the{" "}
          <a
            href="https://ieee.cs.gsu.edu/officer.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Membership Chair of IEEE Student Chapter
          </a>{" "}
          in GSU since 2018 where I work towards designing strategies to get
          more students involved in CS research and IEEE Society. My area of
          research includes Security and Privacy, Social networks, Mobile Crowd
          Sensing and Edge Systems and Digital Twin Networks. My current
          research focuses on identify privacy issues and devising defense
          mechanisms in Mobile edge systems and Digital Twin Networks.
        </p>
      </section>
      <section className="main-section">
        <h1>Education</h1>
        <ul className="fa-ul">
          <li>
            <FontAwesomeIcon icon={faGraduationCap} listItem />
            <div>
              <b>Ph.D., Computer Science</b>, 2023 (expected)
            </div>
            <div>Georgia State University</div>
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} listItem />
            <div>
              <b>M.S., Computer Science</b>, 2017
            </div>
            <div>Georgia State University</div>
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} listItem />
            <div>
              <b>B.Tech, Computer Science</b>, 2016
            </div>
            <div>GITAM University, India</div>
          </li>
        </ul>
      </section>
      <section className="main-section">
        <h1>Interests</h1>
        <ul className="interests-list">
          <li>Privacy Aware Computing</li>
          <li>Location Based Social Networks</li>
          <li>Mobile Edge Computing</li>
          <li>Mobile Crowd Sourcing Systems</li>
          <li>Digital Twin Networks</li>
          <li>Machine Learning</li>
        </ul>
      </section>
    </div>
  );
}
