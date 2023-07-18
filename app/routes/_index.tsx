import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import favIcon from "~/assets/new-logo-kinxori.ico";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home" }, { name: "description", content: "Welcome to Remix!" }];
};

export const links = () => {
  return [
    {
      rel: "icon",
      href: favIcon,
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
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
