import {getBuilds} from '../../requests';


export const fetchBuilds = () => {
    return (dispatch) => {
        getBuilds().then(builds => dispatch({type: 'FETCH_BUILDS', payload: builds}));
    }
}