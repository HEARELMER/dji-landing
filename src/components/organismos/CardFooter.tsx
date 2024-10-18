import React, { Children } from 'react';
import { FaUser } from 'react-icons/fa';

interface CardFooterProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    level: string;
    buttonText: string;
    children: React.ReactNode
}

const CardFooter: React.FC<CardFooterProps> = ({
    backgroundImage,
    title,
    subtitle,
    children,
    level,
    buttonText
}) => {
    return (
        <div
            className="relative rounded-lg overflow-hidden shadow-lg h-64 w-full"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute  inset-0 bg-black bg-opacity-50 flex  px-20 gap-10  items-center p-4">
                {children}
                <div className=' flex flex-col'>
                    <div className="text-white text-2xl flex items-center">
                    </div>
                        <h1 className="text-white text-sm">{level}</h1>
                        <span className="  text-white font-bold text-xl">{title}</span>
                    <p className="text-white text-sm">{subtitle}</p>
                    <button className="mt-4 px-10 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400">
                        {buttonText}
                    </button>

                </div>
            </div>
        </div>
    );
};
export default CardFooter