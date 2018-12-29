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
        this.idal.getProductList(12).then(function (res) {
            if (res.data && res.statusCode === 200) {
                _this.globalData.bookData = res.data;
                _this.globalData.bookDataObtained = true;
                if (_this.bookDataReadyCallback) {
                    _this.bookDataReadyCallback(res.data);
                }
            }
        });
    },
    globalData: {
        bookDataObtained: false,
    },
    idal: new IDAL_1.default(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esd0NBQW1DO0FBT25DLEdBQUcsQ0FBUztJQUVWLFFBQVE7UUFBUixpQkFxQ0M7UUFuQ0MsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sWUFBQyxJQUFJO1lBR1osQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFHdkMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7NkJBQ3pDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxjQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQ3hDLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtnQkFDckMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQ3hDLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO29CQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUNyQzthQUNGO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsZ0JBQWdCLEVBQUUsS0FBSztLQUN4QjtJQUNELElBQUksRUFBQyxJQUFJLGNBQUksRUFBRTtDQUNoQixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC50c1xuaW1wb3J0IElEQUwgZnJvbSAnLi9zZXJ2aWNlcy9JREFMJztcblxuaW1wb3J0IHtcbiAgSU15QXBwLFxuICBJSURBTCxcbn0gZnJvbSAnLi9tb2RlbHMvbW9kZWxzJ1xuXG5BcHA8SU15QXBwPih7XG5cbiAgb25MYXVuY2goKSB7XG5cbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzKF9yZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Jlcy5jb2RlKVxuICAgICAgICAvLyDlj5HpgIEgX3Jlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgIH1cbiAgICB9KVxuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAgICAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzLnVzZXJJbmZvKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5pZGFsID0gbmV3IElEQUwoKTtcbiAgICB0aGlzLmlkYWwuZ2V0UHJvZHVjdExpc3QoMTIpLnRoZW4oKHJlczphbnkpPT57XG4gICAgICBpZihyZXMuZGF0YSAmJiByZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5ib29rRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICB0aGlzLmdsb2JhbERhdGEuYm9va0RhdGFPYnRhaW5lZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmJvb2tEYXRhUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMuYm9va0RhdGFSZWFkeUNhbGxiYWNrKHJlcy5kYXRhKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KVxuICB9LFxuICBnbG9iYWxEYXRhOiB7XG4gICAgYm9va0RhdGFPYnRhaW5lZDogZmFsc2UsXG4gIH0sXG4gIGlkYWw6bmV3IElEQUwoKSxcbn0pIl19