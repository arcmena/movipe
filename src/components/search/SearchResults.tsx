import { FC } from 'react'
import { Grid, Heading, Text } from '@chakra-ui/react'

import MovieResult from 'components/movie/MovieResult'

import IMovieResult from 'types/MovieResponse'
import { Genre } from 'types/Genre'

interface ISearchResults {
    inputValue: string
    searchResults: IMovieResult
    genres: Genre[]
}

const SearchResults: FC<ISearchResults> = ({
    inputValue,
    searchResults,
    genres
}) => {
    return (
        <>
            <Heading size="md" fontWeight="medium" color="gray.200">
                Result
            </Heading>
            <Text mt={1} color="gray.400">
                for "{inputValue}"
            </Text>
            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                gap={4}
                mt={4}
            >
                {searchResults.results.map(movie => {
                    if (!movie.poster_path || !movie.release_date) return null
                    return (
                        <MovieResult
                            details={movie}
                            key={movie.id}
                            genresList={genres}
                        />
                    )
                })}
            </Grid>
        </>
    )
}

export default SearchResults
