import React from 'react';
import Blog from './organismos/Blog';

interface BlogPost {
    title: string;
    description: string;
    author: string;
    imageUrl: string;
}

const BlogGrid: React.FC = () => {
    const blogPosts: BlogPost[] = [
     
        {
            title: "Los Mejores Accesorios para tu Drone",
            description: "Una guía sobre los accesorios imprescindibles que cada piloto de drone debería tenerConoce las últimas innovaciones y avances en la tecnología de drones.Conoce las últimas innovaciones y avances en la tecnología de drones..",
            author: "Carlos García",
            imageUrl: "https://djistore.pk/wp-content/uploads/2022/04/DJI-Mavic-3-Banner_2048x-1024x405.webp"
        },
        {
            title: "Novedades en Tecnología de Drones",
            description: "Conoce las últimas innovaciones y avances en la tecnología de drones.Conoce las últimas innovaciones y avances en la tecnología dConoce las últimas innovaciones y avances en la tecnología de drones.e drones.",
            author: "Laura Martínez",
            imageUrl: "https://i.ytimg.com/vi/xi85DAbv5oU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDn3MBDQExD149mjZhGZLxdw0lvaA"
        },
    ];

    return (
        <div className=' flex flex-col items-center w-full px-[10%] bg-[#f6f6f6]'>
                <h1 className='text-black text-2xl mt-16 text-center font-bold'>Blog <span className='text-slate-600'> Megadron</span></h1>
                <div className='w-20 h-2 bg-yellow-500 my-6'></div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4">
            {blogPosts.map((post, index) => (
              
                   <Blog imageUrl={post.imageUrl}   title={post.title} description={post.description} author={post.author}/>
                    
               
            ))}
        </div>
        <div className=' w-full justify-center flex py-10'>

<button className=' w-32 rounded-full border-2 border-black py-1 px-10 mt-10 text-center'> Button</button>
</div>
        </div>
    );
};

export default BlogGrid;
