import React, { useState } from 'react';

export const Menu = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);  

    const handleClick = (index: number) => {
        setActiveIndex(index); // Actualiza el índice activo
    };

    return (
        <ul className="flex flex-wrap items-center xl:gap-12 gap-x-4 max-lg:hidden">
            {['Inicio', 'Sobre nosotros', 'Servicios', 'Contacto'].map((item, index) => (
                <li key={index}>
                    <a
                        className={`leading-normal no-underline text-black text-lg hover:text-gray-500 ${activeIndex === index ? 'text-yellow-500' : ''}`}
                        href="#"
                        onClick={() => handleClick(index)} 
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
};
