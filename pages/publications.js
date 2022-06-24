import { useRouter } from "next/router";
import { PUBLICATION_DATA } from "../data/publications";

function PublicationItem({ publication_details }) {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  const DEFAULT_UNDERLINE = "A. M. V. V. Sai";

  let {
    journal_short,
    journal_long,
    authors,
    underline,
    title,
    date,
    page,
    doi,
    journal_href,
    pdf,
  } = publication_details;

  const self_author = underline ? underline : DEFAULT_UNDERLINE;
  const [authors_left, authors_right] = authors.split(self_author);

  let DOI, PDF;

  if (doi) {
    const doi_url = "https://doi.org/" + doi;
    DOI = (
      <a
        className="paper-btn doi"
        href={doi_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        DOI
      </a>
    );
  }

  // Parse and modify relative urls for PDFs, if applicable
  if (pdf) {
    if (pdf.startsWith("/")) pdf = getLink(pdf);

    PDF = (
      <a
        className="paper-btn pdf"
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        PDF
      </a>
    );
  }

  // Use Journal Href if available. If not, default to pdf url
  journal_href = journal_href ? journal_href : pdf;

  return (
    <li>
      <p className="pub-item">
        <span className="journal-prefix">[{journal_short}]</span> {authors_left}
        <span className="author-underline">{self_author}</span>
        {authors_right},{" "}
        <a
          className="paper-title"
          href={journal_href}
          target="_blank"
          rel="noopener noreferrer"
        >
          "{title}"
        </a>
        , <span className="journal-title">{journal_long}</span>, {date}, {page}{" "}
        {DOI}
        {PDF}
      </p>
    </li>
  );
}

export default function Publications() {
  const publicationList = PUBLICATION_DATA.map((p, idx) => (
    <PublicationItem key={idx} publication_details={p} />
  ));

  return (
    <section className="main-section">
      <h1>Publications</h1>
      <ol>{publicationList}</ol>
    </section>
  );
}
