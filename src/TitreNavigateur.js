import { useState, useEffect } from 'react';

function TitreNavigateur() {
  const [totalClics, setTotalClics] = useState(0);

  useEffect(() => {
    document.title = 'Total : ' + totalClics;
  }, [totalClics]);

  return (
    <div>
      <p>Valeur : {totalClics}</p>
      <button onClick={() => setTotalClics(totalClics + 1)}>
        Mettre à jour
      </button>
    </div>
  );
}

export default TitreNavigateur;