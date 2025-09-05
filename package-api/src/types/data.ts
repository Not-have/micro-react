export interface IDataLogin {
  token: string;
  refreshToken: string;
}

export interface IDataUserInfo {
  username: string;
  email: string;
  avatar: string;
  phone: string;
}

export interface IDataRefreshToken {
  refresh_token: string;
  token: string;
}
