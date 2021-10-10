import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '../Button/Button';


const ButtonLink = ({children, accent, className, to}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(to);
    }

    return (
        <Button accent={accent} className={className} handleClick={handleClick}>
            {children}
        </Button>
    )
}

export default ButtonLink;
