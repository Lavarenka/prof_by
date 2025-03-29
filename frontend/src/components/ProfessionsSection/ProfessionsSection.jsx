import './ProfessionsSection.css'

import FadeComponent from "../FadeComponent.jsx";
import { Button } from "antd";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function ProfessionsSection() {
    const [data, setData] = useState(null); // Состояние для хранения данных
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
    const [error, setError] = useState(null); // Состояние для хранения ошибок
    const res = 100

    useEffect(() => {
        const apiUrl = '/api/professions/';

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
        <div className="prof_section md:my-15 my-5 p-2" id="Profession">
            <div className="fix_block ">
                <div className="my-10 flex justify-center"><h2 className='text-xl font-semibold'>Список профессий на выбор:</h2></div>

                <div className="grid md:grid-cols-5 md:gap-5 grid-cols-2 gap-2 ">

                    {data.map((item, index) => (
                        
                        <FadeComponent direction="bottom" delay={100 + (index * 50)}>
                            <div className="m-auto my-3">
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




                </div>
                <div className="my-5 text-center"><h2>Вы можете предложить свой вариант</h2></div>
                <div className="flex  justify-center">
                    <a href="#form"><Button className="md:w-100 ">Участвую</Button></a>

                </div>
            </div>
        </div>
    )
}