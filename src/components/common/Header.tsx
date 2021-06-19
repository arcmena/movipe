import { Flex, Heading } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

import Button from 'components/ui/Button'

const Header = () => {
    return (
        <Flex justifyContent="space-between" alignItems="center" px={6} py={4}>
            <Heading color="gray.200" size="lg" fontStyle="italic">
                movipe
            </Heading>

            <Button rounded="3xl" colorScheme="black" bg="gray.700">
                <FiSearch size={18} />
            </Button>
        </Flex>
    )
}

export default Header
