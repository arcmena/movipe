import { Box, Grid } from '@chakra-ui/react'
import { FC } from 'react'

import Header from './Header'

const Layout: FC = ({ children }) => {
    return (
        <Box textAlign="center" bg="gray.900">
            <Header />
            <Grid minH="100vh" p={3}>
                {children}
            </Grid>
        </Box>
    )
}

export default Layout
