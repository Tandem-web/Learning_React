import React from "react";
import './LifeCycleClassComponent.css'
import TestCube from "./TestCube";

class LifeCycleClassComponent extends React.Component{
    constructor (props){
        super(props);

        this.handleSwitchInput = this.handleSwitchInput.bind(this);
        this.state = {showCube: false};
    }

    handleSwitchInput() {
        this.setState({showCube: !this.state.showCube});
    }
    render(){
        return(
            <>
                <div className="lifeCycleSwitch-container">
                    <input type="checkbox" name="lifeCycleSwitch" onInput={this.handleSwitchInput} id="lifeCycleSwitch" className="lifeCycleSwitch-input"/>
                    <label htmlFor="lifeCycleSwitch" className="lifeCycleSwitch-label">
                    </label>
                </div>
                {
                    this.state.showCube ? (
                        <TestCube value={0}/>
                    )
                    :(
                        <></>
                )}
            </>
        )
    }
}
export default LifeCycleClassComponent;