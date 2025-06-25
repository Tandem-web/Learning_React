import './styles/ToDoList.css'
import ToDoListHeader from './components/ToDoListHeader';
import ToDoListFilter from './components/ToDoListFilter';
import ToDoList from './components/ToDoList';
import { createToDo } from './controllers/createTodos';
import { useContext, useEffect, useState } from 'react';
import { TabContext } from './tab/TabContext';


function ToDo() {
    const [todos, setTodos] = useState([]);
    const { tab, changeTab } = useContext(TabContext); 

    useEffect(() => {
        setTodos(createToDo());
    }, []);


    return (    
        <div className='todo-container'>
            <ToDoListHeader/>
            <ToDoListFilter/>
            <ToDoList todos={todos} tab={tab}/>
        </div>
    );
}

export default ToDo;