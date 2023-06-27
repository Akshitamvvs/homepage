// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ENDPOINTS } from "./endpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// import profilePic from "../public/images/profile.jpeg";

export function Header() {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  return (
    <section className="section header">
      <figure className="image is-128x128 profile-photo">
        <img
          src={getLink("/images/profile.jpg")}
          alt="Profile Picture"
          width={128}
          height={128}
          className="is-rounded"
        />
      </figure>
      <Link href={ENDPOINTS.bio}>
        <a>
          <h1>
            <span className="firstname">Akshita </span>
            <span className="surname">Maradapu Vera Venkata Sai</span>
          </h1>
        </a>
      </Link>
      <h2>Assistant Professor, Department of Computer and Infromation Sciences</h2>

      <h3>
        <a
          href="https://csds.gsu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Towson University
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
