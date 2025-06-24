import { useEffect, useState } from 'react'

function TestCube(props){
    console.log(props.value)
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        console.log("Updating || 1. componentDidUpdate");
    }, [value]); // Эффект выполнится каждый раз, когда count изменится

    useEffect(() => {
        console.log("Mounting || 1. componentDidMount");
        return () => {
            console.log("Unmounting || 1. componentWillUnmount");
        };
    }, []);


    return (
        <>
            <div className="lifeCycle-test-cube" onClick={() => setValue(value + 1)}>
                Value: {value}
            </div>
        </>
    )
}

export default TestCube;