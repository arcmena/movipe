import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

import { useMovie } from 'contexts/MovieContext'

const SearchView = () => {
    const { genres, loadMovieGenres } = useMovie()

    useEffect(() => {
        if (genres.length === 0) loadMovieGenres()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <Box>SearchView</Box>
}

export default SearchView
