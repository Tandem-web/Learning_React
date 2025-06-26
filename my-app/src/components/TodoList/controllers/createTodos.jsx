export function createToDo () {
    const toDos = [];

    for (let i = 0; i < 50; i++) {
        toDos.push(
            {
                id: i,
                text: `My ToDo ${i+1}`,
                complete: Math.random() > 0.5
            }
        )
    }

    return toDos
}

