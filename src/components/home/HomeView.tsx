import { Spinner, Box } from '@chakra-ui/react'
import Section from './Section'

import { useMovie } from 'contexts/MovieContext'

const HomeView = () => {
    const { popularMovies } = useMovie()

    return (
        <Box>
            {popularMovies && popularMovies.results.length !== 0 ? (
                <Section
                    title="Trending"
                    subtitle="Popular on the world"
                    data={popularMovies?.results}
                />
            ) : (
                <Spinner size="xl" color="gray.600" />
            )}
        </Box>
    )
}

export default HomeView
