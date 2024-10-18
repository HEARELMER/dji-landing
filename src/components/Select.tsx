import React, { useState } from 'react';

interface SelectProps {
    text: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void; 
}

export const Select: React.FC<SelectProps> = ({ text, options, onChange }) => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedValue(value);
        onChange(value); 
    };

    return (
        <div className="relative inline-block">
            <div className="bg-white rounded-full items-center w-auto py-2 px-4 flex gap-6 justify-between cursor-pointer" onClick={() => document.getElementById(text)?.focus()}>
                <div>
                    <h2 className='text-sm'>{text}</h2>
                    <h1 className='font-semibold'>{selectedValue || 'Todos'}</h1>
                </div>
                <button className='rounded-full flex items-center justify-center bg-white p-1 border w-6 h-6'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#999999" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g></svg>
                </button>
            </div>
            <select
                id={text}
                className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
                value={selectedValue}
                onChange={handleSelectChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
