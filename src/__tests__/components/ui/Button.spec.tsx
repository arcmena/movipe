import { useState } from 'react'
import { fireEvent } from '@testing-library/react'

import Button from 'components/ui/Button'
import { render } from 'test-utils'

it('renders without crashing', () => {
    const { getByText } = render(<Button>Hello Movipe!</Button>)

    expect(getByText(/Hello Movipe!/i)).toBeInTheDocument()
})

const TestProps = () => {
    const [count, setCounter] = useState(0)

    return (
        <Button onClick={() => setCounter(count => count + 1)}>
            Click to increase: {count}
        </Button>
    )
}

it('function properly passing props', () => {
    const { getByText, queryByText } = render(<TestProps />)

    expect(queryByText(/Click to increase: 0/)).toBeDefined()

    fireEvent.click(getByText(/Click to increase/))

    expect(queryByText(/Click to increase: 1/)).toBeDefined()
})
