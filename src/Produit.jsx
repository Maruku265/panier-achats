import './Produit.css';

export default function Produit(props) {
    return (
        <li>
            <img src={'images-produits/' + props.id + '.jpg'} alt=""/>
            <div className="info">
                <p className="nom">{props.nom}</p>
                <p className="prix">{props.prix}</p>
            </div>
            <button> Ajouter au panier</button>
        </li>
    );
}