import './App.css';
import CompteurSimple from './CompteurSimple';
import AffichageMessage from './AffichageMessage';
import FormulaireBase from './FormulaireBase';
import EnregistreurClic from './EnregistreurClic';
import ChangementEtat from './ChangementEtat';
import RecupInfos from './RecupInfos';
import TitreNavigateur from './TitreNavigateur';

function App() {
  return (
    <div>
      <h3>TP React - Version personnalisée</h3>
      <CompteurSimple />
      <AffichageMessage />
      <FormulaireBase />
      <EnregistreurClic />
      <ChangementEtat />
      <RecupInfos />
      <TitreNavigateur />
    </div>
  );
}

export default App;