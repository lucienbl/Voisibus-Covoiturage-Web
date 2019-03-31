// @flow

export const PATH_ROOT = '';
export const PATH_LOGIN = 'login';
export const PATH_APP = 'app';
export const PATH_MEMBER = 'member';
export const PATH_PROFILE = 'profile';


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

  static member(): string {
    return `${UrlBuilder.app()}/${PATH_MEMBER}`;
  }

  static profile(): string {
    return `${UrlBuilder.app()}/${PATH_MEMBER}/${PATH_PROFILE}`;
  }
}
