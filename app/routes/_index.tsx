import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import favIcon from "~/assets/new-logo-kinxori.ico";
import StaticCard from "~/components/static-card";

export default function Index() {
  return (
    <article className="w-[80%] mx-auto my-10 font-[rubik]    ">
      <div className="text-[20px] font-sans leading-6 ">
        <h1 className="font-bold text-[54px]">Welcome!</h1>
        <br></br>
        <br></br>
        <p className=" text-justify ">
          In this page you can see the practices and the learn path I took to study full-stack
          developer.
        </p>
        <br></br>
        <p className=" "> Technologies used: </p>
        <br></br>
        <ul className="list-disc pl-8 ">
          <li>Remix</li>
          <li>MongoDB</li>
          <li>Prisma</li>
          <li>React</li>
          <li>Node</li>
          <li>Netlify</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className="my-10 flex flex-col gap-4    ">
        <StaticCard title="Practice 1" to="/practice-1">
          Reviewing the basic stuff a Remix route must have. Talking from "loader, action, meta,
          links" functions to the component itself.
        </StaticCard>
        <StaticCard title="Practice 2" to="/practice-2">
          Creating a MongoDB project, creating a Prisma scheme and connecting both to Remix to
          retrieve and fetch the database.
        </StaticCard>
        <StaticCard title="Practice 3" to="/practice-3">
          Implementing Faker.js to seed my MongoDB with random products. Creating the List View and
          a dynamic route for the Detail View of each product loaded.
        </StaticCard>
        <StaticCard title="Practice 4" to="/practice-4">
          Practicing React hooks such as "useState, useEffect, useRef & useMemo".
        </StaticCard>
        {/* <StaticCard title="Practice 5" to="/practica-5">
          Still working...
        </StaticCard> */}
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
