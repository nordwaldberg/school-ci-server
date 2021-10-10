export function saveSettingsToLocalStorage(settings) {
    localStorage.setItem('Settings', JSON.stringify(settings));
}

export function getSettingsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('Settings'));
}