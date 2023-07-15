import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: any) => {
  const { slug } = params.slug;
  return { slug };
};

export default function Practica3Details() {
  const { slug } = useLoaderData();
  return (
    <article>
      <div>This is the detail of practica 3</div>
    </article>
  );
}
