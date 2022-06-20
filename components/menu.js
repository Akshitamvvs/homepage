import Link from "next/link";
import { useState } from "react";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link
            href="/"
            className={({ isActive }) =>
              isActive ? activeMenuItemClassName : undefined
            }
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a>Bio</a>
          </Link>
        </li>
        <li>
          <Link
            href="/publications"
            className={({ isActive }) =>
              isActive ? activeMenuItemClassName : undefined
            }
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a>Publications</a>
          </Link>
        </li>
        <li>
          <Link
            href="/professional"
            className={({ isActive }) =>
              isActive ? activeMenuItemClassName : undefined
            }
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a>Professional Activities</a>
          </Link>
        </li>
        <li>
          <Link
            href="/teaching"
            className={({ isActive }) =>
              isActive ? activeMenuItemClassName : undefined
            }
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a>Teaching</a>
          </Link>
        </li>
        <li>
          <Link
            href="/cv"
            className={({ isActive }) =>
              isActive ? activeMenuItemClassName : undefined
            }
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a>CV</a>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={({ isActive }) =>
              isActive ? activeMenuItemClassName : undefined
            }
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
