function RequestRadioButton(props) {
    const {checked, value, setSelectedRadio, children} = props;
    return (
        <>
            <label className={`${checked ? 'checked' : ''}`}>
                <input
                    id={`request_input_${value}`}
                    name="request_input" 
                    type="radio"
                    value={value}

                    checked={checked}
                    onChange={() => setSelectedRadio(value)}
                />
                {children}
            </label>        
        </>
    );
}

export default RequestRadioButton;