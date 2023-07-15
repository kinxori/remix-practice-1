// import { PrismaClient, Product } from "@prisma/client";
import { Product } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/database/db.server";
//This sends data to database remix1
//  This is a writer query

// export const loader = async () => {
//   const prisma = await new PrismaClient();
//   await prisma.product.create({
//     data: { title: "My first data of product collection", slug: "Unique Slug" },
//   });
//   return null;
// };

// This consumes data from  database remix1 (Not recomended for development)
//  This is a read query

// export const loader = async () => {
//   const prisma = await new PrismaClient();
//   const data = await prisma.product.findMany();
//   return { data };
// };

export const loader = async () => {
  const data = await db.product.findMany();
  return { data };
};

// This is the client

export default function Mongodb() {
  const { data } = useLoaderData<{ data: Product[] }>();

  return (
    <article>
      <div>This page controls mongo database</div>
      <div>This is the database consumed</div>
      {data.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </article>
  );
}

export const meta = () => {
  return [
    {
      title: "Practica 2",
    },
  ];
};
