import React from 'react'
import { CgSearch } from 'react-icons/cg';

import { ContentSearch, TitleSearch, ContentForm } from './SearchStyles';
import { FormIcon, FormInput } from '../../Styles/GlobalComponents/contentInput';

const Search = () => {
    return (
        <ContentSearch>
            <TitleSearch>Los mejores precios</TitleSearch>
            <ContentForm>
                <FormIcon>
                    <CgSearch />
                </FormIcon>
                <FormInput >
                    <input type='text' placeholder='¿Qué estas buscando?'/>
                </FormInput>
            </ContentForm>
        </ContentSearch>
    )
}

export default Search;
