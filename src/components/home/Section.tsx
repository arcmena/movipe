import { FC } from 'react'
import { Grid, Heading, Text, Box } from '@chakra-ui/react'

import MovieCard from '../movie/MovieCard'

import { Movie } from 'types/Movie'

interface ISection {
    data: Movie[]
    title: string
    subtitle: string
}

const Section: FC<ISection> = ({ title, subtitle, data }) => {
    return (
        <>
            <Box>
                <Heading as="h1" size="md" color="gray.200">
                    {title}
                </Heading>
                <Text as="p" fontSize="sm" color="gray.500" fontWeight="medium">
                    {subtitle}
                </Text>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
                {data.map(movie => (
                    <MovieCard details={movie} key={movie.id} />
                ))}
            </Grid>
        </>
    )
}

export default Section
