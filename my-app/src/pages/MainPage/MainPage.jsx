import React from "react";
import ButtonsWithCounter from "../../components/ButtonsWithCounter/ButtonsWithCounter";
import LifeCycleClassComponent from "../../components/LifeCycleClassComponent/LifeCycleClassComponent";
import LifeCycleFunctionComponent from "../../components/LifeCycleFunctionComponent/LifeCycleFunctionComponent";

const MainPage = () => {
    return(
        <>
            <div className="page-breadcrumbs">
                Главная страница
            </div>

            <section>
                <div className="section-name">1. Кнопочки со счётчиками</div>
                <div className="section-inner">
                    <div className="d-flex d-flex-gap-20 d-flex-sp-btw">
                        <ButtonsWithCounter/>
                        <ButtonsWithCounter/>
                        <ButtonsWithCounter/>
                    </div>
                </div>
            </section>
            <section>
                <div className="section-name">2. Жизненный Цикл | Классовый компонент</div>
                <div className="section-inner">
                    <LifeCycleClassComponent/>
                </div>
            </section>
            <section>
                <div className="section-name">3. Жизненный Цикл | Функциональный компонент</div>
                <div className="section-inner">
                    <LifeCycleFunctionComponent/>
                </div>
            </section>
        </>
    )
}

export default MainPage