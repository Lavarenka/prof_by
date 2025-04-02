import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FooterSection({ contactId, contactName }) {
    const [contact, setContact] = useState(null);
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Функция для получения контакта
        const fetchContact = async () => {
            try {
                let contactData;
                
                // Определяем какой запрос делать
                if (contactId) {
                    const response = await axios.get(`/api/contacts/${contactId}/`);
                    contactData = [response.data];
                } 
                else if (contactName) {
                    const response = await axios.get(`/api/contacts/?name=${contactName}`);
                    contactData = response.data;
                } 
                else {
                    const response = await axios.get('/api/contacts/');
                    contactData = response.data;
                }

                // Получаем ссылки
                const linksResponse = await axios.get('/api/contacts/links/');
                
                setContact(contactData);
                setLinks(linksResponse.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchContact();
    }, [contactId, contactName]); // Зависимости от параметров

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <div className="footer_section">
            <div className="fix_block">
                <div className="my-10 flex flex-wrap justify-around">
                    <div className="p-5">
                        <div className="">Контакты:</div>
                        {contact && contact.length > 0 ? (
                            contact.map(item => (
                                <div key={item.id} className="">
                                    {item.contact}
                                    {item.name && <span> ({item.name})</span>}
                                </div>
                            ))
                        ) : (
                            <div>Контакт не найден</div>
                        )}
                    </div>
                    <div className="p-5 flex">
                        {links.map(item => (
                            <div key={item.url} className="">
                                <div className="p-2">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <i className={item.icon}></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}