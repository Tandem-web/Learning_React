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
                props.type == 'text' && props.addTodo != undefined ? (
                    <div 
                        className={`todo-button todo-button-text ${addClasses} ${props.selected ? 'selected': ''}`}
                        onClick={() => props.addTodo(props.inputValue.current?.value)}
                    >
                        {props.text}
                    </div>
                ) : null
            }
            {
                props.type == 'text' && props.tabName == undefined && props.addTodo == undefined ? (
                    <div 
                        className={`todo-button todo-button-text ${addClasses} ${props.selected ? 'selected': ''}`}
                    >
                        {props.text}
                    </div>
                ) : null
            }
            {
                props.type == 'icon' && props.toggleTodo != undefined ? (
                    <div 
                        className={`todo-button todo-button-icon ${addClasses}`}
                        onClick={() => props.toggleTodo(props.todoId)}
                    >
                        {props.icon}
                    </div>   
                ) : null
            }
            {
                props.type == 'icon' && props.deleteTodo != undefined ? (
                    <div 
                        className={`todo-button todo-button-icon ${addClasses}`}
                        onClick={() => props.deleteTodo(props.todoId)}
                    >
                        {props.icon}
                    </div>   
                ) : null
            }
        </>
    );
}
export default ToDoListButton;