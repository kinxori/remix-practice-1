export const loader = async () => {
  const data = await (await fetch("https://rickandmortyapi.com/api/character/")).json();
  return null;
};

export default function LandingPage() {
  return (
    <article>
      <div>Hola mundo</div>
    </article>
  );
}
