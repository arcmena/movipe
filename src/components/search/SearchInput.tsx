import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ChangeEvent, FC } from 'react'
import { FiSearch } from 'react-icons/fi'

interface ISearchInput {
    inputValue: string
    handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: FC<ISearchInput> = ({ inputValue, handleChangeInput }) => {
    return (
        <InputGroup bg="gray.700" py={2} px={4} rounded="2xl">
            <InputLeftElement
                pointerEvents="none"
                color="gray.500"
                ml={3}
                mt={2}
                children={<FiSearch size={25} />}
            />
            <Input
                type="text"
                placeholder="Search"
                border="none"
                color="gray.100"
                _placeholder={{ color: 'gray.500', fontWeight: 'medium' }}
                value={inputValue}
                onChange={handleChangeInput}
            />
        </InputGroup>
    )
}

export default SearchInput
