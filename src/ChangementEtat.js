import { useState } from 'react';

function ChangementEtat() {
  const [position, setPosition] = useState(1);
  const listeEtats = ['Initial', 'Intermédiaire', 'Final'];

  function passerSuivant() {
    setPosition((position % 3) + 1);
  }

  return (
    <div>
      <p>État : {listeEtats[position - 1]}</p>
      <button onClick={passerSuivant}>État suivant</button>
    </div>
  );
}

export default ChangementEtat;