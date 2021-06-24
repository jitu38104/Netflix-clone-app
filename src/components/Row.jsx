import React, { useEffect, useState } from 'react';
import requests from '../requests';
import movieTrailer from 'movie-trailer';
import Youtube from 'react-youtube';
import './component.css';

const Row = ({ title, fetchURL, isPoster }) => {
    const [movie, setMovie] = useState([]);
    const [movieId, setMovieId] = useState("");
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    };

    useEffect(() => {
        const url = fetchURL;
        fetch(url).then(res => {
            res.json().then(res => {
                setMovie(res.results);
            });
        }).catch(err => {
            console.error(err);
        });
    }, [fetchURL]);

    async function clickHandler(name) {
        console.log(name)  
        if(movieId) {
            setMovieId("");
        } else {
            await movieTrailer(name, {id: true})
            .then(res=>{
                setMovieId(res);
            }).catch(err => {
                console.error(err)
            });
        }        
    }

    return (                
        <div className="row">            
            <h1>{title}</h1>
            <div className={`row-posters${isPoster ? " poster_wall" : ""}`}>
                {movie.map(data => {
                    const posterPath = requests.fetchImgBaseUrl+data.poster_path;
                    const backdropPath = requests.fetchImgBaseUrl+data.backdrop_path;
                    return (                        
                        <img key={data.id} src={isPoster ? posterPath : backdropPath} alt={data.name} onClick={()=>{clickHandler(data.title || data.original_name || data.name)}} />  
                    )
                })}
            </div>
            { movieId && <Youtube videoId={movieId} opts={opts} /> }
        </div>
    )
}

export default Row