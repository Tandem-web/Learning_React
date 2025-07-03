import { useEffect, useReducer, useState } from 'react';
import './styles/exchangeRate.css'
import ExchangeRateHeader from './components/ExchangeRateHeader';
import ExchangeRates from './components/ExchangeRates';
import axios from 'axios';

const initiaRequestType = {type: 'fetch'};
const requestTypesName = ['fetch', 'axios', 'XMLHttpRequest'];
const exchangeRateApiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

function reducer(state, action){
    switch (action.type) {
        case 'fetch':
            return {type: 'fetch'};
        case 'axios':
            return {type: 'axios'};
        case 'XMLHttpRequest':
            return {type: 'XMLHttpRequest'};
        default:
            return state
    }
}

function ExchangeRatesComponent() {
    const [rates, setRates] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const [requestType, dispath] = useReducer(reducer, initiaRequestType);
    
    function dataProcessing(data){
        setTimeout(() => {
            setRates(Object.values(data.Valute))
            setLoadingState(false);
        }, 2000);
    }
    async function sendRequest(){
        setLoadingState(true);
        try {
            switch (requestType.type) {
                case 'fetch':
                    fetch(exchangeRateApiUrl)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        dataProcessing(data);
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });
                    break;
                case 'axios':
                        axios.get(exchangeRateApiUrl).then((response) => {
                            if(response.status == 200){
                                dataProcessing(response.data);
                            }
                        });
                    break;
                case 'XMLHttpRequest':
                    { 
                        const xhr = new XMLHttpRequest();
                        xhr.open('GET', exchangeRateApiUrl, true);
                        xhr.onload = () => {
                            if (xhr.status === 200) {
                                const data = JSON.parse(xhr.responseText);
                                dataProcessing(data);
                            }
                        };
                        xhr.send();
                    }
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        sendRequest();
    }, [requestType]);

    return (
        <>
            <ExchangeRateHeader requestType={requestType} dispath={dispath} requestTypes={requestTypesName}/>
            <ExchangeRates isLoading={loadingState} rates={rates}/>
        </>
    );
}

export default ExchangeRatesComponent;