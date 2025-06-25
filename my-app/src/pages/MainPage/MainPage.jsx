import React from "react";
import ButtonsWithCounter from "../../components/ButtonsWithCounter/ButtonsWithCounter";
import LifeCycleClassComponent from "../../components/LifeCycleClassComponent/LifeCycleClassComponent";
import LifeCycleFunctionComponent from "../../components/LifeCycleFunctionComponent/LifeCycleFunctionComponent";
import ToDo from "../../components/TodoList/ToDo";
import TabProvider from "../../components/TodoList/tab/TabProvider";

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
                        <section>
                <div className="section-name">4. To-do List</div>
                <div className="section-inner">
                    <TabProvider>
                        <ToDo/>
                    </TabProvider>      
                </div>
            </section>
        </>
    )
}

export default MainPage