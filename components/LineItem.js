export function LineItem({ item }) {
  const { date, title, ext } = item;

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
        {title} {ext !== undefined ? ext : ""}
      </p>
    </li>
  );
}
