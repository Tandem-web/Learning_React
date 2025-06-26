import { useRef } from "react";
import ToDoListButton from "./toDoListButton";
function ToDoListHeader(props) {
    const inputRef = useRef(null);
    
    return (
        <div className="todo-header-container">
            <input type="text" name="todo-input-text" ref={inputRef} id="todo-input-text" placeholder="Введите вашу задачу" className="todo-header-input"/>
            <div className="todo-header-buttons-container">
                <ToDoListButton type={'text'} text={'Добавить'} addTodo={props.addTodo} inputValue={inputRef} addClasses={['todo-add-button']}/>
            </div>
        </div>
    );
}

export default ToDoListHeader;