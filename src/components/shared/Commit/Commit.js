import React from 'react';


const Commit = ({fillColor, width, height, opacity, className}) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 16 8" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path fill={fillColor} fillOpacity={opacity}
                  d="M3.2 4C3.2 4.27 3.2225 4.5375 3.265 4.8H0.3C0.135 4.8 0 4.665 0 4.5V3.5C0 3.335 0.135 3.2 0.3 3.2H3.265C3.2225 3.4625 3.2 3.73 3.2 4ZM15.7 3.2H12.735C12.78 3.4625 12.8 3.73 12.8 4C12.8 4.27 12.7775 4.5375 12.735 4.8H15.7C15.865 4.8 16 4.665 16 4.5V3.5C16 3.335 15.865 3.2 15.7 3.2ZM8 1.2C7.2525 1.2 6.55 1.4925 6.02 2.02C5.49 2.55 5.2 3.2525 5.2 4C5.2 4.7475 5.49 5.45 6.02 5.98C6.55 6.5075 7.2525 6.8 8 6.8C8.7475 6.8 9.45 6.5075 9.98 5.98C10.51 5.45 10.8 4.7475 10.8 4C10.8 3.2525 10.51 2.55 9.98 2.02C9.45 1.4925 8.7475 1.2 8 1.2ZM8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4C4 1.79 5.79 0 8 0Z"/>
        </svg>
    );
};

export default Commit;