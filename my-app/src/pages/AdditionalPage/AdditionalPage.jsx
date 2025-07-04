import ExchangeRatesComponent from "../../components/exchangeRate/ExchangeRatesComponent";
import TestGraphQL from "../../components/TestGraphQL/TestGraphQL";
import TestWebSocket from "../../components/TestWebSocket/TestWebSocket";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});



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

            <section>
                <div className="section-name">3. GraphQL</div>
                <div className="section-inner">
                    <ApolloProvider client={client}>
                        <TestGraphQL/>
                    </ApolloProvider>
                </div>
            </section>
        </>
    )
}

export default AdditionalPage