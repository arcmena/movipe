import { Button as Component, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

const Button: FC<ButtonProps> = ({
    bg = 'gray.700',
    colorScheme = 'black',
    children,
    ...rest
}) => {
    return (
        <Component bg={bg} colorScheme={colorScheme} {...rest}>
            {children}
        </Component>
    )
}

export default Button
