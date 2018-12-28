const hotOrNew = 'new';

import { IMyApp } from '../../app';
import {
  IBookData,
  IMEAPs,
  IPublished
} from '../../models/models';

import {
  getSortingFunctionForTab,
  getMottoForTab
} from '../../utils/common';

const app = getApp<IMyApp>();


Page({
  data: {
    motto: getMottoForTab(hotOrNew),
    userInfo: {},
    bookData: {} as IBookData,
    sortedMEAPdata: [] as IMEAPs[],
    sortedPublishedData: {} as IPublished[],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  bindViewTap() {
    console.log(app.globalData)
  },

  onLoad() {
    this.setUserInfoData();
    this.setBookData();
  },

  setBookData() {
    if (app.globalData.bookData) {
      this.setData!({
        bookData: app.globalData.bookData,
      }, () => {
        this.prepareInitialSortedMEAPandPublishedBooks()
      })
    } else {
      app.bookDataReadyCallback = (res: any) => {
        this.setData!({
          bookData: res,
        }, () => {
          this.prepareInitialSortedMEAPandPublishedBooks()
        })
      }
    }
  },

  onShow: function () {
    console.log(hotOrNew, app.globalData.bookDataObtained, "sortedMEAPdata", this.data.sortedMEAPdata, "!!!")
    console.log(hotOrNew, app.globalData.bookDataObtained, "sortedPublishedData", this.data.sortedPublishedData, "!!!")
  },

  prepareInitialSortedMEAPandPublishedBooks() {
    if (this.data.bookData) {
      //MEAP data
      if (this.data.bookData.meaps && this.data.bookData.meaps.length) {
        const sortingFunction = getSortingFunctionForTab(hotOrNew);
        const sortedMEAPdata: IMEAPs = this.data.bookData.meaps.sort(sortingFunction);
        this.setData!({
          sortedMEAPdata: sortedMEAPdata
        })
      }
      //Published data
      if (this.data.bookData.published && this.data.bookData.published.length) {
        const sortingFunction = getSortingFunctionForTab(hotOrNew);
        const sortedPublishedData: IPublished = this.data.bookData.published.sort(sortingFunction);
        this.setData!({
          sortedPublishedData: sortedPublishedData
        })
      }
    }
  },


  setUserInfoData() {
    if (app.globalData.userInfo) {
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = (res: any) => {
        this.setData!({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData!({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
