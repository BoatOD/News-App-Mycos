import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

const SearchBar = () => {
    const theme = useMantineTheme();

    return (
        <TextInput
            mb="xs"
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
            radius="xl"
            size="sm"
            rightSection={
                <ActionIcon size={28} radius="xl" color="gray" variant="filled">
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