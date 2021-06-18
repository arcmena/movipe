import { FC } from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'

import { Movie } from 'types/Movie'
import { formatDate } from 'utils/formatters'
import { parseISO } from 'date-fns'

interface IMovie {
    details: Movie
}

const MovieCard: FC<IMovie> = ({
    details: { title, poster_path, release_date }
}) => {
    return (
        <Box display="flex" flexDirection="column">
            <Image
                width="200px"
                objectFit="cover"
                src={`http://image.tmdb.org/t/p/w200${poster_path}`}
                alt={title}
                rounded="3xl"
            />
            <Heading as="h4" size="xs" color="gray.200" mt={2}>
                {title}
            </Heading>
            <Box mt={2}>
                <Heading as="p" size="xs" color="gray.400">
                    Movie &#9679; {formatDate(parseISO(release_date), 'yyyy')}
                </Heading>
            </Box>
        </Box>
    )
}

export default MovieCard
