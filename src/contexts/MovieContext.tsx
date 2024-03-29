import {
    createContext,
    FC,
    useReducer,
    useEffect,
    useMemo,
    useContext
} from 'react'

import { Genre } from 'types/Genre'
import IMovieResult from 'types/MovieResponse'

import {
    listMovieGenres,
    listPopularMovies,
    searchMovies
} from 'services/MovieService'

const initialState = {
    popularMovies: null,
    searchResults: null,
    genres: [],
    searchValue: '',
    handleMovieSearch: () => null,
    loadMovieGenres: () => null,
    resetSearchResults: () => null,
    setSearchValue: () => null
}

interface State {
    popularMovies: IMovieResult | null
    searchResults: IMovieResult | null
    genres: Genre[]
    searchValue: string
    handleMovieSearch: (query: string) => void
    loadMovieGenres: () => void
    resetSearchResults: () => void
    setSearchValue: (value: string) => void
}

const MovieContext = createContext<State>(initialState)

type Action =
    | { type: 'SET_POPULAR_MOVIES'; values: IMovieResult }
    | { type: 'SET_MOVIE_GENRES'; values: Genre[] }
    | { type: 'SET_SEARCH_RESULTS'; values: IMovieResult | null }
    | { type: 'SET_SEARCH_VALUE'; value: string }

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
        case 'SET_SEARCH_VALUE': {
            return {
                ...state,
                searchValue: action.value
            }
        }
    }
}

const MovieProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const loadPopularMovies = async (): Promise<void> => {
        try {
            const res = await listPopularMovies()

            dispatch({ type: 'SET_POPULAR_MOVIES', values: res })
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
        if (query.length < 2) return

        try {
            const res = await searchMovies(query)

            dispatch({ type: 'SET_SEARCH_RESULTS', values: res })
        } catch (error) {
            console.error(error)
        }
    }

    const resetSearchResults = (): void =>
        dispatch({ type: 'SET_SEARCH_RESULTS', values: null })

    const setSearchValue = (newValue: string): void =>
        dispatch({ type: 'SET_SEARCH_VALUE', value: newValue })

    useEffect(() => {
        loadPopularMovies()
    }, [])

    const providerValue = useMemo(
        () => ({
            ...state,
            handleMovieSearch,
            loadMovieGenres,
            resetSearchResults,
            setSearchValue
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
