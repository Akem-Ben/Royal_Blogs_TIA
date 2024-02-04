import React from 'react';
import './dropdown_style.css';

export const Dropdowns = ({ props }: any) => {
  return (
    <div className="dropdown">
      {props?.map((prop: any, index: number) => (
        <span className='menu_prop' key={index}>{prop}</span>
      ))}
    </div>
  );
};

