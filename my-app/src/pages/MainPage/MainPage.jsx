import React, { useState } from "react";
import ButtonsWithCounter from "../../components/ButtonsWithCounter/ButtonsWithCounter";
import LifeCycleClassComponent from "../../components/LifeCycleClassComponent/LifeCycleClassComponent";
import LifeCycleFunctionComponent from "../../components/LifeCycleFunctionComponent/LifeCycleFunctionComponent";
import ToDo from "../../components/TodoList/ToDo";
import TabProvider from "../../components/TodoList/tab/TabProvider";
import Modal from "../../components/Modal/Modal";
import TestUseReduce from "../../components/TestUseReduce/TestUseReduce";
import TestUseCallback from "../../components/TestUseCallback/TestUseCallback";
import TestForwardRef from "../../components/TestForwardRef/TestForwardRef";

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <section>
                <div className="section-name">5. Portals</div>
                <div className="section-inner">
                    <div className="portals-open-modal-button" onClick={()=>setIsModalOpen(true)}>Открыть модальное окно</div>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    >
                        <h2>Заголовок модального окна</h2>
                        <p>Это содержимое модального окна</p>
                    </Modal>
                </div>
            </section>
            <section>
                <div className="section-name">5. UseReduce</div>
                <div className="section-inner">
                    <TestUseReduce/>
                </div>
            </section>
            <section>
                <div className="section-name">6. UseCallback + React.memo</div>
                <div className="section-inner">
                    <TestUseCallback/>
                </div>
            </section>
            <section>
                <div className="section-name">6. UseRef + ForwardRef</div>
                <div className="section-inner">
                    <TestForwardRef/>
                </div>
            </section>
        </>
    )
}

export default MainPage