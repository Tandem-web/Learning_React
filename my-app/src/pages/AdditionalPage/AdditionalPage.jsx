import ExchangeRatesComponent from "../../components/exchangeRate/ExchangeRatesComponent";

const AdditionalPage = () => {
    return(
        <>
            <div className="page-breadcrumbs">
                Дополнительная страница
            </div>
            <section>
                <div className="section-name">1. Fetch, Axios, XMLHttpRequest</div>
                <div className="section-inner">
                    <ExchangeRatesComponent/>
                </div>
            </section>
        </>
    )
}

export default AdditionalPage