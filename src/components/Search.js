import Background from "./Background";
import Loading from "./Loading";

import loadingGif from '../images/loading-arrow.gif';
const Searching = () => {
    return (
        <div >
            <h1>searching...</h1>
            <img src={loadingGif} alt="loading"></img>

        </div>

    );
}

const Search = () => {
    return (
        <Background>

            <Searching />

        </Background>

    );
}

export default Search;