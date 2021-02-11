import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

function Entete(props) {
    const [panier, setPanier] = props.etatPanier;

    //const nbArticlesDiff = Object.values(panier).length;
    const valeursPanier = Object.values(panier);
    // let totalArticles = 0;
    // for (let i = 0; i < valeursPanier.length; i++) {
    //     totalArticles += valeursPanier[i].qte;
    // }

    // const totalArticles2 = valeursPanier.reduce(
    //     (valInit, valCourante) => valInit + valCourante.qte
    // , 0);

    return (
        <header className="Entete">
            <div className="logo">Magasin</div>
            <ul className="navPrincipale">
                <li>Produits</li>
                <li>À propos de nous</li>
                
                <li>Contactez-nous</li>
            </ul>
            <ul className="navUtilisateur">
                <li>
                    <Badge badgeContent={valeursPanier.reduce((valInit, valCourante) => valInit + valCourante.qte, 0)} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </li>
                <li>Mon Compte</li>
            </ul>
        </header>
    )
}

export default Entete;