export const AUTH_TOKEN_KEY = 'six-cities';

export type Token = string;
export type TokenKey = string;

export const getToken = (tokenKey : TokenKey) : Token => localStorage.getItem(tokenKey) ?? '_';
export const saveToken = (tokenKey : TokenKey,token : Token) => localStorage.setItem(tokenKey,token);
export const dropToken = (tokenKey : TokenKey) => localStorage.removeItem(tokenKey);
