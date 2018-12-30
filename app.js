"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IDAL_1 = require("./services/IDAL");
App({
    onLaunch: function () {
        var _this = this;
        wx.login({
            success: function (_res) {
            }
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res.userInfo);
                            }
                        }
                    });
                }
            }
        });
        this.idal = new IDAL_1.default();
        this.idal.getProductList(10).then(function (res) {
            if (res.data && res.statusCode === 200) {
                _this.globalData.bookData = res.data;
                if (_this.bookDataReadyCallback) {
                    _this.bookDataReadyCallback(res.data);
                }
            }
        });
    },
    globalData: {
        bookDataObtained: false,
        currentTab: 0,
    },
    idal: new IDAL_1.default(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esd0NBQW1DO0FBT25DLEdBQUcsQ0FBUztJQUVWLFFBQVE7UUFBUixpQkFtQ0M7UUFqQ0MsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sWUFBQyxJQUFJO1lBR1osQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFHdkMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7NkJBQ3pDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxjQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQ3hDLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtnQkFDckMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDcEMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7b0JBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ3JDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDVixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLFVBQVUsRUFBRSxDQUFDO0tBQ2Q7SUFDRCxJQUFJLEVBQUMsSUFBSSxjQUFJLEVBQUU7Q0FDaEIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9hcHAudHNcbmltcG9ydCBJREFMIGZyb20gJy4vc2VydmljZXMvSURBTCc7XG5cbmltcG9ydCB7XG4gIElNeUFwcCxcbiAgSUlEQUwsXG59IGZyb20gJy4vbW9kZWxzL21vZGVscydcblxuQXBwPElNeUFwcD4oe1xuXG4gIG9uTGF1bmNoKCkge1xuXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzcyhfcmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKF9yZXMuY29kZSlcbiAgICAgICAgLy8g5Y+R6YCBIF9yZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICB9XG4gICAgfSlcbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcy51c2VySW5mbylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuaWRhbCA9IG5ldyBJREFMKCk7XG4gICAgdGhpcy5pZGFsLmdldFByb2R1Y3RMaXN0KDEwKS50aGVuKChyZXM6YW55KT0+e1xuICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICB0aGlzLmdsb2JhbERhdGEuYm9va0RhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuYm9va0RhdGFSZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgdGhpcy5ib29rRGF0YVJlYWR5Q2FsbGJhY2socmVzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBnbG9iYWxEYXRhOiB7XG4gICAgYm9va0RhdGFPYnRhaW5lZDogZmFsc2UsXG4gICAgY3VycmVudFRhYjogMCxcbiAgfSxcbiAgaWRhbDpuZXcgSURBTCgpLFxufSkiXX0=