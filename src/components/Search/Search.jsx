import React from 'react'
import { CgSearch } from 'react-icons/cg';

import { ContentSearch, TitleSearch, ContentForm, ContentIcon, Form } from './SearchStyles';

const Search = () => {
    return (
        <ContentSearch>
            <TitleSearch>Los mejores precios</TitleSearch>
            <ContentForm>
                <ContentIcon>
                    <CgSearch />
                </ContentIcon>
                <Form >
                    <input type='text' placeholder='¿Qué estas buscando?'/>
                </Form>
            </ContentForm>
        </ContentSearch>
    )
}

export default Search;
