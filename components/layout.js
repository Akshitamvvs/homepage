import Head from "next/head";
import { Menu } from "./menu";
import { Header } from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Akshita MVVS - Homepage</title>
        <meta
          property="og:title"
          content="Homepage of Akshita Maradapu Vera Venkata Sai"
          key="title"
        />
      </Head>
      <Header />
      <div className="columns main">
        <div className="sidebar is-narrow">
          <Menu />
        </div>
        <div className="column main-content is-flexible">{children}</div>
      </div>
    </>
  );
}
