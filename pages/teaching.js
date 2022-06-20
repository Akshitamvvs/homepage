import { LineItem } from "../components/LineItem";

import { TEACHING_ASSISTANT, TEACHING_FELLOW } from "./data/teaching";

export default function Teaching() {
  const ta_list = TEACHING_ASSISTANT.map((ta, idx) => (
    <LineItem key={idx} item={ta} />
  ));
  const tf_list = TEACHING_FELLOW.map((tf, idx) => (
    <LineItem key={idx} item={tf} />
  ));
  return (
    <div>
      <section className="main-section">
        <h1>Teaching Fellow</h1>
        <ul>{tf_list}</ul>
      </section>
      <section className="main-section">
        <h1>Teaching Assistant</h1>
        <ul>{ta_list}</ul>
      </section>
    </div>
  );
}
