import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import MovieDetails from '../MovieDetails';
import Movies from '../Movies';

function Public(){
    return(
        <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/movie/:imdbID' element={<MovieDetails />} />
        </Routes>
    )
}

export default Public