import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import favIcon from "~/assets/new-logo-kinxori.ico";
import StaticCard from "~/components/static-card";

export default function Index() {
  return (
    <article className="w-[80%] mx-auto my-10 font-[rubik]    ">
      <h1 className="font-bold text-[34px]">Welcome!</h1>
      <p className="text-[20px] font-sans leading-6 ">
        In this page you can see the practices and the learn path I took to become a full-stack
        developer
      </p>
      <div className="my-10 flex flex-col gap-4    ">
        <StaticCard title="Practice 1" to="/practica-1">
          Reviewing the basic stuff a Remix route must have. Talking from "loader, action, meta,
          links" functions to the component itself.
        </StaticCard>
        <StaticCard title="Practice 2" to="/practica-2">
          idk
        </StaticCard>
        <StaticCard title="Practice 3" to="/practica-3">
          idk
        </StaticCard>
        <StaticCard title="Practice 4" to="/practica-4">
          idk
        </StaticCard>
        <StaticCard title="Practice 5" to="/practica-5">
          idk
        </StaticCard>
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
