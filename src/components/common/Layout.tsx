import { Box } from '@chakra-ui/react'
import { FC } from 'react'

import { HEADER_HEIGHT } from 'utils/constants'

import Header from './Header'

const Layout: FC = ({ children }) => {
    return (
        <Box textAlign="center" bg="gray.900">
            <Header />
            <Box minH={`calc(100vh - ${HEADER_HEIGHT})`} px={4} pb={4}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout
