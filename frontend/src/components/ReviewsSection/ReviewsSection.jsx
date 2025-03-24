import './ReviewsSection.css'
import {Carousel} from 'antd';
import user_1 from './img_review/user_1.png'
import user_2 from './img_review/user_2.png'




export default function ReviewsSection() {
    return (
        <div className="review_section p-10" id="Review">
            <div className="fix_block">
                <div className="my-10 flex  justify-center"><h2 className='text-xl font-semibold'>Отзывы</h2></div>
                <div className="">
                    <Carousel arrows autoplay infinite={true}  dots={false}>
                        <div>
                            <div className="">
                                <div className=" image-container_review  m-auto my-5"><img src={user_1} alt=""/></div>
                                <div className="px-5">
                                    <div className="text-center text-xl font-semibold my-2">Михаил, IT-специалист:</div>
                                    <div className="italic text-center ">Проект "Будь кем хочешь" смог удивить меня
                                        готовностью браться за
                                        разнообразные запросы. Мне хотелось получить опыт и знаний столярном деле, так
                                        как я хотел изготовить рабочий стол. И мне организовали встречу с мастером,
                                        который отнесся к этому серьезно и поделился со мной бесценными знаниями и
                                        опытом, за что я очень благодарен проекту! Мне до сих пор очень симпатична его
                                        идея. Вы большие молодцы!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <div className="  image-container_review  m-auto my-5"><img src={user_2} alt=""/></div>
                                <div className="px-5">
                                    <div className="text-center text-xl font-semibold my-2">Екатерина, главный
                                        экономист:
                                    </div>
                                    <div className="italic text-center ">Этот проект был мне полезен. Ну где можно ещё
                                        пойти и попробовать
                                        себя в профессии и понять ваше или нет. Мне он помог собрать все кусочки
                                        информации воедино и структурировать те знания, которые у меня были. Все, что
                                        узнала на проекте, планирую применять уже при поиске новой работы.

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <div className="  image-container_review  m-auto my-5"><img src={user_2} alt=""/></div>
                                <div className="px-5">
                                    <div className="text-center text-xl font-semibold my-2">Екатерина, главный
                                        экономист:
                                    </div>
                                    <div className="italic text-center ">Этот проект был мне полезен. Ну где можно ещё
                                        пойти и попробовать
                                        себя в профессии и понять ваше или нет. Мне он помог собрать все кусочки
                                        информации воедино и структурировать те знания, которые у меня были. Все, что
                                        узнала на проекте, планирую применять уже при поиске новой работы.

                                    </div>
                                </div>
                            </div>
                        </div>


                    </Carousel>
                </div>

            </div>
        </div>
    )
}