import { useCallback, useState } from 'react';
import ChildButton from './components/ChildButton';
import './TestUseCallback.css'

const handlerClick = () => {
    console.log('Button clicked');
}

function TestUseCallback() {
    const [count, setCount] = useState(0);

    const randomFlag = Math.random() > 0.5;

    console.log(randomFlag)

    const handlerClickCallback = useCallback(() => {
        console.log('Button clicked');
    }, []);

    return (
        <div className='use-callback-container'>
            <ChildButton onClick={handlerClick} text="Кнопка без UseCallback" componentNumber="1"/>
            <button onClick={() => setCount(count+1)}>+1 = {count}</button>
            <ChildButton onClick={handlerClickCallback} text="Кнопка с UseCallback" componentNumber="2"/>
        </div>
    );
}

export default TestUseCallback;



// 1. ForwardRef (Разница декларативного и императивного подхода к ui)
// 2. TypeScript
//     - Документация
//     - https://www.typescriptlang.org/cheatsheets/
// 3. EventLoop
// 4. Асинхронность. Поточность кода
// 5. Замыкание, Чистые функции, Рекурсия, Стек
// 6. HOF (Hight Order Function)
// 7. Prototype, Наследование от обычного в ООП
// 8. Лексческое область видимость (Видимость функций, переменных и т.д) -> 5.
// 9. Методы массивов
// 10. Работы с ссылочными типами данных. Копирование через Spread
// 11. Сборщик мусора
// 12. Map, Set (Общие вопросы про структуры данных)

// =================================
// 1. Виды запросы сервера (Post, Get и т.д)
// 2. Fetch, axios, XMLHttpRequest
// 3. Rest Api, Graph QL, WebSocket

// =================================
// 1. Базовые алгоритмы
//     - https://shadhelper.notion.site/e03c5086f74b495488e2af71058c51c3
