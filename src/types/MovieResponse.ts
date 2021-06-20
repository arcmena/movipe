import { Movie } from './Movie'

type IMovieResult = {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export default IMovieResult
