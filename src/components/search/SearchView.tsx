import { Box, Spinner, Grid, Text, Heading } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'

import { useMovie } from 'contexts/MovieContext'

import Tag from 'components/ui/Tag'

import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

const SearchView = () => {
    const {
        genres,
        loadMovieGenres,
        searchResults,
        handleMovieSearch,
        resetSearchResults,
        searchValue,
        setSearchValue
    } = useMovie()

    useEffect(() => {
        if (genres.length === 0) loadMovieGenres()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceValue = useCallback(
        debounce(value => handleMovieSearch(value), 1000),
        []
    )

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setSearchValue(value)
        resetSearchResults()
        if (value && value.trim() !== '') {
            debounceValue(value)
        }
    }

    return (
        <Box>
            <SearchInput
                inputValue={searchValue}
                handleChangeInput={handleChangeInput}
            />

            <Box mt={4}>
                {searchResults ? (
                    searchResults.results.length !== 0 ? (
                        <SearchResults
                            inputValue={searchValue}
                            searchResults={searchResults}
                        />
                    ) : (
                        <Text textColor="gray.400" mt={4}>
                            No results found
                        </Text>
                    )
                ) : (
                    <Box my={2}>
                        <Heading
                            size="md"
                            fontWeight="medium"
                            color="gray.400"
                            textAlign="left"
                        >
                            Genres
                        </Heading>
                        <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={2}>
                            {genres.map(({ id, name }, index) => {
                                if (index > 8) return null
                                return <Tag key={id}>{name}</Tag>
                            })}
                        </Grid>
                    </Box>
                )}
                {searchValue && !searchResults && (
                    <Spinner mt={4} size="xl" color="gray.600" />
                )}
            </Box>
        </Box>
    )
}

export default SearchView
