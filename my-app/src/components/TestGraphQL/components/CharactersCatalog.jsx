import { useMemo } from "react";
import CharacterCard from "./CharacterCard";
import filterCharacters from "../features/lib/filterCharacters";
import { TbUfo } from "react-icons/tb";



function CharactersCatalog(props) {
    const {isLoading, data, searchQuery} = props;

    const filteredCharacters = useMemo(() => (
        filterCharacters(data, searchQuery)
    ), [data, searchQuery]);

    return (
        <>
            <div className="catalog-cards-container">
                {
                    isLoading ? (
                        Array(3).fill(0).map((_, index) => (
                            <CharacterCard key={`catalog-card-${index}`}isLoading={isLoading}/>
                        ))
                    ):(
                        filteredCharacters.length > 0 ? (
                            filteredCharacters.map((info, index) => (
                                <CharacterCard key={`catalog-card-${index}`} info={info} />
                            ))
                        ) : (
                            <div className="no-results-message">
                                <TbUfo className="no-results-message-icon"/>
                                <div className="no-results-message-text">Не удалось никого найти...</div>
                            </div>
                        )
                    )
                }
            </div>
        </>
    );
}

export default CharactersCatalog;