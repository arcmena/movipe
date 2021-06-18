import { ChakraProvider, theme } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/common/Layout'
import HomeView from './components/home/HomeView'

import { APP_URLS } from './utils/constants'

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path={APP_URLS.HOME}
                            component={HomeView}
                        />
                    </Switch>
                </Router>
            </Layout>
        </ChakraProvider>
    )
}
