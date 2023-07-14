import { useActionData, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const data = await (await fetch("https://rickandmortyapi.com/api/character/")).json();
  return null;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  console.log("data ", formData.get("email"));
  return null;
};

export default function LandingPage() {
  const dataLoader = useLoaderData();
  const formDataAction = useActionData();
  return (
    <article>
      <div>Hola mundo</div>
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
