import { FaCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import ToDoListButton from "./toDoListButton";
import { useMemo } from "react";
import { filterTodos } from "../controllers/filterTodos";

function ToDoList({todos, tab, toggleTodo, deleteTodo}) {
    console.log(todos)
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
    );
    return (
        <>
            <div className="todo-list-container">
                <ul className="todo-list">
                    {
                        visibleTodos.map((todo) => (
                            <li key={todo.id} className={`todo-list-item ${todo.complete ? 'complete' : ''}`}>
                                <div className="todo-list-item-text">
                                    {todo.text}
                                </div>
                                <div className="todo-list-item-buttons">
                                    {todo.complete ? null
                                    : (<ToDoListButton type="icon" icon={<FaCheck/>} todoId={todo.id} toggleTodo={toggleTodo} addClasses={['check']}/>)}
                                    <ToDoListButton type="icon" icon={<FaTrash/>} todoId={todo.id} deleteTodo={deleteTodo} addClasses={['trash']}/>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default ToDoList;