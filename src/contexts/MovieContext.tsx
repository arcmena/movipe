import { useMemo } from 'react'
import { useEffect } from 'react'
import { useContext, useReducer, createContext, FC } from 'react'
import { listPopularMovies, searchMovies } from 'services/MovieService'
import { Movie } from 'types/Movie'

const initialState = {
    popularMovies: [],
    searchResults: [],
    handleMovieSearch: () => null
}

interface State {
    popularMovies: Movie[]
    searchResults: Movie[]
    handleMovieSearch: (query: string) => void
}

const MovieContext = createContext<State>(initialState)

type Action =
    | { type: 'SET_POPULAR_MOVIES'; values: Movie[] }
    | { type: 'SET_SEARCH_RESULTS'; values: Movie[] }

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_POPULAR_MOVIES': {
            return {
                ...state,
                popularMovies: action.values
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
            handleMovieSearch
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
