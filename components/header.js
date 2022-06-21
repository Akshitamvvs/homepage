import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";

import profilePic from "../public/images/profile.jpeg";

export function Header() {
  return (
    <section className="section header">
      <figure className="image profile-photo">
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={128}
          height={128}
          className="is-rounded"
        />
      </figure>
      <Link href="/">
        <a>
          <h1>
            <span className="firstname">Akshita </span>
            <span className="surname">Maradapu Vera Venkata Sai</span>
          </h1>
        </a>
      </Link>
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
