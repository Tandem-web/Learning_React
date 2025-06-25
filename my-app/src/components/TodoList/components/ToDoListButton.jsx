import { useContext } from "react";
import { TabContext } from "../tab/TabContext";

function ToDoListButton(props) {
    let addClasses = '';

    if(props.addClasses){
        addClasses = props.addClasses.join(' ')
    }
    
    const { changeTab } = useContext(TabContext);

    return (
        <>
            {
                props.type == 'text' && props.tabName != undefined ? (
                    <div 
                        className={`todo-button todo-button-text ${addClasses} ${props.selected ? 'selected': ''}`}
                        onClick={() => changeTab(props.tabName)}
                    >
                        {props.text}
                    </div>
                ) : null
            }
            {
                props.type == 'text' && props.tabName == undefined ? (
                    <div 
                        className={`todo-button todo-button-text ${addClasses} ${props.selected ? 'selected': ''}`}
                    >
                        {props.text}
                    </div>
                ) : null
            }
            {
                props.type == 'icon' ? (
                    <div className={`todo-button todo-button-icon ${addClasses}`}>
                        {props.icon}
                    </div>   
                ) : null
            }
        </>
    );
}
export default ToDoListButton;