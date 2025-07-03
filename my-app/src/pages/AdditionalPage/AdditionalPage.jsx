import ExchangeRatesComponent from "../../components/exchangeRate/ExchangeRatesComponent";
import TestWebSocket from "../../components/TestWebSocket/TestWebSocket";

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

            <section>
                <div className="section-name">2. WebSocket</div>
                <div className="section-inner">
                    <TestWebSocket/>
                </div>
            </section>
        </>
    )
}

export default AdditionalPage