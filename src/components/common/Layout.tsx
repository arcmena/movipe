import { Box, Grid } from '@chakra-ui/react'
import { FC } from 'react'

const Layout: FC = ({ children }) => {
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                {children}
            </Grid>
        </Box>
    )
}

export default Layout
