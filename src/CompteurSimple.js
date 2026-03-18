import { useState } from 'react';

function CompteurSimple() {
  const [valeur, setValeur] = useState(5);

  function augmentation() {
    setValeur(valeur + 2);
  }

  function diminution() {
    setValeur(valeur - 1);
  }

  function retourZero() {
    setValeur(0);
  }

  return (
    <div>
      <p>Compteur : {valeur}</p>
      <button onClick={augmentation}>Ajouter 2</button>
      <button onClick={diminution}>Enlever 1</button>
      <button onClick={retourZero}>Remettre à 0</button>
    </div>
  );
}

export default CompteurSimple;