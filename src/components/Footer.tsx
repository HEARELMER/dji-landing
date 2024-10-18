import React from 'react';
import { FaUser } from 'react-icons/fa6';
import CardFooter from './organismos/CardFooter';

const footerData = [
    {
        title: 'Columna 1',
        items: [
            'Item 1.1',
            'Item 1.2',
            'Item 1.3',
            'Item 1.4',
            'Item 1.5',
            'Item 1.6',
            'Item 1.7',
            'Item 1.8',
            'Item 1.9',
            'Item 1.10',
        ],
    },
    {
        title: 'Columna 2',
        items: [
            'Item 2.1',
            'Item 2.2',
            'Item 2.3',
            'Item 2.4',
            'Item 2.5',
            'Item 2.6',
            'Item 2.7',
            'Item 2.8',
            'Item 2.9',
            'Item 2.10',
        ],
    },
    {
        title: 'Columna 3',
        items: [
            'Item 3.1',
            'Item 3.2',
            'Item 3.3',
            'Item 3.4',
            'Item 3.5',
            'Item 3.6',
            'Item 3.7',
            'Item 3.8',
            'Item 3.9',
            'Item 3.10',
        ],
    },
    {
        title: 'Columna 4',
        items: [
            'Item 4.1',
            'Item 4.2',
            'Item 4.3',
            'Item 4.4',
            'Item 4.5',
            'Item 4.6',
            'Item 4.7',
            'Item 4.8',
            'Item 4.9',
            'Item 4.10',
        ],
    },
];

const Footer = () => {
    const cardData = [
        {
            backgroundImage: "https://djistore.pk/wp-content/uploads/2022/04/DJI-Mavic-3-Banner_2048x-1024x405.webp",
            title: "Usuario 1",
            subtitle: "Descripción breve 1",
            level: "Profesional",
            buttonText: "Ver Perfil"
        },
        {
            backgroundImage: "https://images.ctfassets.net/xa93kvziwaye/4yGlFtj5a1epPo94VyzZ7b/117d54981b0226cb304ecf3cc4e0a75a/jb-au-20240422-cameras-dji-avata-2-banner-mob.jpg?fm=webp&f=top&fit=fill&w=1124&h=482",
            title: "Usuario 2",
            subtitle: "Descripción breve 2",
            level: "Principiante",
            buttonText: "Contactar"
        }
    ];
    return (
        <div className="w-full  bg-white lg:px-[10%] p-6">
        <div className="flex w-full gap-4 p-4">
            {cardData.map((card, index) => (
                <CardFooter 
                    key={index}
                    backgroundImage={card.backgroundImage}
                    title={card.title}
                    subtitle={card.subtitle}
                    level={card.level}
                    buttonText={card.buttonText}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#eab308" d="M10 9c-1.1 0-2 .92-2 2.05c0 .57.22 1.07.59 1.45L12 16l3.42-3.5c.36-.37.58-.89.58-1.45C16 9.92 15.1 9 14 9c-.54 0-1.05.23-1.41.6l-.59.6l-.58-.59A2 2 0 0 0 10 9m10-5c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm-3.3 4.06L20 6H4l3.3 2.06c-.41.39-.75.86-.97 1.39L4 8v10h16V8l-2.33 1.45c-.22-.53-.56-1-.97-1.39"/></svg>
                    </CardFooter>
            ))}
        </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
                {footerData.map((column, index) => (
                    <div key={index}>
                        <h1 className='font-semibold text-lg mb-2'>{column.title}</h1>
                        <ul>
                            {column.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="flex gap-10 mt-10">
                <p>94944656556</p>
                <p className=' underline'>Hola </p>
                <p>Lorem  g elit.   at, beat</p>
            </div>
        </div>
    );
};

export default Footer;
