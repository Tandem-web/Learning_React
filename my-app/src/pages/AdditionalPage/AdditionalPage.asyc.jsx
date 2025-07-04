import { lazy } from "react";

const AdditionalPageAsync = lazy (
    () => new Promise(res => {
        setTimeout(() => {
            res(import('./AdditionalPage'))
        }, 200);
    }) 
)

export default AdditionalPageAsync