import './ForWhomSection.css'
import for_who_img1 from '../ForWhomSection/k52friendship.jpg'
import for_who_img2 from '../ForWhomSection/k87t09325sq.jpg'
import for_who_img3 from '../ForWhomSection/nikmacmillan280300.jpg'
import HoverImageWithText from "../ForWhomComponent.jsx";
import {Button} from "antd";

export default function ForWhomSection() {
    return (
        <div className="for-who-section py-10">
            <div className="fix_block">
                <div className="my-10 flex justify-center"><h2 className='text-xl font-semibold'>Кому подойдет</h2>
                </div>
                <div className="flex justify-center"><p className="text-xl font-semibold">Всем — взрослым, школьникам и
                    студентам — независимо от возраста, пола и
                    профессии:</p>
                </div>
                <div className="flex my-10 flex-wrap">
                    <div className=" flex my-2 flex-auto justify-center">
                        <HoverImageWithText
                            imageUrl={for_who_img1} // URL изображения
                            text="Тем, кто хочет сменить деятельность и пока еще мало знаком с новой профессией" // Текст
                        />
                    </div>
                    <div className="flex flex-auto  my-2  justify-center">
                        <HoverImageWithText
                            imageUrl={for_who_img2} // URL изображения
                            text="Именно вам, если любите узнавать новое и хотели бы интересно провести время, став на несколько часов SMM-специалистом, столяром, визажистом или кем-либо другим." // Текст
                        />
                    </div>
                    <div className="flex flex-auto my-2  justify-center">
                        <HoverImageWithText
                            imageUrl={for_who_img3} // URL изображения
                            text="Если вы окончили курсы, но не хватило практики" // Текст
                        />
                    </div>
                    <div className="flex flex-auto my-2 justify-center">
                        <HoverImageWithText
                            imageUrl={for_who_img1} // URL изображения
                            text="Профессионалам любой области, которые хотят провести день с коллегами своей же специальности. Или быть может получить международный опыт." // Текст
                        />
                    </div>
                    <div className="flex flex-auto my-2 justify-center">
                        <HoverImageWithText
                            imageUrl={for_who_img2} // URL изображения
                            text="Путешественникам, которые оказались в другой стране и им любопытно провести день с местным представителем профессии." // Текст
                        />
                    </div>
                    <div className="flex flex-auto my-2 justify-center">
                        <HoverImageWithText
                            imageUrl={for_who_img3} // URL изображения
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