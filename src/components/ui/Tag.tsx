import { FC } from 'react'
import { Box as Component, BoxProps } from '@chakra-ui/react'

const Tag: FC<BoxProps> = ({
    bg = 'gray.700',
    textColor = 'gray.300',
    rounded = 'xl',
    children,
    ...rest
}) => {
    return (
        <Component
            bg={bg}
            textColor={textColor}
            rounded={rounded}
            fontSize="md"
            fontWeight="medium"
            py={1}
            px={2}
            textAlign="left"
            as="button"
            {...rest}
        >
            {children}
        </Component>
    )
}

export default Tag
