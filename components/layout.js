import { Menu } from "./menu";
import { Header } from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="columns main">
        <div className="sidebar is-narrow">
          <Menu />
        </div>
      </div>
      <div className="column main-content is-flexible">{children}</div>
    </>
  );
}
