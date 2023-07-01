import React, { useEffect } from 'react'
import { useState } from 'react';
import { getMovies } from './services/moviesService';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from './AlertCustom';

function Movies(){

    const [movieName, setMovieName] = useState("")
    const [moviesInfo, setMoviesInfo] = useState([])
    const [data, setData] = useState([])
    const [alert, setAlert] = useState({color: "", text: ""})

    useEffect(
        () => {
            const result = async() =>{
                if(movieName !== ""){
                    try{
                        const responseData = await getMovies(movieName);
                        setMoviesInfo(responseData.Search)
                        console.log(moviesInfo)
                    }catch(e){
                        console.log(e)
                    }
                }

            } 
            result()
        }, [movieName, moviesInfo]
    )

    const search = (e) => {
        e.preventDefault()
        if(movieName !== ""){
            setData(
                moviesInfo && moviesInfo.map((movie) =>

                    <Card key={movie.imdbID} style={{ width: '13rem' }} className="mx-3 mt-3">
                        <Card.Img variant="top" src={movie.Poster} alt={movie.Title + " poster"} height="300" />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>
                                {movie.Year}
                            </Card.Text>
                            <Button as={Link} to={`movie/${movie.imdbID}`} variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                )

            )
        }else{
            setAlert({color: 'red', text: 'No movies found!'})
        }
    }

    return(
        <div className="container mt-5">
            <h1>Movie Search App</h1>
        
            <form className="search-form">
            <input type="text" className="search-input" placeholder="Search movies..." onChange={(e) => setMovieName(e.target.value)} />
            <button type="submit" className="search-btn" onClick={search}>Search</button>
            </form>

            <div className="d-flex flex-wrap wrap justify-content-center mt-5">
                {data}
            </div>

            <AlertCustom {...alert} />
      </div>
    )
}

export default Movies