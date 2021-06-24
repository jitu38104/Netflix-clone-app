import React from 'react';
import Row from './Row';
import requests from '../requests';

const Content = () => {
    return (
        <div>

            <Row title={"NETFLIX ORIGINALS"} fetchURL={requests.fetchNetflixOriginals} isPoster={true} />
            <Row title={"Trending"} fetchURL={requests.fetchTrending} />
            <Row title={"Top Rated"} fetchURL={requests.fetchTopRated} />            
            <Row title={"Action"} fetchURL={requests.fetchAction} />
            <Row title={"Comedy"} fetchURL={requests.fetchComedy} />
            <Row title={"Documentry"} fetchURL={requests.fetchDocumentries} />
            <Row title={"Horror"} fetchURL={requests.fetchHorror} />
            <Row title={"Romance"} fetchURL={requests.fetchRomance} />                       
            
        </div>
    )
}

export default Content
