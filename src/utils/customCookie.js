import Cookies from 'js-cookie';

export function setCookie(key, value, maxAge = 60 * 60 * 48) {
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

