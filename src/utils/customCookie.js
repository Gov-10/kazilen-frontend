import Cookies from 'js-cookie';

export function setCookie(key, value, maxAge = 60 * 60 * 48) {
  if (value === undefined || value === null) {
    console.error(`[setCookie] Attempted to set cookie "${key}" with a null/undefined value. Cookie NOT written.`);
    return;
  }
  Cookies.set(key, value, {
    expires: maxAge / (24 * 60 * 60), // js-cookie expects expires in days
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
}

export function getCookie(key) {
  return Cookies.get(key);
}
