import '../components/ProfessionsSection/ProfessionsSection.css'
import FadeComponent from ".././components/FadeComponent";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function ProfessionsApi() {
    const [data, setData] = useState(null); // Состояние для хранения данных
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
    const [error, setError] = useState(null); // Состояние для хранения ошибок


    useEffect(() => {
        const apiUrl = `http://localhost:8000/api/professions/`;

        axios.get(apiUrl)
            .then((response) => {
                // Форматируем URL изображений
                const formattedData = response.data.map(item => ({
                    ...item,
                    image: item.image
                        ? item.image.startsWith('http')
                            ? item.image
                            : `http://${item.image}` // Добавляем http://
                        : null
                }));
                setData(formattedData);
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
        <>
            {data.map((item, index) => (
                <FadeComponent key={item.id} direction="bottom" delay={100 + (index * 50)}>
                    <div className="m-auto my-3" >
                        <div className="max-w-20 m-auto max-h-20  md:max-w-40 md:max-h-40 ">
                            <img
                                src={item.image}
                                alt={`Фото ${item.name}`}
                                onError={(e) => {
                                    console.error('Не удалось загрузить изображение:', e.target.src);
                                    e.target.src = 'https://via.placeholder.com/200';
                                    e.target.style.border = '2px solid #ff0000'; // Красная рамка при ошибке
                                }}
                            />
                        </div>
                        <div className="text-center"><p>{item.name}</p></div>
                    </div>
                </FadeComponent>
            ))}
        </>
    )
}