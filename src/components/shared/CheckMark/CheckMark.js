import React from 'react';

const CheckMark = ({fillColor, width, height, className}) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={fillColor} d="M21.6562 11C21.6562 16.8853 16.8853 21.6562 11 21.6562C5.1147 21.6562 0.34375 16.8853 0.34375 11C0.34375 5.1147 5.1147 0.34375 11 0.34375C16.8853 0.34375 21.6562 5.1147 21.6562 11ZM9.7674 16.6424L17.6736 8.73615C17.9421 8.46768 17.9421 8.03236 17.6736 7.76389L16.7014 6.79164C16.4329 6.52313 15.9976 6.52313 15.7291 6.79164L9.28125 13.2394L6.2709 10.2291C6.00243 9.96063 5.56712 9.96063 5.29861 10.2291L4.32635 11.2014C4.05788 11.4698 4.05788 11.9051 4.32635 12.1736L8.7951 16.6424C9.06361 16.9109 9.49889 16.9109 9.7674 16.6424Z"/>
        </svg>

    );
};

export default CheckMark;