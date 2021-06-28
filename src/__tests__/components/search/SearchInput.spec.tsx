import SearchInput from 'components/search/SearchInput'
import { render } from 'test-utils'

it('renders without crashing', () => {
    let outsideValue = ''
    const handleChangeInput = jest.fn()

    const { getByPlaceholderText } = render(
        <SearchInput
            inputValue={outsideValue}
            handleChangeInput={handleChangeInput}
        />
    )

    expect(getByPlaceholderText(/Search/)).toBeInTheDocument()
})

it('holds outside value', () => {
    let outsideValue = ''
    const handleChangeInput = jest.fn()

    const { getByPlaceholderText } = render(
        <SearchInput
            inputValue={outsideValue}
            handleChangeInput={handleChangeInput}
        />
    )

    const input = getByPlaceholderText(/Search/) as HTMLInputElement

    expect(input.value).toBe(outsideValue)
})
