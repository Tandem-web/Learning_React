import { lazy } from "react";

const MainPageAsync = lazy (
    () => new Promise(res => {
        setTimeout(() => {
            res(import('./MainPage'))
        }, 2000);
    }) 
)

export default MainPageAsync