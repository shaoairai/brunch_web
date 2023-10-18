/*****************

    取得 token

*****************/

export function getTokenFromCookie() {
    const tokenCookie = document.cookie.split(';').map(cookie => cookie.trim()).find(cookie => cookie.startsWith('token='));
    const token = tokenCookie ? tokenCookie.split('=')[1] : null;
    return token;
}