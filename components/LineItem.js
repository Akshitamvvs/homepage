import { useRouter } from "next/router";
import Markdown from "markdown-to-jsx";

function CustomMarkdown({ md_text }) {
  // Parses a markown text and returns React JSX.

  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  // If there are any relative URLs, intercept them and prepend a basePath
  const hrefInterceptor = function ({ children, ...props }) {
    let newHref = props.href;
    if (newHref.startsWith("/")) {
      newHref = getLink(newHref);
    }
    const newProps = {
      ...props,
      href: newHref,
      target: "_blank",
      rel: "noopener noreferrer",
    };
    return <a {...newProps}>{children}</a>;
  };

  return (
    <Markdown
      options={{
        overrides: {
          a: {
            component: hrefInterceptor,
          },
        },
      }}
    >
      {md_text}
    </Markdown>
  );
}

export function LineItem({ item }) {
  const { date, title, extra } = item;
  let extra_content;
  if (extra) {
    extra_content = <CustomMarkdown md_text={extra} />;
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
