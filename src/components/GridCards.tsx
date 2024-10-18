import React from 'react';
import CardPreview from './organismos/CardPreview';
import Card from './organismos/Card';
import { Button } from './ui/button';

export default function GridCards() {
    const products: Array<{ title?: string; photo?: string }> = [
        { title: "Drone Mavic Air 2", photo: "https://se-cdn.djiits.com/stormsend/uploads/793559138b8e998160cdf4422f9d7f8d.jpg" },
        { title: "Osmo Action Camera", photo: "https://urbangadgets.ph/wp-content/uploads/Dive-into-Action-DJI-Osmo-Action-Discounts-800-x-500px.jpg" },
        { title: "Phantom 4 Pro", photo: "https://www.enlace3g.com/images/Drone%20Phantom%204%20Pro%20V2.0%20Normal%20y%20Plus%20DJI%202.jpg" },
        { title: "Osmo poket 3 ", photo: "https://megadron.pl/data/include/cms/produkty/DJI-Pocket-3/DJI_Osmo_Pocket_3_natura.webp" },

    ];

    const productsCard: Array<{ title?: string; photo?: string; price: string }> = [
        { title: "Drone Mavic Air 2", photo: "https://se-cdn.djiits.com/stormsend/uploads/793559138b8e998160cdf4422f9d7f8d.jpg", price: "$999.99" },
        { title: "Osmo Action Camera", photo: "https://urbangadgets.ph/wp-content/uploads/Dive-into-Action-DJI-Osmo-Action-Discounts-800-x-500px.jpg", price: "$349.99" },
        { title: "Phantom 4 Pro", photo: "https://www.enlace3g.com/images/Drone%20Phantom%204%20Pro%20V2.0%20Normal%20y%20Plus%20DJI%202.jpg", price: "$1,599.00" },
        { title: "Osmo Pocket 3", photo: "https://megadron.pl/data/include/cms/produkty/DJI-Pocket-3/DJI_Osmo_Pocket_3_natura.webp", price: "$349.00" },
        { title: "Drone Mavic Air 2", photo: "https://se-cdn.djiits.com/stormsend/uploads/793559138b8e998160cdf4422f9d7f8d.jpg", price: "$999.99" },
       
    ];
    return (
        <div>

            <div className="flex flex-wrap gap-4 justify-center">
                {products.map((product, index) => (
                    <CardPreview key={index} title={product.title} photo={product.photo} />
                ))}
            </div>
            <div className='flex items-center flex-col'>
                <h1 className='text-black text-2xl mt-16 text-center font-bold'>Oferta de hoy</h1>
                <div className='w-20 h-2 bg-yellow-500 my-6'></div>
                <div className='flex flex-wrap w-full justify-center gap-4'>
                    {productsCard.map((producto, index) => (
                        <Card key={index} photo={producto.photo} title={producto.title} price={producto.price} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                    <button className=' w-32 rounded-full border-2 border-black py-1 px-10 mt-10 text-center'> Button</button>
                    <img className=' rounded-xl lg:mt-20 mt-10 lg:h-96 w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/58fd838a9f7456e0b92a446a/1662423393769-L0BBB2PW0YPHZDDOB5LC/Banner.jpg?format=2500w" alt="" />
                    <div className=' lg:w-80 lg:absolute -ml-[50%] mt-28 '>
                        <h1 className=' font-bold text-2xl'>DJI CARE</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia neque omnis, odit minus quas in minima culpa velit consectetur, similique animi sunt exercitationem ut, consequatur reiciendis dolor maxime nobis eaque.</p>
                        <div className="flex gap-4 flex-wrap mt-10 ">
                            
                            <Button className='bg-yellow-500 border-transparent rounded-full border-2'>COMPRAR AHORA</Button>
                            <Button className='  bg-transparent border-2 rounded-full text-black border-black'>VER MAS</Button>
                        </div>
                    </div>
            </div>
            <div className='flex items-center flex-col'>
                <h1 className='text-black text-2xl mt-16 text-center font-bold'>Oferta de hoy</h1>
                <div className='w-20 h-2 bg-yellow-500 my-6'></div>
                <div className='flex flex-wrap w-full justify-center gap-4'>
                    {productsCard.map((producto, index) => (
                        <Card key={index} photo={producto.photo} title={producto.title} price={producto.price} />
                    ))}
                </div>
            </div>
            <div className=' w-full justify-center flex py-10'>

            <button className=' w-32 rounded-full border-2 border-black py-1 px-10 mt-10 text-center'> Button</button>
            </div>
        </div>
    );
}
