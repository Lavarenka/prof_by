import './FooterSection.css'

import { useContactLinks } from '../../hooks/useContactLinks'
import { useContacts } from '../../hooks/useContacts';
import { Spin, Alert, Row, Col } from 'antd';


export default function FooterSection() {
    const {
        data: links,
        isLoading: isLinksLoading,
        error: linksError
    } = useContactLinks();

    const {
        data: contacts,
        isLoading: isContactsLoading,
        error: contactsError
    } = useContacts();

    // Состояния загрузки и ошибок
    const isLoading = isLinksLoading || isContactsLoading;
    const error = linksError || contactsError;

    if (isLoading) return (
        <div className="flex justify-center items-center h-[200px]">
            <Spin size="large" />
        </div>
    );
    if (error) return <Alert message={`Ошибка: ${error.message}`} type="error" />;

    return (
        <div className="footer_section">
            <div className="fix_block">
                <div className="my-10 flex flex-wrap justify-around">
                    <div className="p-5">
                        <div className="">Контакты:</div>
                        <div className="">
                            {contacts?.map((contact) => (
                                <div key={contact.id}>{contact.contact}</div>
                            ))}
                        </div>
                    </div>
                    <div className="p-5 flex ">
                        {links?.map((item) =>
                            <div key={item.id} className='mx-1'>
                                <a href={item.url}> <i className={item.icon}></i></a>
                            </div>

                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}



