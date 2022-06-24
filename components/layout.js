import Head from "next/head";
import { useRouter } from "next/router";
import { Menu } from "./menu";
import { Header } from "./header";

export default function Layout({ children }) {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  const faviconHref = getLink("/favicon.ico");

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href={faviconHref} />
        <title>Akshita MVVS - Homepage</title>
        <meta
          property="og:title"
          content="Homepage of Akshita Maradapu Vera Venkata Sai"
          key="title"
        />
        <meta name="author" content="Nisheeth Bandaru" />
        <meta
          name="description"
          content="Akshita is a PhD student in Computer science from Georgia State University and works in field of privacy and Internet of Things."
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
