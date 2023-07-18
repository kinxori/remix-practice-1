import { PrismaClient } from "@prisma/client";
import { LoaderArgs, V2_MetaArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { db } from "~/database/db.server";

// export const loader = async ({ params }: any) => {   // This is 1 way
//   const { slug } = params.slug;
//   return { slug };
// };

export const loader = async ({ params }: LoaderArgs) => {
  const product = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  });
  return { product };
};

export default function Details() {
  //   const { slug } = useLoaderData();          // Complementary with the loader
  // const params = useParams(); // This is the proper way
  const { product } = useLoaderData();

  return (
    <article style={{ fontFamily: "Helvetica" }}>
      <h2 style={{ textAlign: "center", padding: "40px 0" }}>
        This is the detail view of {product.title}
      </h2>
      <h3 style={{ fontSize: "32px" }}>{product.title} </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          justifyContent: "center",
          gap: "10px",
          margin: "0 auto",
        }}
      >
        {product.image.map((image: any) => (
          <img key={image} src={image} style={{ width: 200 }}></img>
        ))}
      </div>
      <h3 style={{ fontSize: "32px", textAlign: "right" }}>Price: ${product.price}</h3>
      <p>{product.body} </p>
    </article>
  );
}

export const meta = ({ params }: any) => [{ title: params.slug }];
