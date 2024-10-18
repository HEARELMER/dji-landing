import React from 'react';

interface BlogProps {
    title: string;
    description: string;
    author: string;
    imageUrl: string;
}

const Blog: React.FC<BlogProps> = ({ title, description, author, imageUrl }) => {
    return (
        <div className="flex flex-col lg:flex-row items-start p-4     rounded-lg  ">
        
            <div className="lg:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="mb-4">{description}</p>
                <p className="text-gray-600">Autorr: {author}</p>
            </div>
     
            <div className="lg:w-1/2 h-full  p-4 flex justify-center">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="rounded-xl w-full object-cover h-full max-w-xs lg:max-w-md " 
                />
            </div>
        </div>
    );
};

export default Blog;
