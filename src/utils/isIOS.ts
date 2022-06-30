// function that returns true if the user is using IOS devices.
export const isIOS = () => {
    const userAgent = window.navigator.userAgent;
    return (/iP(hone|od|ad)/.test(userAgent));
}