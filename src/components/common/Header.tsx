import { Flex, Heading } from '@chakra-ui/react'
import { FiSearch, FiX } from 'react-icons/fi'

import Button from 'components/ui/Button'
import { FC } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { APP_URLS } from 'utils/constants'

const Header: FC = () => {
    const browserLocation = useLocation()
    const browserHistory = useHistory()

    const isOnSearchPage: boolean = browserLocation.pathname === APP_URLS.SEARCH

    return (
        <Flex justifyContent="space-between" alignItems="center" px={6} py={4}>
            <Heading color="gray.200" size="lg" fontStyle="italic">
                movipe
            </Heading>

            <Button
                rounded="3xl"
                colorScheme="black"
                bg="gray.700"
                onClick={() =>
                    isOnSearchPage
                        ? browserHistory.push(APP_URLS.HOME)
                        : browserHistory.push(APP_URLS.SEARCH)
                }
            >
                {isOnSearchPage ? <FiX size={18} /> : <FiSearch size={18} />}
            </Button>
        </Flex>
    )
}

export default Header
