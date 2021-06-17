import { BaseAPI } from './AxiosInstances'

const API_KEY = process.env.REACT_APP_API_KEY
const LANGUAGE = 'en-US'

const defaultParams = { api_key: API_KEY, language: LANGUAGE }

export const listPopularMovies = (page = 1) =>
    BaseAPI.get('/movie/popular', {
        params: { ...defaultParams, page }
    }).then(({ data }) => data)
