"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hotOrNew = 'new';
var common_1 = require("../../utils/common");
var app = getApp();
Page({
    initialBookDataObtained: false,
    data: {
        isHot: hotOrNew === 'hot' ? true : false,
        motto: common_1.getMottoForTab(hotOrNew),
        bookDataObtained: false,
        userInfo: {},
        bookData: {},
        sortedMEAPdata: [],
        sortedPublishedData: [],
        hasUserInfo: false,
        currentTab: 0,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    bindViewTap: function () {
        console.log(app.globalData);
    },
    selectTab: function (event) {
        if (event && event.currentTarget && event.currentTarget.dataset) {
            var newTab_1 = Number(event.currentTarget.dataset.tab);
            if (!isNaN(newTab_1) && newTab_1 != this.data.currentTab) {
                this.setData({
                    currentTab: newTab_1,
                }, function () {
                    app.globalData.currentTab = newTab_1;
                });
            }
        }
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
                bookDataObtained: true,
            }, function () {
                _this.prepareInitialSortedMEAPandPublishedBooks();
            });
        }
        else {
            app.bookDataReadyCallback = function (res) {
                _this.setData({
                    bookData: res,
                    bookDataObtained: true,
                }, function () {
                    _this.prepareInitialSortedMEAPandPublishedBooks();
                });
            };
        }
    },
    onShow: function () {
        if (!this.initialBookDataObtained && app.globalData.bookDataObtained) {
            this.setBookData();
        }
        if (app.globalData.currentTab !== this.data.currentTab && !isNaN(app.globalData.currentTab)) {
            this.setData({
                currentTab: app.globalData.currentTab,
            });
        }
    },
    prepareInitialSortedMEAPandPublishedBooks: function () {
        if (this.data.bookData) {
            this.initialBookDataObtained = true;
            if (this.data.bookData.meaps && this.data.bookData.meaps.length) {
                var sortingFunction = common_1.getSortingFunctionForTab(hotOrNew);
                var sortedMEAPdata = this.data.bookData.meaps.map(function (it) { return common_1.addAuthorIfMissing(it); }).map(function (it) { return common_1.addDates(it); }).sort(sortingFunction);
                this.setData({
                    sortedMEAPdata: sortedMEAPdata
                });
            }
            if (this.data.bookData.published && this.data.bookData.published.length) {
                var sortingFunction = common_1.getSortingFunctionForTab(hotOrNew);
                var sortedPublishedData = this.data.bookData.published.map(function (it) { return common_1.addAuthorIfMissing(it); }).map(function (it) { return common_1.addDates(it); }).sort(sortingFunction);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBU3ZCLDZDQUs0QjtBQUU1QixJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQztBQUU3QixJQUFJLENBQUM7SUFDSCx1QkFBdUIsRUFBRSxLQUFLO0lBRTlCLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFDeEMsS0FBSyxFQUFFLHVCQUFjLENBQUMsUUFBUSxDQUFXO1FBQ3pDLGdCQUFnQixFQUFFLEtBQWdCO1FBQ2xDLFFBQVEsRUFBRSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQWU7UUFDekIsY0FBYyxFQUFFLEVBQWM7UUFDOUIsbUJBQW1CLEVBQUUsRUFBa0I7UUFDdkMsV0FBVyxFQUFFLEtBQWdCO1FBQzdCLFVBQVUsRUFBRSxDQUFXO1FBQ3ZCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO0tBQ3BEO0lBRUQsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxTQUFTLFlBQUMsS0FBVTtRQUNsQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQy9ELElBQU0sUUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQU0sQ0FBQyxJQUFJLFFBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixVQUFVLEVBQUUs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QVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG90T3JOZXcgPSAnbmV3JztcblxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmltcG9ydCB7XG4gIElCb29rRGF0YSxcbiAgSU1FQVBzLFxuICBJUHVibGlzaGVkXG59IGZyb20gJy4uLy4uL21vZGVscy9tb2RlbHMnO1xuXG5pbXBvcnQge1xuICBnZXRTb3J0aW5nRnVuY3Rpb25Gb3JUYWIsXG4gIGdldE1vdHRvRm9yVGFiLFxuICBhZGRBdXRob3JJZk1pc3NpbmcsXG4gIGFkZERhdGVzLFxufSBmcm9tICcuLi8uLi91dGlscy9jb21tb24nO1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5QYWdlKHtcbiAgaW5pdGlhbEJvb2tEYXRhT2J0YWluZWQ6IGZhbHNlLFxuXG4gIGRhdGE6IHtcbiAgICBpc0hvdDogaG90T3JOZXcgPT09ICdob3QnID8gdHJ1ZSA6IGZhbHNlLFxuICAgIG1vdHRvOiBnZXRNb3R0b0ZvclRhYihob3RPck5ldykgYXMgc3RyaW5nLFxuICAgIGJvb2tEYXRhT2J0YWluZWQ6IGZhbHNlIGFzIGJvb2xlYW4sXG4gICAgdXNlckluZm86IHt9LFxuICAgIGJvb2tEYXRhOiB7fSBhcyBJQm9va0RhdGEsXG4gICAgc29ydGVkTUVBUGRhdGE6IFtdIGFzIElNRUFQc1tdLFxuICAgIHNvcnRlZFB1Ymxpc2hlZERhdGE6IFtdIGFzIElQdWJsaXNoZWRbXSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UgYXMgYm9vbGVhbixcbiAgICBjdXJyZW50VGFiOiAwIGFzIG51bWJlcixcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gIH0sXG5cbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgY29uc29sZS5sb2coYXBwLmdsb2JhbERhdGEpXG4gIH0sXG5cbiAgc2VsZWN0VGFiKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuY3VycmVudFRhcmdldCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQpIHtcbiAgICAgIGNvbnN0IG5ld1RhYiA9IE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFiKTtcbiAgICAgIGlmICghaXNOYU4obmV3VGFiKSAmJiBuZXdUYWIgIT0gdGhpcy5kYXRhLmN1cnJlbnRUYWIpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgY3VycmVudFRhYjogbmV3VGFiLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEuY3VycmVudFRhYiA9IG5ld1RhYjtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0VXNlckluZm9EYXRhKCk7XG4gICAgdGhpcy5zZXRCb29rRGF0YSgpO1xuICB9LFxuXG4gIHNldEJvb2tEYXRhKCkge1xuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS5ib29rRGF0YSkge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGJvb2tEYXRhOiBhcHAuZ2xvYmFsRGF0YS5ib29rRGF0YSxcbiAgICAgICAgYm9va0RhdGFPYnRhaW5lZDogdHJ1ZSxcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5wcmVwYXJlSW5pdGlhbFNvcnRlZE1FQVBhbmRQdWJsaXNoZWRCb29rcygpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBhcHAuYm9va0RhdGFSZWFkeUNhbGxiYWNrID0gKHJlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGJvb2tEYXRhOiByZXMsXG4gICAgICAgICAgYm9va0RhdGFPYnRhaW5lZDogdHJ1ZSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlcGFyZUluaXRpYWxTb3J0ZWRNRUFQYW5kUHVibGlzaGVkQm9va3MoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAvL0lmIGRhdGEgd2FzIG9idGFpbmVkIG91dHNpZGUgaG90IHRhYiwgd2UgaGF2ZSB0byBjaGVjayBmb3IgaXRcbiAgICBpZiAoIXRoaXMuaW5pdGlhbEJvb2tEYXRhT2J0YWluZWQgJiYgYXBwLmdsb2JhbERhdGEuYm9va0RhdGFPYnRhaW5lZCkge1xuICAgICAgdGhpcy5zZXRCb29rRGF0YSgpO1xuICAgIH1cblxuICAgIC8vUmVtZW1iZXIgTUVBUC9QdWJsaXNoZWQgd2hlbiB0YWIgaXMgY2hhbmdlZFxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS5jdXJyZW50VGFiICE9PSB0aGlzLmRhdGEuY3VycmVudFRhYiAmJiAhaXNOYU4oYXBwLmdsb2JhbERhdGEuY3VycmVudFRhYikpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBjdXJyZW50VGFiOiBhcHAuZ2xvYmFsRGF0YS5jdXJyZW50VGFiLFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgcHJlcGFyZUluaXRpYWxTb3J0ZWRNRUFQYW5kUHVibGlzaGVkQm9va3MoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5ib29rRGF0YSkge1xuICAgICAgdGhpcy5pbml0aWFsQm9va0RhdGFPYnRhaW5lZCA9IHRydWU7XG5cbiAgICAgIC8vTUVBUCBkYXRhXG4gICAgICBpZiAodGhpcy5kYXRhLmJvb2tEYXRhLm1lYXBzICYmIHRoaXMuZGF0YS5ib29rRGF0YS5tZWFwcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc29ydGluZ0Z1bmN0aW9uID0gZ2V0U29ydGluZ0Z1bmN0aW9uRm9yVGFiKGhvdE9yTmV3KTtcbiAgICAgICAgY29uc3Qgc29ydGVkTUVBUGRhdGE6IElNRUFQcyA9IHRoaXMuZGF0YS5ib29rRGF0YS5tZWFwcy5tYXAoKGl0OiBhbnkpID0+IGFkZEF1dGhvcklmTWlzc2luZyhpdCkpLm1hcCgoaXQ6IGFueSkgPT4gYWRkRGF0ZXMoaXQpKS5zb3J0KHNvcnRpbmdGdW5jdGlvbik7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHNvcnRlZE1FQVBkYXRhOiBzb3J0ZWRNRUFQZGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy9QdWJsaXNoZWQgZGF0YVxuICAgICAgaWYgKHRoaXMuZGF0YS5ib29rRGF0YS5wdWJsaXNoZWQgJiYgdGhpcy5kYXRhLmJvb2tEYXRhLnB1Ymxpc2hlZC5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc29ydGluZ0Z1bmN0aW9uID0gZ2V0U29ydGluZ0Z1bmN0aW9uRm9yVGFiKGhvdE9yTmV3KTtcbiAgICAgICAgY29uc3Qgc29ydGVkUHVibGlzaGVkRGF0YTogSVB1Ymxpc2hlZCA9IHRoaXMuZGF0YS5ib29rRGF0YS5wdWJsaXNoZWQubWFwKChpdDogYW55KSA9PiBhZGRBdXRob3JJZk1pc3NpbmcoaXQpKS5tYXAoKGl0OiBhbnkpID0+IGFkZERhdGVzKGl0KSkuc29ydChzb3J0aW5nRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBzb3J0ZWRQdWJsaXNoZWREYXRhOiBzb3J0ZWRQdWJsaXNoZWREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNldFVzZXJJbmZvRGF0YSgpIHtcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKHJlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==