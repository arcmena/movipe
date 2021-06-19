import { BaseAPI } from './AxiosInstances'
import { Movie } from 'types/Movie'
import { Genre } from 'types/Genre'

const API_KEY = process.env.REACT_APP_API_KEY
const LANGUAGE = 'en-US'

const defaultParams = { api_key: API_KEY, language: LANGUAGE }

interface IMovieResult {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export const listPopularMovies = (page = 1): Promise<IMovieResult> =>
    BaseAPI.get('/movie/popular', {
        params: { ...defaultParams, page }
    }).then(({ data }) => data)

interface IGenreResult {
    genres: Genre[]
}

export const listMovieGenres = (): Promise<IGenreResult> =>
    BaseAPI.get('/genre/movie/list', {
        params: { ...defaultParams }
    }).then(({ data }) => data)

export const searchMovies = (query: string, page = 1): Promise<IMovieResult> =>
    BaseAPI.get('/search/movie', {
        params: { ...defaultParams, page, query }
    }).then(({ data }) => data)
