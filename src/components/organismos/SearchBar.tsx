import React from 'react';

interface SearchBarProps {
    isMobile?: boolean; // Prop que determina si se muestra en mobile
}

const SearchBar: React.FC<SearchBarProps> = ({ isMobile = false }) => {
    return (
        <div className={`w-full items-center ${isMobile ? '' : 'max-lg:hidden'} border-2 justify-between max-w-96 flex rounded-full px-4`}>
            <input 
                type="search" 
                className='w-full outline-none border-none my-2' 
                placeholder='¿Qué estás buscando?' 
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
                <path fill="#999999" d="M12.2 13.6a7 7 0 1 1 1.4-1.4l5.4 5.4l-1.4 1.4zM3 8a5 5 0 1 0 10 0A5 5 0 0 0 3 8"/>
            </svg>
        </div>
    );
};

export default SearchBar;
