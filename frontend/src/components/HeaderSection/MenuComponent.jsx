import React, { useState } from 'react';
import { Menu } from 'antd';

const items = [

    {
        key: 'AboutUs',
        label: (
            <a href="#AboutUs" className="rr " rel="noopener noreferrer">
                О Нас
            </a>
        ),
    },
    {
        key: 'HowIt',
        label: (
            <a href="#HowIt" rel="noopener noreferrer">
                Как происходит
            </a>
        ),
    },
    {
        key: 'alipay3',
        label: (
            <a href="#Profession" rel="noopener noreferrer">
                Профессии
            </a>
        ),
    },
    {
        key: 'ForWho',
        label: (
            <a href="#ForWho" rel="noopener noreferrer">
                Для кого
            </a>
        ),
    },
    {
        key: 'Review',
        label: (
            <a href="#Review" rel="noopener noreferrer">
                Отзывы
            </a>
        ),
    },
];
export default function MenuComponent() {
    const [current, setCurrent] = useState('mail');


    return <Menu selectedKeys={[current]} mode="horizontal" items={items} />;
};

