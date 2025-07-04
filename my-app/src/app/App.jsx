import './styles/App.css'
import HeaderSection from '../section/header/HeaderSection'

import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import MainPageAsync from "../pages/MainPage/MainPage.async";
import AdditionalPageAsync from "../pages/AdditionalPage/AdditionalPage.asyc"
import Loader from '../components/loader/loader';

function App() {
  return (
    <>
      <div className='page'>
          <HeaderSection/>
          <Routes>
              <Route key="route-0" path={'/'} element={(
                <Suspense fallback={<Loader/>}> 
                  <MainPageAsync/>
                </Suspense>
              )}/>
              <Route key="route-1" path={'/additional'} element={(
                <Suspense fallback={<Loader/>}> 
                  <AdditionalPageAsync/>
                </Suspense>
              )}/>
          </Routes>
      </div>

    </>
  )
}

export default App
