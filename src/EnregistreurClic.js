import { useState, useEffect } from 'react';

function EnregistreurClic() {
  const [nombreClics, setNombreClics] = useState(0);

  useEffect(() => {
    console.log('Clic numéro : ' + nombreClics);
  }, [nombreClics]);

  return (
    <div>
      <p>Total des clics : {nombreClics}</p>
      <button onClick={() => setNombreClics(nombreClics + 1)}>
        Cliquer ici
      </button>
    </div>
  );
}

export default EnregistreurClic;