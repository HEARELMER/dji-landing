import React from 'react';

interface CardPreviewProps {
    title?: string;
    photo?: string;
}

const CardPreview: React.FC<CardPreviewProps> = (props) => {
    const { title, photo } = props;  

    return (
        <div className='w-80 lg:w-[365px] lg:h-[365px] h-80'>
            {photo && <img src={photo} alt={title || "Image"} className="object-cover rounded-xl w-full h-full" />}
            {title && <h2 className="text-lg font-bold text-yellow-500 -mt-72 ml-40">{title}</h2>}
        </div>
    );
};

export default CardPreview;
