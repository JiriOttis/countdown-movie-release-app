import NavLinks from "./NavLinks";

const Navigation = ({deleteCurrentMovie, movie}) => {
    return <nav className='navigation'>
        <NavLinks className="mobile-navigation" deleteCurrentMovie={deleteCurrentMovie} movie={movie}/>
    </nav>

};

export default Navigation;