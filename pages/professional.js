import { LineItem } from "../components/LineItem";
import {
  RESEARCH_ASSISTANT,
  PROFESSIONAL_ACTIVITIES,
} from "./data/professional";

export default function ProfessionalActivities() {
  const ra_list = RESEARCH_ASSISTANT.map((ra, idx) => (
    <LineItem key={idx} item={ra} />
  ));
  const pa_list = PROFESSIONAL_ACTIVITIES.map((pa, idx) => (
    <LineItem key={idx} item={pa} />
  ));
  return (
    <div>
      <section className="main-section">
        <h1>Research Assistant</h1>
        <ul>{ra_list}</ul>
      </section>
      <section className="main-section">
        <h1>Professional Activities</h1>
        <ul>{pa_list}</ul>
      </section>
    </div>
  );
}
