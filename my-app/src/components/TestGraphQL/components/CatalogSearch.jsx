import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const rickAndMortySearchPlaceholders = [
  "Искать портал...",
  "Где мой Морти?",
  "Найти Рика...",
  "Искать клонов...",
  "Портал в другую реальность...",
  "Искать Смерть...",
  "Найти Мистера Мезекиса...",
  "Искать приключения...",
  "Где бесконечные миры?",
  "Искать безумие..."
];

const getRandomPlaceholder = () => {  
    const randomIndex = Math.floor(Math.random() * rickAndMortySearchPlaceholders.length);  
    return rickAndMortySearchPlaceholders[randomIndex];  
};

function CatalogSearch(props) {
    const { setSearch } = props;

    const [placeholder, setPlaceholder] = useState(getRandomPlaceholder());  

    const onChangeHandler = (element) => {
        setSearch(element.target.value);
    }

    return (
        <>
            <div className="catalog-search-wrapper">
                <div className="catalog-search-container">
                    <input placeholder={placeholder} onChange={onChangeHandler} type="text" id="catalog-search-input"  className="catalog-search"/>
                    <IoSearch className="catalog-search-icon"/>
                </div>                
            </div>
        </>
    );
}

export default CatalogSearch;