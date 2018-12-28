export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void
  bookDataReadyCallback?(res: any): void
  idal?: IIDAL,
  globalData: {
    userInfo?: wx.UserInfo,
    bookData?: any
    bookDataObtained: boolean,
  }
}

export interface IIDAL {
  URLBase: string;
  getProductList: Function;
}

export interface IBookData{
  meaps: any,
  published: any,
}

export interface IMEAPs{
  bestSellerRank: number,
  chronologicalRank: number,
  completedChapters: 5,
  totalChapters: number,
  coverImage: string,
  id: number,
  isMEAP: boolean,
  linkToMarketplace: string,
  meapStart: string,
  title: string,
}

export interface IPublished{
  bestSellerRank: number,
  chronologicalRank: number,
  coverImage: string,
  id: number,
  isMEAP: boolean,
  linkToMarketplace: string,
  publishedDate: string,
  title: string,
}
