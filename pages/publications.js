import { PUBLICATION_DATA } from "./data/publications";

function PublicationItem({ publication_details }) {
  const {
    journal_short,
    journal_long,
    authors,
    underline,
    title,
    date,
    page,
    doi,
    pdf,
  } = publication_details;

  const self_author = underline;
  const [authors_left, authors_right] = authors.split(self_author);

  let doi_url;
  if (doi) {
    doi_url = "https://doi.org/" + doi;
  }

  return (
    <li>
      <p className="pub-item">
        <span className="journal-prefix">[{journal_short}]</span> {authors_left}
        <span className="author-underline">{self_author}</span>
        {authors_right},{" "}
        <a
          className="paper-title"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          "{title}"
        </a>
        , <span className="journal-title">{journal_long}</span>, {date}, {page}{" "}
        <a
          className="paper-btn doi"
          href={doi_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          DOI
        </a>
        <a
          className="paper-btn pdf"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF
        </a>
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
