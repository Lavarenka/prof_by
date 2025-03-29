import './FooterSection.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FooterSection() {
    const [contacts, setContacts] = useState([]);
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
    const [error, setError] = useState(null); // Состояние для хранения ошибок

    useEffect(() => {
        // Создаем массив запросов
        const contactsRequest = axios.get('/api/contacts/');
        const linksRequest = axios.get('/api/contacts/links/');

        // Выполняем все запросы параллельно
        Promise.all([contactsRequest, linksRequest])
            .then(([contactsResponse, linksResponse]) => {
                setContacts(contactsResponse.data);
                setLinks(linksResponse.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    // Отображение состояния загрузки
    if (loading) return <div>Загрузка...</div>;

    // Отображение ошибки
    if (error) return <div>Ошибка: {error.message}</div>;



    return (
        <div className="footer_section">
            <div className="fix_block">
                <div className="my-10 flex flex-wrap justify-around">
                    <div className="p-5">
                        <div className="">Контакты:</div>
                        {contacts.map((item) => (
                            <div className="">{item.contact}</div>
                        ))}
                    </div>
                    <div className="p-5 flex ">
                        {links.map((item) =>
                            <div className="">
                                <div className="p-2"> <a href={item.url}> <i className={item.icon}></i></a></div>
                            </div>

                        )}
                        {/* <div className="">Ссылка на ВА: +375 29 860 72 64</div>
                        <div className="">Ссылка на Вайбер: +375 29 521 47 06</div>
                        <div className="">Ссылка на телеграм: +375 29 521 47 06</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}