import './PiedDePage.css';

export default function PiedDePage(props) {
    const annee = new Date().getFullYear();
    return (
        <footer>
            &copy;{annee} - TIM - Tous droitsréservés.
        </footer>
    );
}

