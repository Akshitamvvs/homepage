import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  let activeMenuItemClassName = "is-active-menu-item";
  return (
    <section className="menu">
      <a
        role="button"
        className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <ul
        className={`menu-list ${!isMenuOpen ? "is-hidden-mobile" : ""}`}
        id="navMenu"
      >
        <li>
          <Link href="/">
            <a
              className={`${
                router.pathname == "/" ? activeMenuItemClassName : ""
              }`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              Bio
            </a>
          </Link>
        </li>
        <li>
          <Link href="/publications">
            <a
              className={`${
                router.pathname == "/publications"
                  ? activeMenuItemClassName
                  : ""
              }`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              Publications
            </a>
          </Link>
        </li>
        <li>
          <Link href="/professional">
            <a
              className={`${
                router.pathname == "/professional"
                  ? activeMenuItemClassName
                  : ""
              }`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              Professional Activities
            </a>
          </Link>
        </li>
        <li>
          <Link href="/teaching">
            <a
              className={`${
                router.pathname == "/teaching" ? activeMenuItemClassName : ""
              }`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              Teaching
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cv">
            <a
              className={`${
                router.pathname == "/cv" ? activeMenuItemClassName : ""
              }`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              CV
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              className={`${
                router.pathname == "/contact" ? activeMenuItemClassName : ""
              }`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
