import { useState } from "react";
import favIcon from "~/assets/new-logo-kinxori.ico";

export default function Practice4() {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <article>
      <Display onClick={() => handleClick()} count={state} />
    </article>
  );
}

function Display({ onClick, count }: any) {
  return (
    <>
      <h2>Click the button</h2>
      <span>Count: {count} </span>
      <button onClick={onClick}>Add </button>
    </>
  );
}

export const meta = () => {
  return [{ title: "Practica 4" }];
};

export const links = () => {
  return [{ rel: "icon", href: favIcon }];
};
