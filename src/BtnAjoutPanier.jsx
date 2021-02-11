import Badge from '@material-ui/core/Badge';
import './BtnAjoutPanier.scss';

export default function BtnAjoutPanier(props) {
    return (
        <Badge badgeContent={0} color="primary">
            <button className="BtnAjoutPanier"> 
                Ajouter au panier
            </button>
        </Badge>
    );
}