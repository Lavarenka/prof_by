import { Button } from "antd";
import "./HeaderSection.css"
import MenuComponent from "./MenuComponent.jsx";
import ContactLinksApi from "../../API/ContactsLinksApi.jsx";
import ContentsApi from "../../API/ContentApi.jsx";




export default function HeaderSection() {
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
                                {/* {links.map((item) =>
                                    <div key={item.id} className='top_header__social flex '>
                                        <div className="p-2"> <a href={item.url}> <i className={item.icon} > </i></a></div>
                                    </div>
                                )} */}
                                <ContactLinksApi />
                                <ContentsApi />
                                {/* 
                                {contacts.map((contact) =>
                                    <div key={contact.id} className='top_header__contacts flex items-center justify-center'>
                                        <p className="oldstyle-nums">{contact.title} </p>
                                    </div>
                                )} */}
                            </div>
                        </div>
                        <div
                            className="flex md:flex-row items-center flex-col flex-auto md:justify-normal justify-center md:my-0 my-2">
                            <div className="top-header__logo md:mx-6">Будь кем хочешь</div>
                            <div className="top-header__button mt-15 md:mt-0"><a href="#form"><Button>Хочу участвовать</Button></a>
                            </div>
                        </div>
                        <div className=" hidden md:flex flex-auto md:justify-end justify-center  px-2 ">
                            {/* {links.map((item) =>

                                <div key={item.id} className='top_header__social flex '>

                                    <div className="p-2"> <a href={item.url}> <i className={item.icon} > </i></a></div>

                                </div>

                            )}
                            {contacts.map((contact) =>
                                <div key={contact.id} className='top_header__contacts flex items-center justify-center'>
                                    <p className="oldstyle-nums">{contact.title} </p>
                                </div>
                            )} */}
                            <ContactLinksApi />
                            <ContentsApi />

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