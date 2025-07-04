const getStatusClass = (status) => {
  switch (status) {
    case 'Alive':
      return 'status-alive';
    case 'Dead':
      return 'status-dead';
    case 'unknown':
      return 'status-unknown';
    default:
      return '';
  }
};

function CharacterCard(props) {
    const { isLoading,  info} = props;

    console.log(info)
    return (
       <>
            <div className={`character-card-container ${isLoading ? 'character-card-loader' : ''}`}>
                <div className={`character-status-flag ${isLoading ? '' : getStatusClass(info.status)}`}>
                    {isLoading ? '' : info.status}
                </div>
                <div className="character-card-img">
                    {
                        isLoading ? (
                            <></>
                        ):(
                            <img src={info.image} alt={info.name} />
                        )
                    }
                </div>
                <div className="character-card-info">
                    <div className="character-card-info-row">
                        <div className="character-card-info-row-line-name">{isLoading ? '' : 'Name'}</div>
                        <div className="character-card-info-row-line-value">{isLoading ? '' : info.name}</div>
                    </div>
                    <div className="character-card-info-row">
                        <div className="character-card-info-row-line-name">{isLoading ? '' : 'Gender'}</div>
                        <div className="character-card-info-row-line-value">{isLoading ? '' : info.gender}</div>
                    </div>
                </div>
            </div>
       </> 
    );
}

export default CharacterCard;