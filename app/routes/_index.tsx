import type { V2_MetaFunction } from "@remix-run/node";
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
          <a href="/landing-page" rel="noreferrer">
            Landing Page
          </a>
        </li>
      </ul>
    </div>
  );
}
