import { useState } from 'react'
import './LifeCycleFunctionComponent.css'
import TestCube from "./TestCube";

function LifeCycleFunctionComponent() {
    const [showCube, setShowCube] = useState(false);

    function handleSwitchInput(){
        setShowCube(!showCube);
    }
    return (
            <>
                <div className="lifeCycleSwitch-container">
                    <input type="checkbox" name="lifeCycleSwitch_2" onInput={handleSwitchInput}id="lifeCycleSwitch_2" className="lifeCycleSwitch-input"/>
                    <label htmlFor="lifeCycleSwitch_2" className="lifeCycleSwitch-label">
                    </label>
                </div>
                {
                    showCube ? (
                        <TestCube value={0}/>
                    )
                    :(
                        <></>
                )}
            </>
    )
}
export default LifeCycleFunctionComponent;