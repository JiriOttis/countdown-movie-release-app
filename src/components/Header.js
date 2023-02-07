import './styles/Header.css';
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Header = ({deleteCurrentMovie, movie}) => {
return <header>
    <h2 className="textLogo">WHEN IS IT RELEASED?</h2>

    <nav>
        <Navigation deleteCurrentMovie={deleteCurrentMovie} movie={movie}/>
        <MobileNavigation deleteCurrentMovie={deleteCurrentMovie} movie={movie}/>
    </nav>
</header>
};

export default Header;