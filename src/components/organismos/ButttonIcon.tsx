import React from 'react';
import { FaBeer } from 'react-icons/fa'; // Importa un icono específico

interface ButtonIconProps {
  label?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode; 
  isMobile?: boolean; // Prop para controlar la visibilidad en mobile
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ isMobile = false, ...props }) => {
  return (
    <div className={`flex flex-col gap-1 items-center ${isMobile ? '' : 'hidden md:flex'}`}>
      {props.children}
      {props.icon && <span className="icon">{props.icon}</span>}
      {props.label && <span className="font-semibold text-gray-500 text-sm">{props.label}</span>}
    </div>
  );
};

export default ButtonIcon;
