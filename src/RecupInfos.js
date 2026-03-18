import { useState } from 'react';

function RecupInfos() {
  const [prenomUtilisateur, setPrenomUtilisateur] = useState('');
  const [emailUtilisateur, setEmailUtilisateur] = useState('');

  function afficherDonnees(e) {
    e.preventDefault();
    alert(prenomUtilisateur + ' / ' + emailUtilisateur);
  }

  return (
    <form onSubmit={afficherDonnees}>
      <div>
        <label>Prénom : </label>
        <input 
          value={prenomUtilisateur} 
          onChange={(e) => setPrenomUtilisateur(e.target.value)} 
        />
      </div>
      <div>
        <label>Email : </label>
        <input 
          value={emailUtilisateur} 
          onChange={(e) => setEmailUtilisateur(e.target.value)} 
        />
      </div>
      <button>Envoyer</button>
    </form>
  );
}

export default RecupInfos;