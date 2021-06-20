import { FC } from 'react'
import { Tag as Component, TagProps } from '@chakra-ui/react'

const Tag: FC<TagProps> = ({ bg = 'gray.700', children, ...rest }) => {
    return (
        <Component bg={bg} {...rest}>
            {children}
        </Component>
    )
}

export default Tag
