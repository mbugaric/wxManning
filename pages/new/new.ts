//new.js
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    motto: `What's new!`,
    userInfo: {},
    bookData: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  bindViewTap() {
    console.log(app.globalData)
  },

  onLoad() {
    this.setUserInfoData();
    this.setBookData();

    app.bookDataReadyCallbackNew = (res: any) => {
      console.log(app.globalData, " what's new !!!")
    }

  },

  setBookData() {
    if (app.globalData.bookData) {
      console.log("new: bookData already found!")
      this.setData!({
        bookData: app.globalData.bookData,
      })
    } else {
      console.log("new: bookData not found!")
      app.bookDataReadyCallback = (res: any) => {
        console.log("new: callback!", res)
        this.setData!({
          bookData: res,
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
