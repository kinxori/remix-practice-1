import type { V2_MetaFunction } from "@remix-run/node";
import favIcon from "~/assets/new-logo-kinxori.ico";
import StaticCard from "~/components/static-card";

export default function Index() {
  return (
    <article className="w-[80%] mx-auto text-white">
      <div className="text-[16px] text-justify font-[inter] leading-[20px] flex flex-col gap-5 mt-[40%] ">
        <h1 className="font-bold text-[54px] leading-none font-[rubik] mb-5 ">Welcome!</h1>
        <p>
          In this page you can see the practices and the learn path I took to study full-stack
          developer.
        </p>
        <p> Technologies used: </p>
        <ul className="list-disc pl-8  ">
          <li>Remix</li>
          <li>MongoDB</li>
          <li>Prisma</li>
          <li>React</li>
          <li>Node</li>
          <li>Netlify</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className="mt-10 mb-[30%]  flex flex-col gap-4    ">
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
        <StaticCard title="Practice 5" to="/practice-5">
          Still working...
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
