import BtnAjoutPanier from './BtnAjoutPanier'
import './Produit.scss';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

export default function Produit({nom, prix, id, etatPanier}) {
    const [panier, setPanier] = etatPanier;

    function ajouterPanier() {
        if (panier[id]) {
            panier[id].qte++;
        }
        else {
            panier[id] = {nom: nom, prix: prix, qte: 1}
        }
        setPanier(JSON.parse(JSON.stringify(panier))); //{...panier}
    }

    let qte = 0;
    let texte = "Ajouter au panier";
    let classeCss = "";
    if (panier[id]) {
        qte = panier[id].qte;
        texte = <AddShoppingCart />; // JSX = Javascript Syntax eXtension
        classeCss = "rouge";
    }

    return (
        <li className="Produit">
            <img src={'images-produits/' + id + '.jpg'} alt=""/>
            <div className="info">
                <p className="nom">{nom}</p>
                <p className="prix">{prix}</p>
            </div>
            <BtnAjoutPanier onClick={ajouterPanier} qte={qte} texte={texte} classeCss={classeCss} />
        </li>
    );
}