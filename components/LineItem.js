import Link from "next/link";
import Markdown from "markdown-to-jsx";

function parseMarkdown(md_text) {
  // Parses a markown text and returns React JSX.
  let html_text = (
    <Markdown
      options={{
        overrides: {
          a: {
            props: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
        },
      }}
    >
      {md_text}
    </Markdown>
  );
  return html_text;
}

export function LineItem({ item }) {
  const { date, title, extra } = item;
  let extra_content;
  if (extra) {
    extra_content = parseMarkdown(extra);
  }

  const season_class = (date) => {
    if (date.match(/present/i)) {
      return "";
    } else if (date.match(/spring/i)) {
      return "spring-time";
    } else if (date.match(/summer/i)) {
      return "summer-time";
    } else if (date.match(/fall/i)) {
      return "fall-time";
    }
    return "";
  };

  return (
    <li className="line-item">
      <p>
        <span className={`tag-label ${season_class(date)}`}>{date}</span>{" "}
        {title} {extra_content}
      </p>
    </li>
  );
}
