import React from 'react';
import CheckMark from '../../CheckMark/CheckMark';
import Clock from '../../Clock/Clock';
import CrossMark from '../../CrossMark/CrossMark';
import {ERR_BUILD_STATE, IN_PROGRESS_BUILD_STATE, OK_BUILD_STATE} from './BuildStates';
// import styles from '../DateInfo/DateInfo.module.scss';

const StateIcon = ({state, className}) => {
    if (state === OK_BUILD_STATE) {
        return <CheckMark fillColor="#00B341"
                          width="21"
                          height="21"
                          className={className}/>
    } else if (state === IN_PROGRESS_BUILD_STATE) {
        return <Clock fillColor="#FF9A00"
                      width="21"
                      height="21"
                      className={className}/>
    } else if (state === ERR_BUILD_STATE) {
        return <CrossMark fillColor="#FF3333"
                          width="21"
                          height="21"
                          className={className}/>
    }
};

export default StateIcon;