import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier.jsx';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Entete({etatPanier}) {
    const [panier] = etatPanier;

    //const nbArticlesDiff = Object.values(panier).length;
    const valeursPanier = Object.values(panier);
    // let totalArticles = 0;
    // for (let i = 0; i < valeursPanier.length; i++) {
    //     totalArticles += valeursPanier[i].qte;
    // }

    // const totalArticles2 = valeursPanier.reduce(
    //     (valInit, valCourante) => valInit + valCourante.qte
    // , 0);

    const [sommaireAffichable, setSommaireAffichable] = useState(false);

    function basculerAffichageSommairePanier() {
        setSommaireAffichable(!sommaireAffichable);
    }

    return (
        <header className="Entete">
            <div className="logo">
                <NavLink to="/" activeClassName="navActive">
                    Magasin
                </NavLink>
            </div>
            <ul className="navPrincipale">
                <li><NavLink to="/nos-produits" activeClassName="navActive">Produits</NavLink></li>
                <li><NavLink to="/a-propos-de-nous" activeClassName="navActive">À propos de nous</NavLink></li>
                <li><NavLink to="/contactez-nous" activeClassName="navActive">Contactez-nous</NavLink></li>
            </ul>
            <ul className="navUtilisateur">
                <li>
                    <Badge onClick={basculerAffichageSommairePanier} badgeContent={valeursPanier.reduce((accumulateur, eltCourant) => accumulateur + eltCourant.qte, 0)} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                    <SommairePanier panier={panier} affichable={sommaireAffichable} />
                </li>
                <li>Mon Compte</li>
            </ul>
        </header>
    )
}

export default Entete;