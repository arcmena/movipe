import { FC } from 'react'
import { Box, Heading, Image as Img, Text, HStack } from '@chakra-ui/react'
import { parseISO } from 'date-fns'
import LazyLoad from 'react-lazyload'
import { AiFillStar } from 'react-icons/ai'

import { Movie } from 'types/Movie'
import { formatDate, getGenreList } from 'utils/formatters'
import Tag from 'components/ui/Tag'
import { Genre } from 'types/Genre'

interface IMovieResult {
    details: Movie
    genresList: Genre[]
}

/*
    TODO: Await image to load and then display the component
*/

const MovieResult: FC<IMovieResult> = ({
    details: { title, poster_path, release_date, vote_average, genre_ids },
    genresList
}) => {
    const genres = getGenreList(genre_ids, genresList)

    console.log(genres)

    return (
        <Box display="flex">
            <LazyLoad height={225}>
                <Img
                    width="150px"
                    height="225px"
                    minWidth="150px"
                    minHeight="225px"
                    objectFit="cover"
                    src={`http://image.tmdb.org/t/p/w200${poster_path}`}
                    alt={title}
                    rounded="3xl"
                />
            </LazyLoad>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="left"
                textAlign="left"
                flexWrap="wrap"
                ml={4}
            >
                <Text
                    as="p"
                    size="xs"
                    fontWeight="semibold"
                    color="gray.200"
                    wordBreak="break-word"
                >
                    {title}
                </Text>
                {genres.length !== 0 && (
                    <Box mt={4} display="flex" flexWrap="wrap">
                        {genres.map(({ id, name }, index) => {
                            if (index >= 2) return null
                            return (
                                <Text
                                    as="span"
                                    fontSize="xs"
                                    fontWeight="medium"
                                    color="gray.500"
                                    key={id}
                                >
                                    {index !== 0 ? ', ' : ''}
                                    {name}
                                </Text>
                            )
                        })}
                    </Box>
                )}

                <Box mt={4} display="flex" flexDirection="row">
                    <Tag>{formatDate(parseISO(release_date), 'yyyy')}</Tag>
                    <Tag
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        ml={2}
                    >
                        <AiFillStar color="#ffbf00" />
                        {vote_average}
                    </Tag>
                </Box>
            </Box>
        </Box>
    )
}

export default MovieResult
