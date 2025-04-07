import './FooterSection.css'
import ContactLinksApi from '../../API/ContactsLinksApi'
import ContactsApi from '../../API/ContactsApi'

export default function FooterSection() {
    

    return (
        <div className="footer_section">
            <div className="fix_block">
                <div className="my-10 flex flex-wrap justify-around">
                    <div className="p-5">
                        <div className="">Контакты:</div>
                        {/* {contacts.map((item) => (
                            <div key={item.id}>{item.contact}</div>
                        ))} */}
                        <ContactsApi/>
                    </div>
                    <div className="p-5 flex ">
                        {/* {links.map((item) =>
                            <div  key={item.id}>
                                <div className="p-2"> <a href={item.url}> <i className={item.icon}></i></a></div>
                            </div>

                        )} */}
                        <ContactLinksApi/>
                        
                        {/* <div className="">Ссылка на ВА: +375 29 860 72 64</div>
                        <div className="">Ссылка на Вайбер: +375 29 521 47 06</div>
                        <div className="">Ссылка на телеграм: +375 29 521 47 06</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}