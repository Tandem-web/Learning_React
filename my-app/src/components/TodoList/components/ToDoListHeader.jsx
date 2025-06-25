import ToDoListButton from "./toDoListButton";
function ToDoListHeader() {
    return (
        <div className="todo-header-container">
            <input type="text" name="" id="" placeholder="Введите вашу задачу" className="todo-header-input"/>
            <div className="todo-header-buttons-container">
                <ToDoListButton type={'text'} text={'Добавить'} addClasses={['todo-add-button']}/>
            </div>
        </div>
    );
}

export default ToDoListHeader;