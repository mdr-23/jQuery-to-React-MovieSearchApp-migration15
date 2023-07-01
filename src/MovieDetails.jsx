import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getMoviesDetails } from './services/moviesService'

function MovieDetails(){

    const {imdbID} = useParams()

    const [movieData, setMovieData] = useState([])
    const [ratings, setRatings] = useState([])

    useEffect(
        () => {
            const result = async() =>{
                try{
                    const responseData = await getMoviesDetails(imdbID);
                    console.log(responseData)
                    setMovieData(responseData)
                    setRatings(responseData.Ratings)
                    console.log(ratings)
                }catch(e){
                    console.log(e)
                }
            } 
            result()
        }, [imdbID, ratings]
    )

    return(
        <>

        <Container>
            <h1 className="mt-5">{movieData.Title}</h1>
            <h3>({movieData.Year})</h3>
            <Row className="d-flex mx-auto align-items-center mt-5">
                <Col xs={12} sm={4}>
                    <img src={movieData.Poster}  alt={movieData.Title + " poster"} />
                </Col>

                <Col xs={12} sm={8}>
                    <ul>
                        <li><span className="details-span">Plot:</span> {movieData?.Plot}</li>
                        <li><span className="details-span">Director:</span> {movieData?.Director}</li>
                        <li><span className="details-span">Starring by:</span> {movieData?.Actors}</li>
                        <li><span className="details-span">Genre:</span> {movieData.Genre}</li>
                        <li><span className="details-span">Duration:</span> {movieData.Runtime}</li>
                        <li><span className="details-span">Country:</span> {movieData.Country}</li>
                        <li><span className="details-span">Language:</span> {movieData.Language}</li>
                        <li><span className="details-span">Duration:</span> {movieData.Runtime}</li>
                    </ul>
                    
                    <ul>
                        <li><h4>Ratings</h4></li>
                        <li><span className="details-span">IMDB:</span> {movieData.imdbRating} 
                        {ratings.map(rating => <li><span className="details-span">{rating.Source}:</span> {rating.Value}</li> )}</li>
                    </ul>
                </Col>
            </Row>
        </Container>

        </>

    )
}

export default MovieDetails