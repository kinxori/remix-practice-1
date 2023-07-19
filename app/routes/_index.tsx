import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import favIcon from "~/assets/new-logo-kinxori.ico";
import styles from "~/styles/styles.css";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home" }, { name: "description", content: "Welcome to Remix!" }];
};

export const links = () => {
  return [
    {
      rel: "icon",
      href: favIcon,
    },
    { rel: "stylesheet", href: styles },
  ];
};

export default function Index() {
  return (
    <div className=" font-light underline text-red-500">
      <h1>Welcome, this is my practice road to learn Remix, MongoDB and Prisma</h1>
      <ul>
        <li>
          <Link to="/practica-1" rel="noreferrer">
            Practice 1
          </Link>
        </li>
        <li>
          <Link to="/practica-2" rel="noreferrer">
            Practice 2
          </Link>
        </li>
        <li>
          <Link to="/practica-3" rel="noreferrer">
            Practice 3
          </Link>
        </li>
        <li>
          <Link to="/practica-4" rel="noreferrer">
            Practice 4
          </Link>
        </li>
      </ul>
    </div>
  );
}
