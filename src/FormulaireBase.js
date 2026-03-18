import { useState } from 'react';

function FormulaireBase() {
  const [identite, setIdentite] = useState('');
  const [courriel, setCourriel] = useState('');

  function saisieNom(e) {
    setIdentite(e.target.value);
  }

  function saisieEmail(e) {
    setCourriel(e.target.value);
  }

  function traitementFormulaire(e) {
    e.preventDefault();
    alert('Nom : ' + identite + ' - Email : ' + courriel);
  }

  return (
    <form onSubmit={traitementFormulaire}>
      <div>
        <label>Votre nom : </label>
        <input value={identite} onChange={saisieNom} />
      </div>
      <div>
        <label>Votre email : </label>
        <input value={courriel} onChange={saisieEmail} />
      </div>
      <button>Confirmer</button>
    </form>
  );
}

export default FormulaireBase;