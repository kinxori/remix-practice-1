import { Link, useActionData, useLoaderData } from "@remix-run/react";
import favIcon from "~/assets/new-logo-kinxori.ico";
import SyntaxHighlighter from "react-syntax-highlighter";

const snippetLinkFunction = ` 
  // You have to import your file first

  import favIcon from "~/assets/new-logo-kinxori.ico";

  export const links = () => {
    return [
      {
        rel: "icon",
        href: favIcon,
      },
    ];
  };
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
      title: "Practice 1",
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
    <article className="w-[80%] mx-auto my-10 text-white ">
      <div className="flex flex-col ">
        <h1 className="font-bold text-[54px] font-[rubik] underline ">Hey there!</h1>
        <h3 className="font-bold text-[20px] font-[rubik] ">Practice 1</h3>
        <Link to="/" className="ml-auto">
          <button className="px-4 py-1 bg-gray-200 text-black rounded-[10px] my-3">Go Back</button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 my-10">
        <div className="flex flex-col gap-3">
          <p>In this page we can take a look to the basic structure of a Remix route.</p>
          <p>There are 5 main parts to have a complete Remix route.</p>
          <p>Let's break it down:</p>
          <ul className="list-disc pl-8  ">
            <li>Link Function</li>
            <li>Meta Function</li>
            <li>Loader Function</li>
            <li>Action Function</li>
            <li>Component Function</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[20px] font-[rubik] ">Link Function</h3>
          <p>
            This is something like our traditional HTML Link tag, but in Remix we use is as a
            function. The purpose of this is to have a dynamic Array of Links for each route.
          </p>
          <p>This is how your Link function should look like:</p>
          <div className="rounded-[10px] my-5 overflow-hidden drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] border-white border-[2px]   ">
            <div className="w-[100%] h-[30px] bg-white flex items-center pl-[10px]   ">
              <i className="text-black  ">Link function</i>
            </div>
            <hr className="border-black border-[2px]"></hr>
            <SyntaxHighlighter
              language="text"
              customStyle={{ background: "black", color: "white" }}
              showLineNumbers
            >
              {snippetLinkFunction}
            </SyntaxHighlighter>
          </div>
        </div>
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
      </div>
    </article>
  );
}
