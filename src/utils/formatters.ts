import { format, Locale } from 'date-fns'
import { Genre } from 'types/Genre'

type TOptions = {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: number
    useAdditionalWeekYearTokens?: boolean
    useAdditionalDayOfYearTokens?: boolean
}

export const formatDate = (
    date: Date,
    formatTo: string,
    options?: TOptions
): string => format(date, formatTo, options)

export const getGenreList = (
    genre_ids: number[],
    genreList: Genre[]
): Genre[] =>
    // @ts-ignore
    genre_ids.map(genre_id => genreList.find(({ id }) => id === genre_id))
