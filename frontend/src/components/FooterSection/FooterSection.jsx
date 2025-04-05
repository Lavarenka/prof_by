import './FooterSection.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FooterSection() {
    const [contacts, setContacts] = useState([]);
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
    const [error, setError] = useState(null); // Состояние для хранения ошибок

    useEffect(() => {
        // Создаем асинхронную функцию для загрузки данных
        const fetchFooterData = async () => {
            try {
                // Параллельно выполняем оба запроса
                const [contactsResponse, linksResponse] = await Promise.all([
                    axios.get(`http://localhost:8000/api/contacts/`),
                    axios.get(`http://localhost:8000/api/contacts/links/`),
                    // axios.get(`${import.meta.env.VITE_API_URL}/contacts/links/`)
                    
                ]);
                
                setContacts(contactsResponse.data);
                setLinks(linksResponse.data);
            } catch (err) {
                setError(err);
                console.error('Ошибка при загрузке данных футера:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchFooterData();
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
                            <div key={item.id}>{item.contact}</div>
                        ))}
                    </div>
                    <div className="p-5 flex ">
                        {links.map((item) =>
                            <div  key={item.id}>
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