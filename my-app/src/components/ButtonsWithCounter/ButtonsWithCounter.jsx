import { useState } from "react"
import './buttonsWithCounter.css'

function ButtonsWithCounter(){
    const [clicks, setClicks] = useState(0);

    function handleClick(cond){
        if(cond == "countUp"){
            setClicks(clicks + 1)
        }else if(cond == 'reset'){
            setClicks(0)
        }
    }

    return (
        <>
            <div className="buttons-container">
                <div className="button button-countup" onClick={() => handleClick('countUp')}>На меня нажали: {clicks}</div>
                <div className="button button-reset" onClick={() => handleClick('reset')}>Сбросить</div>
            </div>

        </>
    )
}

export default ButtonsWithCounter