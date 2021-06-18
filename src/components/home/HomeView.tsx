import { useEffect, useState } from 'react'
import { Grid, Heading } from '@chakra-ui/react'

import { listPopularMovies } from '../../services/MovieService'
import MovieCard from '../movie/MovieCard'

const HomeView = () => {
    const [movies, setMovies] = useState([])

    const loadMovies = async () => {
        try {
            const res = await listPopularMovies()
            setMovies(res.results)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadMovies()
    }, [])

    return (
        <>
            <Heading as="h1" size="md" color="gray.200">
                Trending
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
                {movies.map(movie => (
                    <MovieCard details={movie} />
                ))}
            </Grid>
        </>
    )
}

export default HomeView
