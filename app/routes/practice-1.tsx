import { useActionData, useLoaderData } from "@remix-run/react";
import favIcon from "~/assets/new-logo-kinxori.ico";

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

// Cliente component

export default function LandingPage() {
  const dataLoader = useLoaderData();
  const formDataAction = useActionData();
  return (
    <article className="w-[80%] mx-auto my-10 ">
      <div>
        <h1 className="font-bold text-[54px] font-[rubik] ">Hey there!</h1>
        <h3 className="font-bold text-[16px] font-[rubik]   ">Practice 1</h3>
        <br></br>
        <br></br>
        <p>In this page we can take a look to the basic structure of a Remix route.</p>
        <br></br>
        <p>There a 5 main functions to have a good Remix route.</p>
        <br></br>
      </div>

      <div>
        <h3 className="font-bold text-[16px] font-[rubik]   ">The main component:</h3>
        <p>
          Here we have the main component which is the function exported as default where display
          our JSX.
        </p>

        {/* <code>
          export default function YourPage(){
            return (
              <div>
                <h1>Hello World!</h1>
              </div>
            )
          }
        </code> */}
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
    </article>
  );
}

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
