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
        this.idal.getProductList(100).then(function (res) {
            if (res.data && res.statusCode === 200) {
                _this.globalData.bookDataObtained = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esd0NBQW1DO0FBT25DLEdBQUcsQ0FBUztJQUVWLFFBQVE7UUFBUixpQkFvQ0M7UUFsQ0MsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sWUFBQyxJQUFJO1lBR1osQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFHdkMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7NkJBQ3pDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxjQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQ3pDLElBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtnQkFDckMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO29CQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUNyQzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsZ0JBQWdCLEVBQUUsS0FBSztRQUN2QixVQUFVLEVBQUUsQ0FBQztLQUNkO0lBQ0QsSUFBSSxFQUFDLElBQUksY0FBSSxFQUFFO0NBQ2hCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vYXBwLnRzXG5pbXBvcnQgSURBTCBmcm9tICcuL3NlcnZpY2VzL0lEQUwnO1xuXG5pbXBvcnQge1xuICBJTXlBcHAsXG4gIElJREFMLFxufSBmcm9tICcuL21vZGVscy9tb2RlbHMnXG5cbkFwcDxJTXlBcHA+KHtcblxuICBvbkxhdW5jaCgpIHtcblxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3MoX3Jlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhfcmVzLmNvZGUpXG4gICAgICAgIC8vIOWPkemAgSBfcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgfVxuICAgIH0pXG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgLy8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxuICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgICAgICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMudXNlckluZm8pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmlkYWwgPSBuZXcgSURBTCgpO1xuICAgIHRoaXMuaWRhbC5nZXRQcm9kdWN0TGlzdCgxMDApLnRoZW4oKHJlczphbnkpPT57XG4gICAgICBpZihyZXMuZGF0YSAmJiByZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5ib29rRGF0YU9idGFpbmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbG9iYWxEYXRhLmJvb2tEYXRhID0gcmVzLmRhdGE7XG4gICAgICAgIGlmICh0aGlzLmJvb2tEYXRhUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMuYm9va0RhdGFSZWFkeUNhbGxiYWNrKHJlcy5kYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgZ2xvYmFsRGF0YToge1xuICAgIGJvb2tEYXRhT2J0YWluZWQ6IGZhbHNlLFxuICAgIGN1cnJlbnRUYWI6IDAsXG4gIH0sXG4gIGlkYWw6bmV3IElEQUwoKSxcbn0pIl19