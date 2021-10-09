import React from 'react';
import CheckMark from '../../CheckMark/CheckMark';
import Clock from '../../Clock/Clock';
import CrossMark from '../../CrossMark/CrossMark';
// import styles from '../DateInfo/DateInfo.module.scss';

const StateIcon = ({state, className}) => {
    if ( state === 'ok') {
        return <CheckMark fillColor="#00B341"
                          width="21"
                          height="21"
                          className={className}/>
    } else if (state === 'inProgress') {
        return <Clock fillColor="#FF9A00"
                      width="21"
                      height="21"
                      className={className}/>
    } else if (state === 'err') {
        return <CrossMark fillColor="#FF3333"
                          width="21"
                          height="21"
                          className={className}/>
    }
};

export default StateIcon;