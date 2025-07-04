import { useState } from 'react';
import CatalogSearch from './components/CatalogSearch';
import './style/TestGraphQL.css'
import CharactersCatalog from './components/CharactersCatalog';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from './features/characters-catalog/queries';

function TestGraphQL() {
    const [searchQuery, setSearchQuery] = useState('');
    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);

    return (
        <>
            <div className='catalog-container'>
                <CatalogSearch setSearch={setSearchQuery}/>
                <CharactersCatalog searchQuery={searchQuery} isLoading={loading} data={data ? data.characters.results : []}/>
            </div>
        </>
    );
}

export default TestGraphQL;