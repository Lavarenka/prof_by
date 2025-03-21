import "./AboutUsSection.css"

import FadeComponent from "../FadeComponent.jsx";
import {Button} from "antd";

export default function AboutUsSection() {
    return (
        < div className="fix_block" id='AboutUs'>

            <div className="grid lg:grid-cols-2 lg:gap-2 my-5">
                <FadeComponent direction="left" delay={100}>
                    <div className="px-10">
                        <div className=""><h2>Попробуй себя в любой профессии за 1 день!</h2></div>
                        <br/>
                        <ul>
                            <li>Вдохновляем на перемены.</li>
                            <li>Помогаем интересно провести время</li>
                            <li>Никакой скучной теории! Все на практике.</li>
                        </ul>
                        <br/>
                        <div className="">Будь кем хочешь - проект, который поможет вам попробовать себя в любой
                            профессии
                            за 1 день.
                        </div>


                    </div>
                </FadeComponent>
                <FadeComponent direction="right" delay={300}>
                    <div className="px-2 mt-40">
                        <div className="">С нами вы:</div>
                        <br/>
                        <ul>
                            <li>Осуществите свою мечту стать актером/актрисой, грумером, фотомоделью, певцом/певицей или
                                кем-либо другим.
                            </li>
                            <li>Сэкономите деньги на курсах и поймете: действительно ли вам интересна профессия. Ведь мы
                                предлагаем много практики под руководством эксперта.
                            </li>
                            <li>Интересно и с пользой проведете время. На память останутся не только новые впечатления,
                                но и
                                живые фото.
                            </li>
                            <li>Узнаете больше о своей профессии от опытных специалистов с любой точки мира на ваш
                                выбор.
                            </li>
                        </ul>
                    </div>
                </FadeComponent>


            </div>
            <div className="flex my-10 justify-center">
                <a href="#form"><Button className="lg:w-200 ">Подать заявку</Button></a>

            </div>

        </div>
    )
}