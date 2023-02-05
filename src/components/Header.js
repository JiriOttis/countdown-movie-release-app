import './styles/Header.css';
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Header = () => {
return <header>
    <h2 className="textLogo">WHEN IS IT RELEASED?</h2>

    <nav>
        <Navigation/>
        <MobileNavigation/>
    </nav>
</header>
};

export default Header;