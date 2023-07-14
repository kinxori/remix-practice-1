import { PrismaClient } from "@prisma/client";

//This sends data to database remix1

// export const loader = async () => {
//   const prisma = await new PrismaClient();
//   await prisma.product.create({
//     data: { title: "My first data of product collection", slug: "Unique Slug" },
//   });
//   return null;
// };

// This consumes data from  database remix1

export const loader = async () => {
  const prisma = await new PrismaClient();

  return null;
};

export default function Mongodb() {
  return (
    <article>
      <div>This page controls mongo database</div>
    </article>
  );
}
