import React, { useState } from 'react';

interface OptionProps {
    label?: string;
}

const Option: React.FC<OptionProps> = ({ label }) => {
    const [isActive, setActive] = useState(false);

    const toggleActive = () => {
        setActive((prev) => !prev);
    };

    return (
        <div
            onClick={toggleActive}
            className={` text-slate-500 font-semibold cursor-pointer border-t-4 border-t-yellow-500  ${isActive ? 'border-t-yellow-500 font-bold text-black ' : ' border-t-transparent '}`}
        >
           <h3    className={` my-2 font-semibold cursor-pointer     ${isActive ? 'border-t-yellow-500 font-bold text-black ' : ' border-t-transparent '}`}> {label}</h3>
        </div>
    );
};

export default Option;
