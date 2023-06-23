import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { redirect } from 'react-router';
import { useState } from 'react'

const SearchBar = () => {
    const theme = useMantineTheme();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        // console.log(`/search/${searchQuery}`)
        return redirect(`/search`)
    }

    return (
        <TextInput
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            mb="xs"
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
            radius="xl"
            size="sm"
            rightSection={
                <ActionIcon size={28} radius="xl" color="gray" variant="filled" onClick={handleSearch}>
                    {theme.dir === 'ltr' ? (
                        <IconArrowRight size="1.1rem" stroke={1.5} />
                    ) : (
                        <IconArrowLeft size="1.1rem" stroke={1.5} />
                    )}
                </ActionIcon>
            }
            rightSectionWidth={42}
            placeholder="Search for News"
            styles={(theme) => ({
                input: {
                '&:focus-within': {
                    borderColor: "gray",
                },
                },
            })}
        />
    );

}

export default SearchBar