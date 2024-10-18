import { IoIosStar } from "react-icons/io";

interface CardProps {
    title?: string;
    photo?: string;
    price?: string;
}

const Card: React.FC<CardProps> = (props) => {
    const { title, photo, price } = props
    return (
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg w-64">
            {photo && (
                <img src={photo} alt={title || "Product Image"} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
                {title && (
                    <h2 className="text-lg font-semibold text-left">{title}</h2>
                )}
               <div className="flex gap-1"> <IoIosStar className=" fill-yellow-500" />
                <IoIosStar className=" fill-yellow-500" />
                <IoIosStar className=" fill-yellow-500" />
                <IoIosStar className=" fill-yellow-500" />
                <IoIosStar className=" fill-slate-400" /></div>
                <p className="text-left font-bold text-gray-800 mt-4">{price}</p>
            </div>
        </div>
    );
};

export default Card;
