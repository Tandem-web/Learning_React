import { memo } from "react";

const ChildButton = memo((props) => {
    const { onClick, text, componentNumber} = props;

    console.log(`Компонент изменён ${componentNumber}`);
    return (
        <>
            <div className="use-callback-button" onClick={() => onClick()}>{text}</div>
        </>
    );
});

export default ChildButton;