// Using Fakerjs.dev to create fake data to consume
// 1.- Install npm i @faker-js/faker --save-dev
// 2.- We need to create seed() with faker
// 3.- When database seeded with faker, then we consume it with loader

import { Link, useLoaderData, Outlet, useLocation } from "@remix-run/react";
import { db } from "~/database/db.server";

export const loader = async () => {
  const data = await db.product.findMany({
    select: {
      title: true,
      image: true,
      slug: true,
      id: true,
      price: true,
    },
    take: 15,
  });
  return { data };
};

export default function Practice3() {
  const { data }: any = useLoaderData();

  return (
    <>
      {useLocation().pathname !== "/practica-3/" ? (
        <Outlet />
      ) : (
        <article>
          <h1 style={{ textAlign: "center", fontFamily: "Helvetica", fontSize: "34px" }}>
            {" "}
            Practica vista de lista y vista de detalle
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            {data.map((product: any) => (
              <Link to={`${product.slug}/details`} key={product.id} style={{ width: "200px" }}>
                <img
                  style={{ width: "100%", objectFit: "contain" }}
                  src={product.image[0]}
                  alt="idk"
                ></img>
                <h3>{product.title}</h3>
                <h3>{product.price}</h3>
              </Link>
            ))}
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center", padding: "40px 0" }}
          >
            <button>Past</button>
            <button>Next</button>
          </div>
        </article>
      )}
    </>
  );
}

export const meta = () => [{ title: "Practica 3" }];
