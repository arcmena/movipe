import { FC } from 'react'
import { Box, Heading, Image, Text } from '@chakra-ui/react'

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
        <Box display="flex" alignItems="center" flexDirection="column">
            <Image
                width="150px"
                objectFit="cover"
                src={`http://image.tmdb.org/t/p/w200${poster_path}`}
                alt={title}
                rounded="3xl"
            />
            <Heading
                as="h4"
                size="xs"
                fontWeight="semibold"
                color="gray.200"
                mt={2}
            >
                {title}
            </Heading>
            <Text
                as="span"
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                mt={1}
            >
                Movie &#9679; {formatDate(parseISO(release_date), 'yyyy')}
            </Text>
        </Box>
    )
}

export default MovieCard
