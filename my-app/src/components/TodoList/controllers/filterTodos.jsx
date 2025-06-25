export function filterTodos(todos, tab) {
    console.log(tab)
    return todos.filter(todo => {
        console.log(todo)
        
        if (tab === 'all') {
        return true;
        } else if (tab === 'active') {
        return !todo.complete;
        } else if (tab === 'complete') {
        return todo.complete;
        }
    });
}