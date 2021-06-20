import { BaseAPI } from './AxiosInstances'

import { Genre } from 'types/Genre'
import IMovieResult from 'types/MovieResponse'

const API_KEY = process.env.REACT_APP_API_KEY
const LANGUAGE = 'en-US'

const defaultParams = { api_key: API_KEY, language: LANGUAGE }

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
