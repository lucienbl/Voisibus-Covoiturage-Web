/* eslint-disable no-param-reassign,no-useless-escape */
// @flow

class UrlUtils {

  static getQueryParamByName(name: string): ?string {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

}

export default UrlUtils;
