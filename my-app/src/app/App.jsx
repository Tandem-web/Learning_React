// import { useState } from 'react'
import './styles/App.css'
import HeaderSection from '../section/header/HeaderSection'

import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import MainPageAsync from "../pages/MainPage/MainPage.async";
import AdditionalPageAsync from "../pages/AdditionalPage/AdditionalPage.asyc"
import Loader from '../components/loader/loader';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='page'>
        <HeaderSection/>
        <Suspense fallback={<Loader/>}> 
            <Routes>
                <Route path={'/'} element={<MainPageAsync/>}/>
                <Route path={'/additional'} element={<AdditionalPageAsync/>}/>
            </Routes>
        </Suspense>
      </div>

    </>
  )
}

export default App
