import ExchangeLoader from "./ExchangeLoader";
import ExchangeRate from "./ExchangeRate";

function ExchangeRates(props) {
    const {isLoading, rates} = props;

    return (
        <>
            <div className='exchange-rates-container'>
                {
                    isLoading ? (
                        Array(12).fill(0).map((_, index) => (
                            <ExchangeLoader key={`loader-${index}`} />
                        ))
                    ):(
                        rates.map((rate, index) => (
                            <ExchangeRate charCode={rate.CharCode} value={rate.Value} key={`exchange-rate-${index}`}/>
                        ))
                    )
                }
            </div>
        </>
    );
}

export default ExchangeRates;