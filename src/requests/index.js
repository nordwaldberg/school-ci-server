import _ from 'lodash';
import {settingsMock} from './mocks/settings';
import {buildsMock} from './mocks/builds';


export async function saveSettings(settings) {
    if (_.isEqual(settings, settingsMock)) {
        return mockedFetch({result: 'OK'});
    }

    return mockedFetch({result: 'Error'}, false);
}

export async function getBuilds() {
    return mockedFetch(buildsMock);
}

function mockedFetch(answer, success = true, delay = 1500) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (success) {
                res(answer);
            } else {
                rej(answer)
            }
        }, delay);
    })
}
