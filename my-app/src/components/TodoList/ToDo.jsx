import './styles/ToDoList.css'
import ToDoListHeader from './components/ToDoListHeader';
import ToDoListFilter from './components/ToDoListFilter';
import ToDoList from './components/ToDoList';
import { createToDo } from './controllers/createTodos';
import { useContext, useEffect, useState, useOptimistic, startTransition} from 'react';
import { TabContext } from './tab/TabContext';


function ToDo() {
    const [todos, setTodos] = useState([]);
    const { tab } = useContext(TabContext); 
    const [optimisticTodos, optimisticActions] = useOptimistic(
        todos,
        (state, { type, payload }) => {
            switch(type) {
                case 'ADD':
                    return [...state, payload]
                case 'TOGGLE':
                    return state.map(todo => 
                        todo.id === payload ? {...todo, complete: true} : todo
                    )
                case 'DELETE':
                    return state.filter(todo => todo.id !== payload)
                default:
                    return state
            }
        }
    )

    async function handlerAddTodo(inputValue){
        if (!inputValue?.trim()) return;

        let todoNewItem = {
            id: optimisticItems.length + 1,
            text: `${inputValue}`,
            complete: false
        }
        startTransition(() => {
            optimisticActions({ type: 'ADD', payload: todoNewItem })
        })
        
        
        try {
            await mockApiCall(2500)
            setTodos(prev => [...prev, todoNewItem]);

        } catch (error) {
            console.error('Ошибка при добавлении:', error);
        }
    }

    async function toggleTodo(id) {
        optimisticActions({ type: 'TOGGLE', payload: id })
        try {
            await mockApiCall(1000)
            setTodos(prev => prev.map(todo => 
                todo.id === id ? {...todo, complete: true} : todo
            ))
        } catch (error) {
            console.error('Ошибка изменения:', error)
        }
    }
    async function deleteTodo(id) {
        // Оптимистичное обновление - сразу удаляем
        optimisticActions({ type: 'DELETE', payload: id })
        try {
            // Имитация запроса к серверу
            await mockApiCall(1000)
            // Подтверждаем удаление в основном состоянии
            setTodos(prev => prev.filter(todo => todo.id !== id))
        } catch (error) {
            console.error('Ошибка удаления:', error)
            // При ошибке состояние автоматически вернётся к предыдущему
        }
    }

    // Имитация API
    const mockApiCall = (delay) => 
        new Promise(resolve => setTimeout(resolve, delay))

    useEffect(() => {
        setTodos(createToDo());
    }, []);


    return (    
        <div className='todo-container'>
            <ToDoListHeader addTodo={handlerAddTodo}/>
            <ToDoListFilter/>
            <ToDoList todos={optimisticTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}tab={tab}/>
        </div>
    );
}

export default ToDo;