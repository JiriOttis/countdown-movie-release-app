import "./styles/HomeMain.css"
import SearchCard from "./SearchCard";

const HomeMain = ({setMovie}) => {
    return <main className='main-home'>
        <h1>WHEN IS THE MOVIE RELEASED?</h1>
        <SearchCard setMovie={setMovie}/>
    </main>
};

export default HomeMain;