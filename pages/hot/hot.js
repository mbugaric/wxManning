"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hotOrNew = 'hot';
var common_1 = require("../../utils/common");
var app = getApp();
Page({
    data: {
        motto: common_1.getMottoForTab(hotOrNew),
        userInfo: {},
        bookData: {},
        sortedMEAPdata: [],
        sortedPublishedData: [],
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    bindViewTap: function () {
        console.log(app.globalData);
    },
    onLoad: function () {
        this.setUserInfoData();
        this.setBookData();
    },
    setBookData: function () {
        var _this = this;
        if (app.globalData.bookData) {
            this.setData({
                bookData: app.globalData.bookData,
            }, function () {
                _this.prepareInitialSortedMEAPandPublishedBooks();
            });
        }
        else {
            app.bookDataReadyCallback = function (res) {
                _this.setData({
                    bookData: res,
                }, function () {
                    _this.prepareInitialSortedMEAPandPublishedBooks();
                });
            };
        }
    },
    onShow: function () {
        console.log(hotOrNew, app.globalData.bookDataObtained, "sortedMEAPdata", this.data.sortedMEAPdata, "!!!");
        console.log(hotOrNew, app.globalData.bookDataObtained, "sortedPublishedData", this.data.sortedPublishedData, "!!!");
    },
    prepareInitialSortedMEAPandPublishedBooks: function () {
        if (this.data.bookData) {
            if (this.data.bookData.meaps && this.data.bookData.meaps.length) {
                var sortingFunction = common_1.getSortingFunctionForTab(hotOrNew);
                var sortedMEAPdata = this.data.bookData.meaps.sort(sortingFunction);
                this.setData({
                    sortedMEAPdata: sortedMEAPdata
                });
            }
            if (this.data.bookData.published && this.data.bookData.published.length) {
                var sortingFunction = common_1.getSortingFunctionForTab(hotOrNew);
                var sortedPublishedData = this.data.bookData.published.sort(sortingFunction);
                this.setData({
                    sortedPublishedData: sortedPublishedData
                });
            }
        }
    },
    setUserInfoData: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBU3ZCLDZDQUc0QjtBQUU1QixJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQztBQUc3QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsdUJBQWMsQ0FBQyxRQUFRLENBQUM7UUFDL0IsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBZTtRQUN6QixjQUFjLEVBQUUsRUFBYztRQUM5QixtQkFBbUIsRUFBRSxFQUFrQjtRQUN2QyxXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztLQUNwRDtJQUNELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFBWCxpQkFnQkM7UUFmQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTthQUNsQyxFQUFFO2dCQUNELEtBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFBO1lBQ2hELENBQUMsQ0FBQyxDQUFBO1NBQ0w7YUFBSztZQUNKLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLEdBQVE7Z0JBQ25DLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osUUFBUSxFQUFFLEdBQUc7aUJBQ2QsRUFBRTtvQkFDRCxLQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBQTtnQkFDbEQsQ0FBQyxDQUFD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QUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG90T3JOZXcgPSAnaG90JztcblxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmltcG9ydCB7XG4gIElCb29rRGF0YSxcbiAgSU1FQVBzLFxuICBJUHVibGlzaGVkXG59IGZyb20gJy4uLy4uL21vZGVscy9tb2RlbHMnO1xuXG5pbXBvcnQge1xuICBnZXRTb3J0aW5nRnVuY3Rpb25Gb3JUYWIsXG4gIGdldE1vdHRvRm9yVGFiXG59IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbic7XG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XG5cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBtb3R0bzogZ2V0TW90dG9Gb3JUYWIoaG90T3JOZXcpLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBib29rRGF0YToge30gYXMgSUJvb2tEYXRhLFxuICAgIHNvcnRlZE1FQVBkYXRhOiBbXSBhcyBJTUVBUHNbXSxcbiAgICBzb3J0ZWRQdWJsaXNoZWREYXRhOiBbXSBhcyBJUHVibGlzaGVkW10sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgfSxcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgY29uc29sZS5sb2coYXBwLmdsb2JhbERhdGEpXG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0VXNlckluZm9EYXRhKCk7XG4gICAgdGhpcy5zZXRCb29rRGF0YSgpO1xuICB9LFxuXG4gIHNldEJvb2tEYXRhKCl7XG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLmJvb2tEYXRhKXtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBib29rRGF0YTogYXBwLmdsb2JhbERhdGEuYm9va0RhdGEsXG4gICAgICB9LCAoKSA9PiB7IFxuICAgICAgICB0aGlzLnByZXBhcmVJbml0aWFsU29ydGVkTUVBUGFuZFB1Ymxpc2hlZEJvb2tzKCkgXG4gICAgICAgIH0pXG4gICAgfSBlbHNle1xuICAgICAgYXBwLmJvb2tEYXRhUmVhZHlDYWxsYmFjayA9IChyZXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBib29rRGF0YTogcmVzLFxuICAgICAgICB9LCAoKSA9PiB7IFxuICAgICAgICAgIHRoaXMucHJlcGFyZUluaXRpYWxTb3J0ZWRNRUFQYW5kUHVibGlzaGVkQm9va3MoKSBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coaG90T3JOZXcsIGFwcC5nbG9iYWxEYXRhLmJvb2tEYXRhT2J0YWluZWQsIFwic29ydGVkTUVBUGRhdGFcIiwgdGhpcy5kYXRhLnNvcnRlZE1FQVBkYXRhLFwiISEhXCIpXG4gICAgY29uc29sZS5sb2coaG90T3JOZXcsIGFwcC5nbG9iYWxEYXRhLmJvb2tEYXRhT2J0YWluZWQsIFwic29ydGVkUHVibGlzaGVkRGF0YVwiLCB0aGlzLmRhdGEuc29ydGVkUHVibGlzaGVkRGF0YSxcIiEhIVwiKVxuICB9LFxuXG4gIHByZXBhcmVJbml0aWFsU29ydGVkTUVBUGFuZFB1Ymxpc2hlZEJvb2tzKCl7XG4gICAgaWYgKHRoaXMuZGF0YS5ib29rRGF0YSl7XG4gICAgICAvL01FQVAgZGF0YVxuICAgICAgaWYgKHRoaXMuZGF0YS5ib29rRGF0YS5tZWFwcyAmJiB0aGlzLmRhdGEuYm9va0RhdGEubWVhcHMubGVuZ3RoICl7XG4gICAgICAgIGNvbnN0IHNvcnRpbmdGdW5jdGlvbiA9IGdldFNvcnRpbmdGdW5jdGlvbkZvclRhYihob3RPck5ldyk7XG4gICAgICAgIGNvbnN0IHNvcnRlZE1FQVBkYXRhOiBJTUVBUHMgPSB0aGlzLmRhdGEuYm9va0RhdGEubWVhcHMuc29ydChzb3J0aW5nRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBzb3J0ZWRNRUFQZGF0YTogc29ydGVkTUVBUGRhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vUHVibGlzaGVkIGRhdGFcbiAgICAgIGlmICh0aGlzLmRhdGEuYm9va0RhdGEucHVibGlzaGVkICYmIHRoaXMuZGF0YS5ib29rRGF0YS5wdWJsaXNoZWQubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHNvcnRpbmdGdW5jdGlvbiA9IGdldFNvcnRpbmdGdW5jdGlvbkZvclRhYihob3RPck5ldyk7XG4gICAgICAgIGNvbnN0IHNvcnRlZFB1Ymxpc2hlZERhdGE6IElQdWJsaXNoZWQgPSB0aGlzLmRhdGEuYm9va0RhdGEucHVibGlzaGVkLnNvcnQoc29ydGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgc29ydGVkUHVibGlzaGVkRGF0YTogc29ydGVkUHVibGlzaGVkRGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuXG4gIHNldFVzZXJJbmZvRGF0YSgpe1xuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckluZm86IHJlcyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICB9KVxuICB9XG59KVxuIl19