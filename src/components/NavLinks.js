import { NavLink } from 'react-router-dom';

const NavLinks = ({deleteCurrentMovie, movie}) => {
    return <ul>
        <li><NavLink to="/" onClick={() => deleteCurrentMovie(movie)}>HOME</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
        <li><NavLink to="/upcoming">UPCOMING MOVIES</NavLink></li>
    </ul>
};

export default NavLinks;