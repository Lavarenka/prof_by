import './HowItSection.css'
import FadeComponent from "../FadeComponent.jsx";

export default function HowItSection() {
    return (
        <>
            <div className="how_it" id='HowIt'>
                <FadeComponent direction="bottom" delay={100}>
                    <div className="fix_block md:py-20 md:px-20 p-5">
                        <div className="my-10 flex justify-center "><h2 className=' how_it_h2 font-semibold'>Как происходит</h2></div>
                        <br/>
                        <div className="text-lg">
                            <div className="my-3 ">
                                <p className='how_it_text'> 1. <span className=" font-bold">Выбор профессии. </span>
                                    Вы выбираете профессию, в которой хотели бы себя попробовать. Профессию можно
                                    выбрать из
                                    списка или предложить свою. (Примечание: при нажатии на слово “Список” появляется
                                    список
                                    ниже)</p>
                            </div>
                            <div className="my-3 how_it_text">
                                2. <span className=" font-bold">Еще не определились? </span>
                                Если не знаете, в какой сфере хотите себя попробовать, нажмите КНОПКА ПОДОБРАТЬ
                                ПРОФЕССИЮ —
                                и наш специалист поможет определиться с выбором.
                            </div>
                            <div className="my-3 how_it_text">
                                3. <span className="font-bold">Переходим к интересному! </span>
                                Мы организуем полное погружение в эту сферу, чтобы вы прямо на практике испытали себя в
                                новой роли под руководством эксперта.
                            </div>
                            <div className="my-3 how_it_text">
                                4. <span className="font-bold">Где проходит? </span>
                                Мероприятие может проходить как в неформальной обстановке, так и в месте работы
                                представителя профессии.
                            </div>

                        </div>
                    </div>
                </FadeComponent>
            </div>
        </>
    )
}