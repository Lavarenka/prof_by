import './ForWhomSection.css'

import HoverImageWithText from "./ForWhomComponent.jsx";
import {Button} from "antd";
import { forWhoImages } from './ForWhoImg/assets.jsx'; 

export default function ForWhomSection() {
    
    return (
        <div className="for-who-section p-5 md:py-10" id="ForWho">
            <div className="fix_block">
                <div className="my-10 flex justify-center"><h2 className='text-xl font-semibold'>Кому подойдет</h2>
                </div>
                <div className="px-5 text-center"><p className="text-xl font-semibold">Всем — взрослым, школьникам и
                    студентам — независимо от возраста, пола и
                    профессии:</p>
                </div>
                <div className="flex my-10 flex-wrap">
                    <div className="  flex my-2 flex-auto justify-center">
                        <HoverImageWithText
                            imageUrl={forWhoImages.img1} // URL изображения
                            text="Тем, кто хочет сменить деятельность и пока еще мало знаком с новой профессией" // Текст
                        />
                    </div>
                    <div className="flex flex-auto  my-2  justify-center">
                        <HoverImageWithText
                            imageUrl={forWhoImages.img2} // URL изображения
                            text="Именно вам, если любите узнавать новое и хотели бы интересно провести время, став на несколько часов SMM-специалистом, столяром, визажистом или кем-либо другим." // Текст
                        />
                    </div>
                    <div className="flex flex-auto my-2  justify-center">
                        <HoverImageWithText
                            imageUrl={forWhoImages.img3} // URL изображения
                            text="Если вы окончили курсы, но не хватило практики" // Текст
                        />
                    </div>
                    <div className="flex flex-auto my-2 justify-center">
                        <HoverImageWithText
                            imageUrl={forWhoImages.img4} // URL изображения
                            text="Профессионалам любой области, которые хотят провести день с коллегами своей же специальности. Или быть может получить международный опыт." // Текст
                        />
                    </div>
                    <div className="flex flex-auto my-2 justify-center">
                        <HoverImageWithText
                            imageUrl={forWhoImages.img5} // URL изображения
                            text="Путешественникам, которые оказались в другой стране и им любопытно провести день с местным представителем профессии." // Текст
                        />
                    </div>
                    <div className="flex flex-auto my-2 justify-center">
                        <HoverImageWithText
                            imageUrl={forWhoImages.img6} // URL изображения
                            text="Тем, кто хочет сделать нестандартный подарок для своих близких, друзей, коллег —  предлагаем сертификат." // Текст
                        />
                    </div>
                </div>
                <div className="flex  justify-center">
                    <a href="#form"><Button className="md:w-100 ">Участвую</Button></a>

                </div>
            </div>

        </div>
    )
}