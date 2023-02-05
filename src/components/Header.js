import './styles/Header.css';

const Header = () => {
return <header>
    <h2 className="textLogo">WHEN IS IT RELEASED?</h2>

    <nav>
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">UPCOMING MOVIES</a></li>
        </ul>
    </nav>
</header>
};

export default Header;