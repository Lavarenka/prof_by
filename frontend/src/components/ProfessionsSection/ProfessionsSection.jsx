import './ProfessionsSection.css'
import actorImage from './ProfImg/actor.svg'
import journalist from './ProfImg/journalist.svg'
import photo from './ProfImg/photo-pro.svg'
import hr from  './ProfImg/hr.svg'
import barber from  './ProfImg/barber.svg'
import FadeComponent from "../FadeComponent.jsx";
import {Button} from "antd";


export default function ProfessionsSection() {
    return (
        <div className="prof_section my-15">
            <div className="fix_block ">
                <div className="my-10 flex justify-center"><h2 className='text-xl font-semibold'>Список профессий на выбор:</h2></div>

                <div className="grid md:grid-cols-5 md:gap-5 grid-cols-2 gap-2 ">
                    <FadeComponent direction="bottom" delay={100}>
                        <div className="m-auto my-3">
                            <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 "><img src={actorImage} alt=""/></div>
                            <div className="text-center"><p>Актер (актриса)</p></div>
                        </div>
                    </FadeComponent>
                    <FadeComponent direction="bottom" delay={150}>
                        <div className="m-auto my-3">
                            <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 "><img src={journalist} alt=""/></div>
                            <div className="text-center">Журналист</div>
                        </div>
                    </FadeComponent>
                    <FadeComponent direction="bottom" delay={200}>
                        <div className="m-auto my-3 ">
                            <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 "><img src={photo} alt=""/></div>
                            <div className="text-center">Видеооператор/фотограф</div>
                        </div>
                    </FadeComponent>
                    <FadeComponent direction="bottom" delay={250}>
                        <div className="m-auto my-3 ">
                            <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 "><img src={hr} alt=""/></div>
                            <div className="text-center">HR-специалист</div>
                        </div>
                    </FadeComponent>
                    <FadeComponent direction="bottom" delay={300}>
                        <div className="m-auto my-3 ">
                            <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 "><img src={barber} alt=""/></div>
                            <div className="text-center">Визажист/парикмахер</div>
                        </div>
                    </FadeComponent>
                    <FadeComponent direction="bottom" delay={350}>
                        <div className="m-auto my-3 ">
                            <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 "><img src={barber} alt=""/></div>
                            <div className="text-center">Визажист/парикмахер</div>
                        </div>
                    </FadeComponent>
                    <FadeComponent direction="bottom" delay={400}>
                        <div className="m-auto my-3 ">
                            <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 "><img src={barber} alt=""/></div>
                            <div className="text-center">Визажист/парикмахер</div>
                        </div>
                    </FadeComponent>
                    <FadeComponent direction="bottom" delay={450}>
                        <div className="m-auto my-3 ">
                            <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 "><img src={barber} alt=""/></div>
                            <div className="text-center">Визажист/парикмахер</div>
                        </div>
                    </FadeComponent>
                    <FadeComponent direction="bottom" delay={500}>
                        <div className="m-auto my-3 ">
                            <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 "><img src={barber} alt=""/></div>
                            <div className="text-center">Визажист/парикмахер</div>
                        </div>
                    </FadeComponent>
                    <FadeComponent direction="bottom" delay={550}>
                        <div className="m-auto my-3 ">
                            <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 "><img src={barber} alt=""/></div>
                            <div className="text-center">Визажист/парикмахер</div>
                        </div>
                    </FadeComponent>
                </div>
                <div className="my-5 text-center"><h2>Вы можете предложить свой вариант</h2></div>
                <div className="flex  justify-center">
                    <a href="#form"><Button className="md:w-100 ">Участвую</Button></a>

                </div>
            </div>
        </div>
    )
}