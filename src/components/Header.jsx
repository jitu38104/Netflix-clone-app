import { useEffect, useState } from 'react';
import requests from '../requests';

const Header = () => {
    const url = requests.fetchTrending ;
    const [imgUrl, setImgUrl] = useState(null);
    const [movieInfo, setMovieInfo] = useState(undefined);

    useEffect(() => {        
        fetch(url).then(res => {
            res.json().then(res => {
                const randNum = Math.floor(Math.random() * 100 + 1) % 20;
                const randMovie = res.results[randNum];
                const imgName = randMovie.backdrop_path;
                const imgPath = requests.fetchImgBaseUrl + imgName;
                setImgUrl(imgPath);
                setMovieInfo(randMovie);                
            });
        }).catch(err => {
            console.error(err);
        });
    }, [url]);

    function truncate(str) {        
        if(str){            
            const movieOverview = str.overview;
            const truncatedStr = movieOverview.substr(0, 180) + "...";            
            return truncatedStr;            
        }         
        return undefined;        
    }

    return (
        <header className="header-poster" style={{backgroundImage: `url(${imgUrl})`}}>
            <div className="header-box">
                <h1>{movieInfo ? (movieInfo?.title|| movieInfo?.name || movieInfo?.original_title) : "" }</h1>
                <div className="header-btn">
                    <button type="button">Play</button>
                    <button type="button">My List</button>
                </div>
                <p className="header-info">
                    {truncate(movieInfo)}
                </p>
            </div>
            <div className="hidden-blur"></div>
        </header>
    )
}

export default Header
