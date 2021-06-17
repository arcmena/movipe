import * as React from 'react'
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { useState, useEffect } from 'react'
import { listPopularMovies } from './services/MovieService'

export const App = () => {
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
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={2}>
                        {movies.map(({ id, original_title }) => (
                            <div key={id}>{original_title}</div>
                        ))}
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    )
}
