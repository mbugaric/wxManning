export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void
  bookDataReadyCallback?(res: any): void
  idal?: IIDAL,
  globalData: {
    userInfo?: wx.UserInfo,
    bookData?: any
  }
}

export interface IIDAL {
  URLBase: string;
  getProductList: Function;
}

