// @flow

export const PATH_ROOT = '';
export const PATH_LOGIN = 'login';
export const PATH_APP = 'app';
export const PATH_HOME = 'home';
export const PATH_PROFILE = 'profile';
export const PATH_PARAM_USER_ID = ':userId';


export default class UrlBuilder {

  static root(): string {
    return `/${PATH_ROOT}`;
  }

  static login(): string {
    return `/${PATH_LOGIN}`;
  }

  static app(): string {
    return `/${PATH_APP}`;
  }

  static memberHome(): string {
    return `${UrlBuilder.app()}/${PATH_HOME}`;
  }

  static profile(userId: string): string {
    return `${UrlBuilder.app()}/${PATH_PROFILE}/${userId}`;
  }
}
