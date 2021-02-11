import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

function Entete(props) {
    const [panier, setPanier] = props.etatPanier;

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
                    <Badge badgeContent={0} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </li>
                <li>Mon Compte</li>
            </ul>
        </header>
    )
}

export default Entete;