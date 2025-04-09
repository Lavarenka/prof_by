import { Button } from "antd";
import "./HeaderSection.css"
import MenuComponent from "./MenuComponent.jsx";
import { Spin, Alert, Row, Col } from 'antd';
import { useContactLinks } from '../../hooks/useContactLinks'
import { useContent } from '../../hooks/useContent'





export default function HeaderSection() {
    const {
        data: links,
        isLoading: isLinksLoading,
        error: linksError
    } = useContactLinks();

    const {
        data: contents,
        isLoading: isContentLoading,
        error: contentError
    } = useContent();

    // Состояния загрузки и ошибок
    const isLoading = isLinksLoading || isContentLoading;
    const error = linksError || contentError;

    if (isLoading) return (
        <div className="flex justify-center items-center h-[200px]">
            <Spin size="large" />
        </div>
    );
    if (error) return <Alert message={`Ошибка: ${error.message}`} type="error" />;






    return (
        <div className="header  ">
            <div className="fix_block ">
                <div className="header__container ">
                    <div className="header__top md:flex  py-2 items-center  ">
                        <div className="flex  flex-auto mx-5 justify-around md:hidden ">
                            <div className="  md:hidden  flex flex-auto ">
                                <div className="w-12 "><MenuComponent /></div>
                            </div>
                            <div className="flex flex-auto  px-2 items-center">
                                {links?.map((item) =>
                                    <div key={item.id} className='top_header__social flex '>
                                        <div className="p-2"> <a href={item.url}> <i className={item.icon} > </i></a></div>
                                    </div>
                                )}
                                {contents.map((content) =>
                                    <div key={content.id} className='flex items-center justify-center'>
                                        <p className="oldstyle-nums">{content.title} </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            className="flex md:flex-row items-center flex-col flex-auto md:justify-normal justify-center md:my-0 my-2">
                            <div className="top-header__logo md:mx-6">Будь кем хочешь</div>
                            <div className="top-header__button mt-15 md:mt-0"><a href="#form"><Button>Хочу участвовать</Button></a>
                            </div>
                        </div>
                        <div className=" hidden md:flex flex-auto md:justify-end justify-center  px-2 ">

                            {links?.map((link) =>
                                <div key={link.id} className='top_header__social flex '>
                                    <div className="p-2"> <a href={link.url}> <i className={link.icon} > </i></a></div>
                                </div>
                            )}
                            {contents.map((content) =>
                                <div key={content.id} className='flex items-center justify-center'>
                                    <p className="oldstyle-nums">{content.title} </p>
                                </div>
                            )}


                        </div>
                    </div>
                    <div className="header__menu my-5    ">
                        <div className=" justify-center   hidden md:flex   "><MenuComponent /></div>
                    </div>
                    <div className="header_bottom mt-10 md:mt-50">
                        <h2 className="ps-2">Смени профессию на 1 день</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}