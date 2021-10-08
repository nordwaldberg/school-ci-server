import React from 'react';

const CrossMark = ({ fillColor, width, height }) => {
    return (
          <svg width={width} height={height} viewBox="0 0 22 22"  xmlns="http://www.w3.org/2000/svg">
              <path fill={fillColor} d="M11 0.34375C5.11328 0.34375 0.34375 5.11328 0.34375 11C0.34375 16.8867 5.11328 21.6562 11 21.6562C16.8867 21.6562 21.6562 16.8867 21.6562 11C21.6562 5.11328 16.8867 0.34375 11 0.34375ZM16.225 13.7973C16.427 13.9992 16.427 14.3258 16.225 14.5277L14.5234 16.225C14.3215 16.427 13.9949 16.427 13.793 16.225L11 13.4062L8.20273 16.225C8.00078 16.427 7.67422 16.427 7.47227 16.225L5.775 14.5234C5.57305 14.3215 5.57305 13.9949 5.775 13.793L8.59375 11L5.775 8.20273C5.57305 8.00078 5.57305 7.67422 5.775 7.47227L7.47656 5.7707C7.67852 5.56875 8.00508 5.56875 8.20703 5.7707L11 8.59375L13.7973 5.775C13.9992 5.57305 14.3258 5.57305 14.5277 5.775L16.2293 7.47656C16.4312 7.67852 16.4312 8.00508 16.2293 8.20703L13.4062 11L16.225 13.7973Z"/>
          </svg>
    );
};

export default CrossMark;