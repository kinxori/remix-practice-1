import { PrismaClient } from "@prisma/client";
import { LoaderArgs, V2_MetaArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { db } from "~/database/db.server";

// export const loader = async ({ params }: any) => {   // This is 1 way
//   const { slug } = params.slug;
//   return { slug };
// };

export const loader = async ({ params }: LoaderArgs) => {
  const product = await db.idk.findUnique({
    where: {
      slug: params.slug,
    },
  });
  return { product };
};

export const meta = ({ params }: any) => [{ title: params.title }];

export default function Details() {
  //   const { slug } = useLoaderData();          // Complementary with the loader
  // const params = useParams(); // This is the proper way
  const { product } = useLoaderData();

  return (
    <article>
      <div>This is the detail of practica 3</div>
      <h2> Product: {product.title} </h2>
      <h2>Price: {product.price}</h2>
      <img src={product.image[0]}></img>
      <p>{product.body} </p>
    </article>
  );
}
