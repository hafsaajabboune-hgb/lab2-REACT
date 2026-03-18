import { useState } from 'react';

function AffichageMessage() {
  const [phrase, setPhrase] = useState('En attente...');

  function nouveauMessage() {
    setPhrase('Message envoyé');
  }

  function supprimerMessage() {
    setPhrase('Message supprimé');
  }

  return (
    <div>
      <p>{phrase}</p>
      <button onClick={nouveauMessage}>Envoyer</button>
      <button onClick={supprimerMessage}>Supprimer</button>
    </div>
  );
}

export default AffichageMessage;