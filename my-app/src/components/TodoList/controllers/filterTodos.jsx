export function filterTodos(todos, tab) {
    return todos.filter(todo => {
        if (tab === 'all') {
        return true;
        } else if (tab === 'active') {
        return !todo.complete;
        } else if (tab === 'complete') {
        return todo.complete;
        }
    });
}