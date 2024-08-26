export function redirect(href, event) {
    let element = event.currentTarget;
    if (element)
        element.style.pointerEvents = 'none';
    window.location.href = href;
}
export function getCurrentFileName() {
    let fullPath = window.location.pathname;
    return fullPath.split("/").pop();
}
export function getCurrentSubdomain() {
    const currentHost = window.location.host;
    const parts = currentHost.split('.');
    if (parts.length <= 2) {
        return null;
    }
    if (parts[0] === 'localhost' || /^\d+$/.test(parts[0].replace(/\./g, ''))) {
        return null;
    }
    return parts[0];
}
export function getRootDomain() {
    const hostname = window.location.hostname;
    const parts = hostname.split(".");
    // Pokud adresa obsahuje méně než dvě tečky, nebo je to IP adresa, není to pod doménou
    if (parts.length < 3 || parts.every(part => !isNaN(parseInt(part)))) {
        return null;
    }
    return parts.slice(-2).join(".");
}
export function addCookie(prop, value, expires = null) {
    let today = new Date();
    let expirationDate = new Date();
    if (expires !== null)
        expirationDate = expires;
    else
        expirationDate.setFullYear(today.getFullYear() + 1);
    document.cookie = `${prop}=${value}; path=/;${getRootDomain() ? 'domain=' + getRootDomain() + ';' : ''}; expires=${expirationDate.toString()}`;
}
export function getCookie(prop) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === prop) {
            return cookie[1];
        }
    }
    return null;
}
export function removeCookie(prop) {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
        const cookieParts = cookie.split("=");
        if (cookieParts[0].trim() === prop) {
            const cookieName = cookieParts[0].trim();
            const cookieDomain = `.${getRootDomain()}`;
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;${getRootDomain() ? 'domain=' + getRootDomain() + ';' : ''}`;
        }
    });
}
export function setWebTheme(theme) {
    addCookie('theme', theme);
}
export function openModal(vue, modalId) {
    if (modalId === null) {
        vue.modalOpened = null;
        return;
    }
    vue.modalOpened = modalId;
}
export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
window.addCookie = addCookie;
