import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";

export function Header() {
  return (
    <section className="section header">
      <figure className="image is-128x128 profile-photo">
        <img
          className="is-rounded"
          src={require("../public/images/profile.jpeg")}
          alt=""
        />
      </figure>
      <a href="https://akshitamvvs.github.io/homepage/">
        {" "}
        <h1>
          <span className="firstname">Akshita </span>
          <span className="surname">Maradapu Vera Venkata Sai</span>
        </h1>
      </a>
      <h2>Ph.D Student in Computer Science</h2>

      <h3>
        <a
          href="https://csds.gsu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Georgia State University
        </a>
      </h3>
      <p>
        <a
          className="contact-icon"
          href="mailto:amaradapuveravenkat1@student.gsu.edu"
        >
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          amaradapuveravenkat1@student.gsu.edu
        </a>
      </p>
      <p>
        <a
          className="contact-icon"
          href="https://scholar.google.com/citations?user=3VgA5igAAAAJ&hl=en&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGoogle} /> Scholar
        </a>
        <a
          className="contact-icon"
          href="https://www.linkedin.com/in/akshitamvvs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </p>
    </section>
  );
}
