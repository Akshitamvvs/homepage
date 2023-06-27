import { LineItem } from "../components/LineItem";

import { INSTRUCTOR, TEACHING_ASSISTANT, TEACHING_FELLOW } from "../data/teaching";

export default function Teaching() {
  const inst_list = INSTRUCTOR.map((inst, idx)=>(
    <LineItem key={idx} item={inst} />
  ));
  const ta_list = TEACHING_ASSISTANT.map((ta, idx) => (
    <LineItem key={idx} item={ta} />
  ));
  const tf_list = TEACHING_FELLOW.map((tf, idx) => (
    <LineItem key={idx} item={tf} />
  ));
  return (
    <div>
      <section className="main-section">
        <h1>Instructor of Record @ Towson</h1>
        <ul>{inst_list}</ul>
      </section>
      <section className="main-section">
        <h1>Teaching Fellow @ GSU</h1>
        <ul>{tf_list}</ul>
      </section>
      <section className="main-section">
        <h1>Teaching Assistant @ GSU</h1>
        <ul>{ta_list}</ul>
      </section>
    </div>
  );
}
