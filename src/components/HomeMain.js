import "./styles/HomeMain.css"
import SearchCard from "./SearchCard";

const HomeMain = ({API_URL, API_KEY, setMovie}) => {
    return <main className='main-home'>
        <h1>WHEN IS THE MOVIE RELEASED?</h1>
        <SearchCard API_URL={API_URL} API_KEY={API_KEY} setMovie={setMovie}/>
    </main>
};

export default HomeMain;