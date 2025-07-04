import { lazy } from "react";

const AdditionalPageAsync = lazy (
    () => new Promise(res => {
        setTimeout(() => {
            res(import('./AdditionalPage'))
        }, 2000);
    }) 
)

export default AdditionalPageAsync