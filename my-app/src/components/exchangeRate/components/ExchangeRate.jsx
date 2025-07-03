function ExchangeRate(props) {
    const {charCode, value} = props
    return (
        <div className="exchange-rate-item">
            <div className="exchange-rate-valute-char-code">{charCode}</div>
            <div className="exchange-rate-valute-value">{value}</div>
        </div>
    );
}

export default ExchangeRate;