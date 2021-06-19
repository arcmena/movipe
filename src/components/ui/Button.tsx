import { Button as Component, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

const Button: FC<ButtonProps> = ({
    colorScheme = 'gray',
    children,
    ...rest
}) => {
    return (
        <Component colorScheme={colorScheme} {...rest}>
            {children}
        </Component>
    )
}

export default Button
