import { useActionData, useLoaderData } from "@remix-run/react";
import styles from "~/styles/styles.css";

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
      title: "Landing Page",
    },
  ];
};

// Links for route page

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

// Cliente component

export default function LandingPage() {
  const dataLoader = useLoaderData();
  const formDataAction = useActionData();
  return (
    <article>
      <h1>Hola mundo</h1>
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
