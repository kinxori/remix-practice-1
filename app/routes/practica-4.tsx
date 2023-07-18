import { useState } from "react";

export default function Practice4() {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <article>
      <div>Hola mundo</div>
    </article>
  );
}
