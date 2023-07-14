import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "idk" }, { name: "description", content: "Welcome to Remix!" }];
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
