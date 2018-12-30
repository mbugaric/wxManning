"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function getServerURL() {
    var toniDev = 'http://lvdeo.ddns.net:8080/';
    var toniDevLocalhost = 'http://localhost:8080';
    var backendDev = 'https://livevideo-be-dev.manning.com';
    var backendProd = 'https://livevideo-be.manning.com';
    var backendDocker = 'https://livevideo-be-tokens.manning.com';
    return backendDev;
}
exports.getServerURL = getServerURL;
function getSortingFunctionForTab(tabType) {
    var hotFunction = function (a, b) {
        return a.bestSellerRank - b.bestSellerRank;
    };
    var newFunction = function (a, b) {
        return a.chronologicalRank - b.chronologicalRank;
    };
    switch (tabType) {
        case 'hot':
            return hotFunction;
            break;
        case 'new':
            return newFunction;
            break;
        default:
            return hotFunction;
    }
}
exports.getSortingFunctionForTab = getSortingFunctionForTab;
function getMottoForTab(tabType) {
    var hotMotto = "What's hot!";
    var newMotto = "What's new!";
    switch (tabType) {
        case 'hot':
            return hotMotto;
            break;
        case 'new':
            return newMotto;
            break;
        default:
            return hotMotto;
    }
}
exports.getMottoForTab = getMottoForTab;
function addAuthorIfMissing(product) {
    var author = product.author;
    if (!author) {
        author = "Unknown Author";
    }
    return __assign({}, product, { author: author });
}
exports.addAuthorIfMissing = addAuthorIfMissing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQTtJQUVFLElBQU0sT0FBTyxHQUFHLDZCQUE2QixDQUFDO0lBQzlDLElBQU0sZ0JBQWdCLEdBQUcsdUJBQXVCLENBQUM7SUFFakQsSUFBTSxVQUFVLEdBQUcsc0NBQXNDLENBQUM7SUFFMUQsSUFBTSxXQUFXLEdBQUcsa0NBQWtDLENBQUM7SUFDdkQsSUFBTSxhQUFhLEdBQUcseUNBQXlDLENBQUM7SUFHaEUsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQVpELG9DQVlDO0FBRUQsa0NBQXlDLE9BQWU7SUFDdEQsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztRQUNoRCxPQUFPLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUM3QyxDQUFDLENBQUM7SUFDRixJQUFNLFdBQVcsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO1FBQ2hELE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUNuRCxDQUFDLENBQUM7SUFFRixRQUFRLE9BQU8sRUFBRTtRQUNmLEtBQUssS0FBSztZQUNSLE9BQU8sV0FBVyxDQUFDO1lBQ25CLE1BQU07UUFDUixLQUFLLEtBQUs7WUFDUixPQUFPLFdBQVcsQ0FBQztZQUNuQixNQUFNO1FBQ1I7WUFDRSxPQUFPLFdBQVcsQ0FBQztLQUN0QjtBQUNILENBQUM7QUFsQkQsNERBa0JDO0FBRUQsd0JBQStCLE9BQWU7SUFDNUMsSUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFBO0lBQzlCLElBQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQTtJQUU5QixRQUFRLE9BQU8sRUFBRTtRQUNmLEtBQUssS0FBSztZQUNSLE9BQU8sUUFBUSxDQUFDO1lBQ2hCLE1BQU07UUFDUixLQUFLLEtBQUs7WUFDUixPQUFPLFFBQVEsQ0FBQztZQUNoQixNQUFNO1FBQ1I7WUFDRSxPQUFPLFFBQVEsQ0FBQztLQUNuQjtBQUNILENBQUM7QUFkRCx3Q0FjQztBQUVELDRCQUFtQyxPQUFPO0lBQ3hDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDNUIsSUFBRyxDQUFDLE1BQU0sRUFBQztRQUNULE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztLQUMzQjtJQUNELG9CQUFZLE9BQU8sSUFBRSxNQUFNLEVBQUUsTUFBTSxJQUFFO0FBQ3ZDLENBQUM7QUFORCxnREFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElNRUFQc1xufSBmcm9tICcuLi9tb2RlbHMvbW9kZWxzJ1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclVSTCgpIHtcblxuICBjb25zdCB0b25pRGV2ID0gJ2h0dHA6Ly9sdmRlby5kZG5zLm5ldDo4MDgwLyc7XG4gIGNvbnN0IHRvbmlEZXZMb2NhbGhvc3QgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJztcbiAgLy9jb25zdCB0b25pRGV2ID0gJzg4LjIwNy45MC4xMDc6ODA4MCc7XG4gIGNvbnN0IGJhY2tlbmREZXYgPSAnaHR0cHM6Ly9saXZldmlkZW8tYmUtZGV2Lm1hbm5pbmcuY29tJztcbiAgLy9jb25zdCBiYWNrZW5kRGV2T2xkID0gJ2h0dHA6Ly9saXZldmlkZW8tZGV2LnVzLXdlc3QtMi5lbGFzdGljYmVhbnN0YWxrLmNvbSc7XG4gIGNvbnN0IGJhY2tlbmRQcm9kID0gJ2h0dHBzOi8vbGl2ZXZpZGVvLWJlLm1hbm5pbmcuY29tJztcbiAgY29uc3QgYmFja2VuZERvY2tlciA9ICdodHRwczovL2xpdmV2aWRlby1iZS10b2tlbnMubWFubmluZy5jb20nO1xuXG5cbiAgcmV0dXJuIGJhY2tlbmREZXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3J0aW5nRnVuY3Rpb25Gb3JUYWIodGFiVHlwZTogc3RyaW5nKSB7XG4gIGNvbnN0IGhvdEZ1bmN0aW9uID0gZnVuY3Rpb24gKGE6IElNRUFQcywgYjogSU1FQVBzKSB7XG4gICAgcmV0dXJuIGEuYmVzdFNlbGxlclJhbmsgLSBiLmJlc3RTZWxsZXJSYW5rO1xuICB9O1xuICBjb25zdCBuZXdGdW5jdGlvbiA9IGZ1bmN0aW9uIChhOiBJTUVBUHMsIGI6IElNRUFQcykge1xuICAgIHJldHVybiBhLmNocm9ub2xvZ2ljYWxSYW5rIC0gYi5jaHJvbm9sb2dpY2FsUmFuaztcbiAgfTtcblxuICBzd2l0Y2ggKHRhYlR5cGUpIHtcbiAgICBjYXNlICdob3QnOlxuICAgICAgcmV0dXJuIGhvdEZ1bmN0aW9uO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbmV3JzpcbiAgICAgIHJldHVybiBuZXdGdW5jdGlvbjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaG90RnVuY3Rpb247XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdHRvRm9yVGFiKHRhYlR5cGU6IHN0cmluZykge1xuICBjb25zdCBob3RNb3R0byA9IGBXaGF0J3MgaG90IWBcbiAgY29uc3QgbmV3TW90dG8gPSBgV2hhdCdzIG5ldyFgXG5cbiAgc3dpdGNoICh0YWJUeXBlKSB7XG4gICAgY2FzZSAnaG90JzpcbiAgICAgIHJldHVybiBob3RNb3R0bztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ25ldyc6XG4gICAgICByZXR1cm4gbmV3TW90dG87XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGhvdE1vdHRvO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBdXRob3JJZk1pc3NpbmcocHJvZHVjdCl7XG4gIGxldCBhdXRob3IgPSBwcm9kdWN0LmF1dGhvcjtcbiAgaWYoIWF1dGhvcil7XG4gICAgYXV0aG9yID0gXCJVbmtub3duIEF1dGhvclwiO1xuICB9XG4gIHJldHVybiB7IC4uLnByb2R1Y3QsIGF1dGhvcjogYXV0aG9yfTtcbn0iXX0=