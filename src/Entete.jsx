import './Entete.css';

function Entete(props) {

    return (
        <header className="Entete">
            <div className="logo"></div>
            <ul>
                <li>Produits</li>
                <li>À propos de nous</li>
                <li>Contactez-nous</li>
            </ul>
            <ul className="navUtilisateur">
                <li>Panier d'achats</li>
                <li>Mon Compte</li>
            </ul>
        </header>
    )
}

export default Entete;