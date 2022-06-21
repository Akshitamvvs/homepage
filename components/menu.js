import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ENDPOINTS } from "./endpoints";

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
          <Link href={ENDPOINTS.bio}>
            <a
              className={`${
                router.pathname == ENDPOINTS.bio ? activeMenuItemClassName : ""
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
          <Link href={ENDPOINTS.publications}>
            <a
              className={`${
                router.pathname == ENDPOINTS.publications
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
          <Link href={ENDPOINTS.professional}>
            <a
              className={`${
                router.pathname == ENDPOINTS.professional
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
          <Link href={ENDPOINTS.teaching}>
            <a
              className={`${
                router.pathname == ENDPOINTS.teaching
                  ? activeMenuItemClassName
                  : ""
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
          <Link href={ENDPOINTS.cv}>
            <a
              className={`${
                router.pathname == ENDPOINTS.cv ? activeMenuItemClassName : ""
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
          <Link href={ENDPOINTS.contact}>
            <a
              className={`${
                router.pathname == ENDPOINTS.contact
                  ? activeMenuItemClassName
                  : ""
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
