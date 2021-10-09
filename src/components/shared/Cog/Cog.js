import React from 'react';

const Cog = ({width, height, className}) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3408 7.44193L10.3102 6.84677C10.4142 6.28548 10.4142 5.70968 10.3102 5.14839L11.3408 4.55323C11.4594 4.48549 11.5126 4.34517 11.4739 4.21452C11.2053 3.35324 10.7481 2.57421 10.1505 1.92582C10.0586 1.82663 9.90858 1.80244 9.79245 1.87018L8.76181 2.46534C8.32874 2.09276 7.83036 1.80485 7.29085 1.61615V0.428247C7.29085 0.292763 7.19649 0.174216 7.06343 0.145183C6.17553 -0.0532029 5.26585 -0.0435256 4.4215 0.145183C4.28844 0.174216 4.19408 0.292763 4.19408 0.428247V1.61856C3.65699 1.80969 3.1586 2.0976 2.72312 2.46776L1.6949 1.8726C1.57635 1.80485 1.42877 1.82663 1.33684 1.92824C0.739258 2.57421 0.282002 3.35324 0.0134545 4.21694C-0.0276744 4.34759 0.0279705 4.48791 0.146518 4.55565L1.17716 5.15081C1.07313 5.7121 1.07313 6.2879 1.17716 6.84919L0.146518 7.44435C0.0279705 7.51209 -0.0252551 7.65241 0.0134545 7.78306C0.282002 8.64434 0.739258 9.42337 1.33684 10.0718C1.42877 10.171 1.57877 10.1951 1.6949 10.1274L2.72554 9.53224C3.1586 9.90482 3.65699 10.1927 4.1965 10.3814V11.5718C4.1965 11.7072 4.29086 11.8258 4.42392 11.8548C5.31182 12.0532 6.2215 12.0435 7.06585 11.8548C7.19891 11.8258 7.29327 11.7072 7.29327 11.5718V10.3814C7.83036 10.1903 8.32874 9.9024 8.76423 9.53224L9.79487 10.1274C9.91342 10.1951 10.061 10.1734 10.1529 10.0718C10.7505 9.42579 11.2078 8.64676 11.4763 7.78306C11.5126 7.64999 11.4594 7.50967 11.3408 7.44193ZM5.74247 7.93306C4.67553 7.93306 3.80699 7.06451 3.80699 5.99758C3.80699 4.93065 4.67553 4.0621 5.74247 4.0621C6.8094 4.0621 7.67794 4.93065 7.67794 5.99758C7.67794 7.06451 6.8094 7.93306 5.74247 7.93306Z" fill="#111111"/>
        </svg>
    );
};

export default Cog;