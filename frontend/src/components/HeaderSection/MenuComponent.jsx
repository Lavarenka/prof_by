import React, {useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {Menu} from 'antd';

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
            <a href="https://ant.design" rel="noopener noreferrer">
                Профессии
            </a>
        ),
    },
    {
        key: 'alipay4',
        label: (
            <a href="https://ant.design" rel="noopener noreferrer">
                Для кого
            </a>
        ),
    },
    {
        key: 'alipay5',
        label: (
            <a href="https://ant.design" rel="noopener noreferrer">
                Отзывы
            </a>
        ),
    },
];
export default function MenuComponent() {
    const [current, setCurrent] = useState('mail');


    return <Menu selectedKeys={[current]} mode="horizontal" items={items}/>;
};

//
// import React, { useState, useEffect, useRef } from 'react';
// import './HeaderSection.css';
//
// const BurgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);
//
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//
//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };
//
//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);
//
//   return (
//     <div className="burger-menu" ref={menuRef}>
//       <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//
//       <nav className={`menu ${isOpen ? 'open' : ''}`}>
//         <ul>
//           <li><a href="#home" onClick={toggleMenu}>Главная</a></li>
//           <li><a href="#about" onClick={toggleMenu}>О нас</a></li>
//           <li><a href="#services" onClick={toggleMenu}>Услуги</a></li>
//           <li><a href="#contact" onClick={toggleMenu}>Контакты</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };
//
// export default BurgerMenu;