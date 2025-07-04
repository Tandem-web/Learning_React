export default function filterCharacters(data, searchQuery = '') {
    console.log(data)
    if(!data){
        return [];
    }

    const query = searchQuery.toLowerCase().trim(); 
    return data.filter(character => {
        return character.name.toLowerCase().includes(query);
    });
}