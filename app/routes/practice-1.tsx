import { Link, useActionData, useLoaderData } from "@remix-run/react";
import favIcon from "~/assets/new-logo-kinxori.ico";
import SyntaxHighlighter from "react-syntax-highlighter";

const snippet1 = ` 
  Hello there!
`;

// Loader to consume API

export const loader = async () => {
  const data = await (await fetch("https://rickandmortyapi.com/api/character/")).json();
  return null;
};

// Action to recieve data from Form

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  console.log("data ", formData.get("email"));
  return null;
};

// Metas for route page

export const meta = () => {
  return [
    {
      title: "Practica 1",
    },
  ];
};

// Links for route page

export const links = () => {
  return [
    {
      rel: "icon",
      href: favIcon,
    },
  ];
};

// Cliente component

export default function LandingPage() {
  const dataLoader = useLoaderData();
  const formDataAction = useActionData();
  return (
    <article className="w-[80%] mx-auto my-10 ">
      <div className="flex flex-col     ">
        <h1 className="font-bold text-[54px] font-[rubik] ">Hey there!</h1>
        <h3 className="font-bold text-[16px] font-[rubik]   ">Practice 1</h3>
        <Link to="/" className="ml-auto  ">
          <button className=" px-4 py-1  bg-gray-200 rounded-[10px] my-3">Go Back</button>
        </Link>
        <p>In this page we can take a look to the basic structure of a Remix route.</p>

        <p>There a 5 main functions to have a good Remix route.</p>
      </div>
      <div>
        <h3 className="font-bold text-[16px] font-[rubik]   ">The main component:</h3>
        <p>
          Here we have the main component which is the function exported as default where display
          our JSX.
        </p>
      </div>
      <SyntaxHighlighter language="text">{snippet1}</SyntaxHighlighter>
      <form method="post">
        <label>
          Email
          <input type="email" name="email" placeholder="email"></input>
        </label>
        <label>
          Password
          <input type="text" name="password" placeholder="password"></input>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </article>
  );
}
