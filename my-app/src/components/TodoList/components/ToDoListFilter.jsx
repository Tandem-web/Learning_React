import { useContext } from "react";
import ToDoListButton from "./toDoListButton";
import { TabContext } from "../tab/TabContext";

function ToDoListFilter() {
    const { tab } = useContext(TabContext);
    return (
        <div className="todo-filter-container">
            <ToDoListButton type="text" text="Все" tabName="all" selected={tab == 'all' ? true : false} addClasses={['todo-filter-button']}/>
            <ToDoListButton type="text" text="Активные" tabName="active" selected={tab == 'active' ? true : false} addClasses={['todo-filter-button']}/>
            <ToDoListButton type="text" text="Выполненные" tabName="complete" selected={tab == 'complete' ? true : false} addClasses={['todo-filter-button']}/>
        </div>
    );
}

export default ToDoListFilter;