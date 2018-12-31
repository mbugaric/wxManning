//app.ts
import IDAL from './services/IDAL';

import {
  IMyApp,
  IIDAL,
} from './models/models'

App<IMyApp>({

  onLaunch() {

    wx.login({
      success(_res) {
        // console.log(_res.code)
        // 发送 _res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res.userInfo)
              }
            }
          })
        }
      }
    })
    this.idal = new IDAL();
    this.idal.getProductList(100).then((res:any)=>{
      if(res.data && res.statusCode === 200) {
        this.globalData.bookDataObtained = true;
        this.globalData.bookData = res.data;
        if (this.bookDataReadyCallback) {
          this.bookDataReadyCallback(res.data)
        }
      }
    })
  },
  globalData: {
    bookDataObtained: false,
    currentTab: 0,
  },
  idal:new IDAL(),
})