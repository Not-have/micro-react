export interface IDataLogin {
  token: string;
  refreshToken: string;
}

export interface IDataUserInfo {
  name: string;
  email: string;
  avatar: string;
  phone: string;
}

export interface IDataRefreshToken {
  refresh_token: string;
  token: string;
}
