import './Appli.css';
import Entete from './Entete.jsx';
import ListeProduits from './ListeProduits.jsx';
import PiedDePage from './PiedDePage.jsx';

function Appli() {
  return (
    <div className="Appli">
      <Entete />
      <section className="contenuPrincipal">
        <ListeProduits />
      </section>
      <PiedDePage />
    </div>
  );
}

export default Appli;