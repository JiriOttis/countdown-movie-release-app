import './styles/SearchCard.css'

const SearchCard = () => {
    return <div className="search-card">
        <h2 className="search-heading">FIND COUNTDOWN TO MOVIE RELEASE</h2>
        <p className="search-subheading">Type in a movie you want to find out how much time is left until its release</p>
        <form>
            <input type="text" placeholder="Dune: Part Two"/>
            <button type='submit' className="search-button">SEARCH</button>
        </form>
    </div>
};

export default SearchCard;