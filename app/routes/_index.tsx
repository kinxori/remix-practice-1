import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import favIcon from "~/assets/new-logo-kinxori.ico";
import StaticCard from "~/components/static-card";

export default function Index() {
  return (
    <article className="w-[80%] mx-auto my-10 font-[rubik]    ">
      <h1 className="font-bold text-[34px]">Welcome!</h1>
      <p className="text-[20px] font-sans leading-5 ">
        In this page you can see my roadmap to become a full-stack developer
      </p>
      <div>
        <StaticCard title="Practice 1" to="/practica-1">
          idk
        </StaticCard>
        <ul>
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
    </article>
  );
}

export const links = () => {
  return [
    {
      rel: "icon",
      href: favIcon,
    },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home" }, { name: "description", content: "Welcome to Remix!" }];
};
