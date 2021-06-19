import { ChakraProvider, theme } from '@chakra-ui/react'
import SearchView from 'components/search/SearchView'
import { MovieProvider } from 'contexts/MovieContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/common/Layout'
import HomeView from './components/home/HomeView'

import { APP_URLS } from './utils/constants'

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <MovieProvider>
                <Router>
                    <Switch>
                        <Layout>
                            <Route
                                exact
                                path={APP_URLS.HOME}
                                component={HomeView}
                            />
                            <Route
                                exact
                                path={APP_URLS.SEARCH}
                                component={SearchView}
                            />
                        </Layout>
                    </Switch>
                </Router>
            </MovieProvider>
        </ChakraProvider>
    )
}
