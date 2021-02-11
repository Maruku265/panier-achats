import BtnAjoutPanier from './BtnAjoutPanier'
import './Produit.scss';

export default function Produit(props) {
    const [panier, setPanier] = props.etatPanier;

    const {nom, prix, id} = props;

    function ajouterPanier() {
        if (panier[id]) {
            panier[id].qte++;
        }
        else {
            panier[id] = {prix: prix, qte: 1}
        }
        setPanier(JSON.parse(JSON.stringify(panier))); //{...panier}
    }

    return (
        <li className="Produit">
            <img src={'images-produits/' + props.id + '.jpg'} alt=""/>
            <div className="info">
                <p className="nom">{props.nom}</p>
                <p className="prix">{props.prix}</p>
            </div>
            <BtnAjoutPanier onClick={ajouterPanier} />
        </li>
    );
}