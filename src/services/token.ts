export const AUTH_TOKEN = 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';
export const AUTH_TOKEN_KEY = 'six-cities';

export type Token = string;
export type TokenKey = string;

export const getToken = (tokenKey : TokenKey) : Token => localStorage.getItem(tokenKey) ?? '';
export const saveToken = (tokenKey : TokenKey,token : Token) => localStorage.setItem(tokenKey,token);
export const dropToken = (tokenKey : TokenKey) => localStorage.removeItem(tokenKey);
