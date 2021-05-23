export const COOKIE_KEYS = {
  ACCESS_TOKEN: 'access_token'
};

export function getDataBodyFromResponseToData (responseData) {
  return responseData.data;
}

export function mapErrorResponseToErrorObject (error, functionName = '') {
  const newError = new Error(error);

  if (functionName) {
    newError.message = `${ functionName }: ${ newError.message }`;
  }

  throw newError;
}

export function setCookie (cname, cvalue, exSecs) {
  const today = new Date();
  today.setTime(today.getTime() + (exSecs * 1000));

  const expires = `expires=${ today.toUTCString() }`;
  document.cookie = `${ cname }=${ cvalue };${ expires };path=/`;
}

export function getCookie (cname) {
  if (typeof document !== 'object') {
    return '';
  }

  const name = `${ cname }=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const decodedCookieParts = decodedCookie.split(';');
  const foundKeyValuePair = decodedCookieParts
    .find(decodedCookiePart => decodedCookiePart && decodedCookiePart.trim().startsWith(name));
  
  if (!foundKeyValuePair) {
    return '';    
  }

  return foundKeyValuePair
    .split('=')
    .slice(1)
    .join('=');
}

export function deleteCookie (cname) {
  if (getCookie(cname)) {
    setCookie(cname, '', -86400);
  }
}
