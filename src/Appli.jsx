import './Appli.scss';
import useLocalStorageState from './hooks/useLocalStorageState.js';
import Entete from './Entete.jsx';
import ListeProduits from './ListeProduits.jsx';
import PiedDePage from './PiedDePage.jsx';
import { Switch, Route } from 'react-router-dom';
import Accueil from './Accueil.jsx';
import Apropos from './Apropos.jsx';
import Contact from './Contact.jsx';

export default function Appli() {
  //Exemple de la structure panier
  // const panier = {
  //   prd0005: {prix: 19.69, qte: 1},
  //   prd0002: {prix: 19.69, qte: 2}
  // }

//Gérer l'état avec les "React Hooks"
//useState va créer une variable d'état initialisée à {}
//const etatPanier = useState(() => {
  //return JSON.parse(window.localStorage.getItem('panier')) || {};

  // let panierDansLS = window.localStorage.getItem('panier');
  // if(panierDansLS !== null) {
  //   return JSON.parse(panierDansLS);
  // }
  // else {
  //   return {};
  // }
//});

//const [panier] = etatPanier;

//Sauvegarder l'état du panier dans LocalStorage
//Corriger avec useEffect() (hook)
//useEffect(()=> window.localStorage.setItem('panier', JSON.stringify(panier)), [panier]);

const etatPanier = useLocalStorageState({}, "panier");

// const etatConnexion = useState(false);
// const connexion = etatConnexion[0];
// const setConnexion = etatConnexion[1];

//const [connexion, setConnexion] = useState(false); //Destructuring Arrays

  return (
    <div className="Appli">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        <Switch>
          <Route path="/" component={Accueil} exact />
          <Route path="/nos-produits" exact>
            <ListeProduits etatPanier={etatPanier} />
          </Route>
          <Route path="/a-propos-de-nous" exact>
            <Apropos />
          </Route>
          <Route path="/contactez-nous" component={Contact} exact />
        </Switch>
      </section>
      <PiedDePage />
    </div>
  );
}
