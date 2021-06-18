import { format, Locale } from 'date-fns'

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
