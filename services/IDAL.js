"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../utils/common");
var debug = true;
var IDAL = (function () {
    function IDAL() {
        this.URLBase = common_1.getServerURL();
    }
    IDAL.prototype.getProductList = function (maxElements) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.URLBase + '/wx/getProductList';
            if (debug)
                console.log("%cgetProductList ", 'background: #ffbf00; color: black');
            _this.sendWxRequest(url, maxElements).then(function (res) {
                resolve(res);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    IDAL.prototype.sendWxRequest = function (url, maxElements) {
        return new Promise(function (resolve, reject) {
            var data = maxElements ? { maxElements: maxElements } : {};
            wx.request({
                url: url,
                data: data,
                method: 'POST',
                header: {
                    'content-type': 'application/json'
                },
                success: function (res) {
                    resolve(res);
                },
                fail: function (error) {
                    reject(error);
                }
            });
        });
    };
    return IDAL;
}());
exports.default = IDAL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSURBTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklEQUwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FFeUI7QUFFekIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBRW5CO0lBSUU7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFZLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sNkJBQWMsR0FBckIsVUFBc0IsV0FBbUI7UUFBekMsaUJBYUM7UUFaQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBTSxHQUFHLEdBQVUsS0FBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztZQUV2RCxJQUFJLEtBQUs7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1lBRWpGLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7Z0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFBO1FBRUosQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sNEJBQWEsR0FBcEIsVUFBcUIsR0FBVSxFQUFFLFdBQW1CO1FBQ2xELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUVqQyxJQUFNLElBQUksR0FBVSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbkUsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsR0FBRztnQkFDUixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUU7b0JBQ04sY0FBYyxFQUFFLGtCQUFrQjtpQkFDbkM7Z0JBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxLQUFLO29CQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDZixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgZ2V0U2VydmVyVVJMXG59IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5cbmNvbnN0IGRlYnVnID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURBTCB7XG5cbiAgVVJMQmFzZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5VUkxCYXNlID0gZ2V0U2VydmVyVVJMKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvZHVjdExpc3QobWF4RWxlbWVudHM/Om51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHVybDpzdHJpbmcgPSB0aGlzLlVSTEJhc2UgKyAnL3d4L2dldFByb2R1Y3RMaXN0JztcblxuICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIiVjZ2V0UHJvZHVjdExpc3QgXCIsICdiYWNrZ3JvdW5kOiAjZmZiZjAwOyBjb2xvcjogYmxhY2snKTtcbiAgICAgIFxuICAgICAgdGhpcy5zZW5kV3hSZXF1ZXN0KHVybCwgbWF4RWxlbWVudHMpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSlcbiAgICAgIFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNlbmRXeFJlcXVlc3QodXJsOnN0cmluZywgbWF4RWxlbWVudHM/Om51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgY29uc3QgZGF0YTpvYmplY3QgPSBtYXhFbGVtZW50cyA/IHsgbWF4RWxlbWVudHM6IG1heEVsZW1lbnRzfSA6IHt9O1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59Il19