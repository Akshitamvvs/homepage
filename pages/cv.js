import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDown,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";

export default function CV() {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  return (
    <section className="main-section">
      <h1>CV</h1>
      <p>
        <a
          className="download-btn"
          href={getLink("/docs/cv.pdf")}
          download="Akshita_MVVS_CV.pdf"
        >
          <FontAwesomeIcon icon={faCircleDown} /> Download
        </a>
        <a
          href={getLink("/docs/cv.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faShareFromSquare} /> Open in a new tab
        </a>
      </p>
      <div className="cv-embed">
        <object
          data={getLink("/docs/cv.pdf")}
          type="application/pdf"
          width="80%"
          height="700px"
          className="is-hidden-mobile"
        >
          CV
        </object>
      </div>
    </section>
  );
}
