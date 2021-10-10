export function saveSettingsToStore(settings) {
    localStorage.setItem('Settings', JSON.stringify(settings));
}

export function getSettingsFromStore() {
    return JSON.parse(localStorage.getItem('Settings'));
}
