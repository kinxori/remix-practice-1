// Using Fakerjs.dev to create fake data to consume
// 1.- Install npm i @faker-js/faker --save-dev
// 2.- We need to create seed() with faker
// 3.- When database seeded with faker, then we consume it with loader

import { db } from "~/database/db.server";
import { useLoaderData } from "react-router";

export const loader = async () => {
  const data = await db.product.findMany();
  return { data };
};

export default function Practice3() {
  const { data }: any = useLoaderData();

  return (
    <article>
      <h1> Practica vista de lista y vista de detalle</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {data.map((product: any) => (
          <div key={product.id} style={{ width: "200px" }}>
            <img
              style={{ width: "100%", objectFit: "contain" }}
              src={product.image[0]}
              alt="idk"
            ></img>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
          </div>
        ))}
      </div>
    </article>
  );
}

export const meta = () => [{ title: "Practica 3" }];
