import React from 'react';

const Stopwatch = ({width, height, className, fillColor, opacity}) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={fillColor} fillOpacity={opacity} d="M12.2789 5.75L12.9834 5.04375C13.1299 4.89687 13.1299 4.65937 12.9834 4.5125L12.4535 3.98125C12.307 3.83438 12.07 3.83438 11.9235 3.98125L11.2783 4.62813C10.3088 3.76875 9.08371 3.19375 7.73082 3.04063V1.5H8.60365C8.80939 1.5 8.97772 1.33125 8.97772 1.125V0.375C8.97772 0.16875 8.80939 0 8.60365 0H5.3617C5.15596 0 4.98763 0.16875 4.98763 0.375V1.125C4.98763 1.33125 5.15596 1.5 5.3617 1.5H6.23454V3.04375C3.00506 3.41563 0.498779 6.1625 0.498779 9.5C0.498779 13.0906 3.40095 16 6.98268 16C10.5644 16 13.4666 13.0906 13.4666 9.5C13.4666 8.10312 13.027 6.80937 12.2789 5.75ZM6.98268 14.5C4.22702 14.5 1.99506 12.2625 1.99506 9.5C1.99506 6.7375 4.22702 4.5 6.98268 4.5C9.73833 4.5 11.9703 6.7375 11.9703 9.5C11.9703 12.2625 9.73833 14.5 6.98268 14.5ZM7.35675 11H6.60861C6.40287 11 6.23454 10.8313 6.23454 10.625V6.375C6.23454 6.16875 6.40287 6 6.60861 6H7.35675C7.56249 6 7.73082 6.16875 7.73082 6.375V10.625C7.73082 10.8313 7.56249 11 7.35675 11Z"/>
        </svg>
    );
};

export default Stopwatch;