import { useState } from "react";
import RequestRadioButton from "./requestRadioButton";

function ExchangeRateHeader(props) {
    const {requestType, dispath, requestTypes} = props;

    const [selectedRadio, setSelectedRadio] = useState(requestType.type);
    

    return (
        <div className="exchange-rate-header-container">
            <div className="exhange-rate-header-request-types-container">
                <ul>
                    {
                        requestTypes.map((request, index) => (
                            <li key={`request_${index}`}>
                                <RequestRadioButton checked={selectedRadio == request} value={request} setSelectedRadio={setSelectedRadio}>
                                    {request}
                                </RequestRadioButton>    
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="exhange-rate-header-request-submit" onClick={() => dispath({type: selectedRadio})}>Использовать!</div>
        </div>
    );
}

export default ExchangeRateHeader;