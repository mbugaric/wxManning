"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../utils/common");
var debug = true;
var IDAL = (function () {
    function IDAL() {
        this.URLBase = common_1.getServerURL();
    }
    IDAL.prototype.getProductList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.URLBase + '/wx/getProductList';
            if (debug)
                console.log("%cgetProductList ", 'background: #ffbf00; color: black');
            _this.sendWxRequest(url).then(function (res) {
                resolve(res);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    IDAL.prototype.sendWxRequest = function (url) {
        return new Promise(function (resolve, reject) {
            wx.request({
                url: url,
                data: {},
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSURBTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklEQUwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FFeUI7QUFFekIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBRW5CO0lBSUU7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFZLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sNkJBQWMsR0FBckI7UUFBQSxpQkFhQztRQVpDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxJQUFNLEdBQUcsR0FBVSxLQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO1lBRXZELElBQUksS0FBSztnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLG1DQUFtQyxDQUFDLENBQUM7WUFFakYsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQTtRQUVKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDRCQUFhLEdBQXBCLFVBQXFCLEdBQVU7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLEVBQ0w7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ25DO2dCQUNELE9BQU8sRUFBRSxVQUFDLEdBQUc7b0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNkLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQUMsS0FBSztvQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ2YsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXG4gIGdldFNlcnZlclVSTFxufSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCBkZWJ1ZyA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElEQUwge1xuXG4gIFVSTEJhc2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuVVJMQmFzZSA9IGdldFNlcnZlclVSTCgpO1xuICB9XG5cbiAgcHVibGljIGdldFByb2R1Y3RMaXN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHVybDpzdHJpbmcgPSB0aGlzLlVSTEJhc2UgKyAnL3d4L2dldFByb2R1Y3RMaXN0JztcblxuICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIiVjZ2V0UHJvZHVjdExpc3QgXCIsICdiYWNrZ3JvdW5kOiAjZmZiZjAwOyBjb2xvcjogYmxhY2snKTtcbiAgICAgIFxuICAgICAgdGhpcy5zZW5kV3hSZXF1ZXN0KHVybCkudGhlbigocmVzKT0+e1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpPT57XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KVxuICAgICAgXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2VuZFd4UmVxdWVzdCh1cmw6c3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufSJdfQ==