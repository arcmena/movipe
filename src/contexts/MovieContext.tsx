import {
    createContext,
    FC,
    useReducer,
    useEffect,
    useMemo,
    useContext
} from 'react'

import { Genre } from 'types/Genre'
import { Movie } from 'types/Movie'

import {
    listMovieGenres,
    listPopularMovies,
    searchMovies
} from 'services/MovieService'

const initialState = {
    popularMovies: [],
    searchResults: [],
    genres: [],
    handleMovieSearch: () => null,
    loadMovieGenres: () => null
}

interface State {
    popularMovies: Movie[]
    searchResults: Movie[]
    genres: Genre[]
    handleMovieSearch: (query: string) => void
    loadMovieGenres: (query: string) => void
}

const MovieContext = createContext<State>(initialState)

type Action =
    | { type: 'SET_POPULAR_MOVIES'; values: Movie[] }
    | { type: 'SET_MOVIE_GENRES'; values: Genre[] }
    | { type: 'SET_SEARCH_RESULTS'; values: Movie[] }

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_POPULAR_MOVIES': {
            return {
                ...state,
                popularMovies: action.values
            }
        }
        case 'SET_MOVIE_GENRES': {
            return {
                ...state,
                genres: action.values
            }
        }
        case 'SET_SEARCH_RESULTS': {
            return {
                ...state,
                searchResults: action.values
            }
        }
    }
}

const MovieProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const loadPopularMovies = async (): Promise<void> => {
        try {
            const res = await listPopularMovies()

            dispatch({ type: 'SET_POPULAR_MOVIES', values: res.results })
        } catch (error) {
            console.error(error)
        }
    }

    const loadMovieGenres = async (): Promise<void> => {
        try {
            const res = await listMovieGenres()

            dispatch({ type: 'SET_MOVIE_GENRES', values: res.genres })
        } catch (error) {
            console.error(error)
        }
    }

    const handleMovieSearch = async (query: string): Promise<void> => {
        try {
            const res = await searchMovies(query)

            dispatch({ type: 'SET_SEARCH_RESULTS', values: res.results })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadPopularMovies()
    }, [])

    const providerValue = useMemo(
        () => ({
            ...state,
            handleMovieSearch,
            loadMovieGenres
        }),
        [state]
    )

    return (
        <MovieContext.Provider value={providerValue}>
            {children}
        </MovieContext.Provider>
    )
}

const useMovie = () => {
    const context = useContext(MovieContext)

    if (!context)
        throw new Error('useMovie must be used within a MovieProvider!')

    return context
}

export { MovieProvider, useMovie }
