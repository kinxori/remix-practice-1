// Using Fakerjs.dev to create fake data to consume
// 1.- Install npm i @faker-js/faker --save-dev
// 2.- We need to create seed() with faker
// 3.- When database seeded with faker, then we consume it with loader

import { Link, useLoaderData, Outlet, useLocation } from "@remix-run/react";
import { useState } from "react";
import { db } from "~/database/db.server";
import favIcon from "~/assets/new-logo-kinxori.ico";

export const loader = async () => {
  const data = await db.product.findMany({
    select: {
      //This is having some errors with "price", it saying it doesnt exist even tho it loades the value
      title: true,
      image: true,
      slug: true,
      id: true,
      price: true,
    },
    take: 500, // Commented to consume all data
  });
  return { data };
};

export default function Practice3() {
  const { data }: any = useLoaderData();
  const [min, setMin] = useState(15);
  const [max, setMax] = useState(30);

  const handlePastPage = () => {
    if (min >= 15) {
      setMin(min - 15);
      setMax(max - 15);
    } else {
      setMin(min);
      setMax(max);
    }
  };

  const handleNextPage = () => {
    if (max >= 15) {
      setMax(max + 15);
      setMin(min + 15);
    } else if (max >= 500) {
      setMax(max);
      setMin(min);
    }
  };

  return (
    <>
      {useLocation().pathname !== "/practica-3" ? (
        <Outlet />
      ) : (
        <article style={{ fontFamily: "Helvetica", width: "80%", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              padding: "40px 0",
            }}
          >
            Practica vista de lista y vista de detalle
          </h2>
          <Link to="/">Go Back</Link>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              paddingTop: "30px",
            }}
          >
            {data.slice(min, max).map((product: any) => (
              <Link
                to={`${product.slug}/details`}
                key={product.id}
                style={{ width: "200px", textDecoration: "none", color: "inherit" }}
              >
                <img
                  style={{ width: "100%", objectFit: "contain", borderRadius: "10px" }}
                  src={product.image[0]}
                  alt="idk"
                ></img>
                <h3>{product.title}</h3>
                <h3>${product.price}</h3>
              </Link>
            ))}
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center", padding: "40px 0" }}
          >
            <button
              style={{
                border: "none",
                padding: "15px 25px",
                borderRadius: "25px 0px 0px 25px",
                fontSize: "20px",
                margin: 0,
              }}
              onClick={handlePastPage}
            >
              Past
            </button>
            <hr style={{ margin: 0 }}></hr>
            <button
              style={{
                border: "none",
                padding: "15px 25px",
                borderRadius: "0px 25px 25px 0px",
                fontSize: "20px",
                margin: 0,
              }}
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </article>
      )}
    </>
  );
}

export const meta = () => [{ title: "Practica 3" }];

export const links = () => {
  return [{ rel: "icon", href: favIcon }];
};
