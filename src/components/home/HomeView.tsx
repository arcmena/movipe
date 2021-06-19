import { useEffect, useState } from 'react'

import Section from './Section'

import { listPopularMovies } from '../../services/MovieService'

const HomeView = () => {
    const [popularMovies, setPopularMovies] = useState([])

    const loadIndex = async () => {
        try {
            const res = await listPopularMovies()
            setPopularMovies(res.results)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadIndex()
    }, [])

    return (
        <>
            <Section
                title="Trending"
                subtitle="Popular on the world"
                data={popularMovies}
            />
        </>
    )
}

export default HomeView
