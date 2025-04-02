import React, { useEffect, useState } from 'react';
import './ReviewsSection.css'
import { Carousel } from 'antd';
import axios from 'axios';





export default function ReviewsSection() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = '/api/reviews/';

        axios.get(apiUrl)
            .then((response) => {
                // Форматируем URL изображений
                const formattedData = response.data.map(item => ({
                    ...item,
                    image: item.image
                        ? item.image.startsWith('http')
                            ? item.image
                            : `http://${item.image}` // add http://
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

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
    if (!data) return <div>Нет данных</div>;

    return (
        <div className="review_section p-10" id="Review">
            <div className="fix_block">
                <div className="my-10 flex  justify-center"><h2 className='text-xl font-semibold'>Отзывы</h2></div>
                <div className="">
                    <Carousel arrows autoplay infinite={true} dots={false}>
                        {data.map((item) => (
                            <div key={item.id}>
                                <div >
                                    <div  className=" image-container_review  m-auto my-5">{item.image && (
                                        <img
                                            src={item.image}
                                            alt={`Фото ${item.name}`}

                                            onError={(e) => {
                                                console.error('Не удалось загрузить изображение:', e.target.src);
                                                e.target.src = 'https://via.placeholder.com/200';
                                                e.target.style.border = '2px solid #ff0000'; // Красная рамка при ошибке
                                            }}
                                        />
                                    )}</div>
                                    <div className="px-5">
                                        <div className="text-center text-xl font-semibold my-2">{item.name}: {item.profession}</div>
                                        <div className="italic text-center ">{item.review}</div>
                                    </div>
                                </div>
                            </div>


                            /* <div key={item.id} >
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={`Фото ${item.name}`}
                            
                                    onError={(e) => {
                                        console.error('Не удалось загрузить изображение:', e.target.src);
                                        e.target.src = 'https://via.placeholder.com/200';
                                        e.target.style.border = '2px solid #ff0000'; // Красная рамка при ошибке
                                    }}
                                />
                            )}
                            <div style={{ textAlign: 'left' }}>
                                <p><strong>Имя:</strong> {item.name}</p>
                                <p><strong>Профессия:</strong> {item.profession}</p>
                                <p><strong>Отзыв:</strong> {item.review}</p>
                            </div>
                            </div> */


                        ))}


                    </Carousel>
                </div>

            </div>
        </div>
    )
}