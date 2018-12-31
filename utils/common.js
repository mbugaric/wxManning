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
function addDates(product) {
    var newProduct = product;
    if (product.publishedDate) {
        var pubDate = new Date(product.publishedDate);
        var dateString = getMonth(pubDate) + " " + pubDate.getFullYear();
        newProduct = __assign({}, newProduct, { publishedDateString: dateString });
    }
    return newProduct;
}
exports.addDates = addDates;
function getMonth(d) {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[d.getMonth()];
}
exports.getMonth = getMonth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQTtJQUVFLElBQU0sT0FBTyxHQUFHLDZCQUE2QixDQUFDO0lBQzlDLElBQU0sZ0JBQWdCLEdBQUcsdUJBQXVCLENBQUM7SUFFakQsSUFBTSxVQUFVLEdBQUcsc0NBQXNDLENBQUM7SUFFMUQsSUFBTSxXQUFXLEdBQUcsa0NBQWtDLENBQUM7SUFDdkQsSUFBTSxhQUFhLEdBQUcseUNBQXlDLENBQUM7SUFHaEUsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQVpELG9DQVlDO0FBRUQsa0NBQXlDLE9BQWU7SUFDdEQsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztRQUNoRCxPQUFPLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUM3QyxDQUFDLENBQUM7SUFDRixJQUFNLFdBQVcsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO1FBQ2hELE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUNuRCxDQUFDLENBQUM7SUFFRixRQUFRLE9BQU8sRUFBRTtRQUNmLEtBQUssS0FBSztZQUNSLE9BQU8sV0FBVyxDQUFDO1lBQ25CLE1BQU07UUFDUixLQUFLLEtBQUs7WUFDUixPQUFPLFdBQVcsQ0FBQztZQUNuQixNQUFNO1FBQ1I7WUFDRSxPQUFPLFdBQVcsQ0FBQztLQUN0QjtBQUNILENBQUM7QUFsQkQsNERBa0JDO0FBRUQsd0JBQStCLE9BQWU7SUFDNUMsSUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFBO0lBQzlCLElBQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQTtJQUU5QixRQUFRLE9BQU8sRUFBRTtRQUNmLEtBQUssS0FBSztZQUNSLE9BQU8sUUFBUSxDQUFDO1lBQ2hCLE1BQU07UUFDUixLQUFLLEtBQUs7WUFDUixPQUFPLFFBQVEsQ0FBQztZQUNoQixNQUFNO1FBQ1I7WUFDRSxPQUFPLFFBQVEsQ0FBQztLQUNuQjtBQUNILENBQUM7QUFkRCx3Q0FjQztBQUVELDRCQUFtQyxPQUFPO0lBQ3hDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDNUIsSUFBRyxDQUFDLE1BQU0sRUFBQztRQUNULE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztLQUMzQjtJQUNELG9CQUFZLE9BQU8sSUFBRSxNQUFNLEVBQUUsTUFBTSxJQUFFO0FBQ3ZDLENBQUM7QUFORCxnREFNQztBQUVELGtCQUF5QixPQUFXO0lBQ2xDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUN6QixJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUM7UUFDeEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELElBQUksVUFBVSxHQUFXLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pFLFVBQVUsZ0JBQVEsVUFBVSxJQUFFLG1CQUFtQixFQUFFLFVBQVUsR0FBQyxDQUFDO0tBQ2hFO0lBRUQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQVRELDRCQVNDO0FBRUQsa0JBQXlCLENBQU07SUFDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUN4QixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ3JCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7SUFDdEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUNuQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ25CLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDakIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ2xCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztJQUN2QixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ3JCLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7SUFDdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztJQUN2QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBZkQsNEJBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJTUVBUHNcbn0gZnJvbSAnLi4vbW9kZWxzL21vZGVscydcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJVUkwoKSB7XG5cbiAgY29uc3QgdG9uaURldiA9ICdodHRwOi8vbHZkZW8uZGRucy5uZXQ6ODA4MC8nO1xuICBjb25zdCB0b25pRGV2TG9jYWxob3N0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCc7XG4gIC8vY29uc3QgdG9uaURldiA9ICc4OC4yMDcuOTAuMTA3OjgwODAnO1xuICBjb25zdCBiYWNrZW5kRGV2ID0gJ2h0dHBzOi8vbGl2ZXZpZGVvLWJlLWRldi5tYW5uaW5nLmNvbSc7XG4gIC8vY29uc3QgYmFja2VuZERldk9sZCA9ICdodHRwOi8vbGl2ZXZpZGVvLWRldi51cy13ZXN0LTIuZWxhc3RpY2JlYW5zdGFsay5jb20nO1xuICBjb25zdCBiYWNrZW5kUHJvZCA9ICdodHRwczovL2xpdmV2aWRlby1iZS5tYW5uaW5nLmNvbSc7XG4gIGNvbnN0IGJhY2tlbmREb2NrZXIgPSAnaHR0cHM6Ly9saXZldmlkZW8tYmUtdG9rZW5zLm1hbm5pbmcuY29tJztcblxuXG4gIHJldHVybiBiYWNrZW5kRGV2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ydGluZ0Z1bmN0aW9uRm9yVGFiKHRhYlR5cGU6IHN0cmluZykge1xuICBjb25zdCBob3RGdW5jdGlvbiA9IGZ1bmN0aW9uIChhOiBJTUVBUHMsIGI6IElNRUFQcykge1xuICAgIHJldHVybiBhLmJlc3RTZWxsZXJSYW5rIC0gYi5iZXN0U2VsbGVyUmFuaztcbiAgfTtcbiAgY29uc3QgbmV3RnVuY3Rpb24gPSBmdW5jdGlvbiAoYTogSU1FQVBzLCBiOiBJTUVBUHMpIHtcbiAgICByZXR1cm4gYS5jaHJvbm9sb2dpY2FsUmFuayAtIGIuY2hyb25vbG9naWNhbFJhbms7XG4gIH07XG5cbiAgc3dpdGNoICh0YWJUeXBlKSB7XG4gICAgY2FzZSAnaG90JzpcbiAgICAgIHJldHVybiBob3RGdW5jdGlvbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ25ldyc6XG4gICAgICByZXR1cm4gbmV3RnVuY3Rpb247XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGhvdEZ1bmN0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3R0b0ZvclRhYih0YWJUeXBlOiBzdHJpbmcpIHtcbiAgY29uc3QgaG90TW90dG8gPSBgV2hhdCdzIGhvdCFgXG4gIGNvbnN0IG5ld01vdHRvID0gYFdoYXQncyBuZXchYFxuXG4gIHN3aXRjaCAodGFiVHlwZSkge1xuICAgIGNhc2UgJ2hvdCc6XG4gICAgICByZXR1cm4gaG90TW90dG87XG4gICAgICBicmVhaztcbiAgICBjYXNlICduZXcnOlxuICAgICAgcmV0dXJuIG5ld01vdHRvO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBob3RNb3R0bztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXV0aG9ySWZNaXNzaW5nKHByb2R1Y3Qpe1xuICBsZXQgYXV0aG9yID0gcHJvZHVjdC5hdXRob3I7XG4gIGlmKCFhdXRob3Ipe1xuICAgIGF1dGhvciA9IFwiVW5rbm93biBBdXRob3JcIjtcbiAgfVxuICByZXR1cm4geyAuLi5wcm9kdWN0LCBhdXRob3I6IGF1dGhvcn07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRlcyhwcm9kdWN0OmFueSkge1xuICBsZXQgbmV3UHJvZHVjdCA9IHByb2R1Y3Q7IFxuICBpZiAocHJvZHVjdC5wdWJsaXNoZWREYXRlKXtcbiAgICBjb25zdCBwdWJEYXRlID0gbmV3IERhdGUocHJvZHVjdC5wdWJsaXNoZWREYXRlKTtcbiAgICBsZXQgZGF0ZVN0cmluZzogc3RyaW5nID0gZ2V0TW9udGgocHViRGF0ZSkgKyBcIiBcIiArIHB1YkRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBuZXdQcm9kdWN0ID0geyAuLi5uZXdQcm9kdWN0LCBwdWJsaXNoZWREYXRlU3RyaW5nOiBkYXRlU3RyaW5nfTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld1Byb2R1Y3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkOkRhdGUpe1xuICB2YXIgbW9udGggPSBuZXcgQXJyYXkoKTtcbiAgbW9udGhbMF0gPSBcIkphbnVhcnlcIjtcbiAgbW9udGhbMV0gPSBcIkZlYnJ1YXJ5XCI7XG4gIG1vbnRoWzJdID0gXCJNYXJjaFwiO1xuICBtb250aFszXSA9IFwiQXByaWxcIjtcbiAgbW9udGhbNF0gPSBcIk1heVwiO1xuICBtb250aFs1XSA9IFwiSnVuZVwiO1xuICBtb250aFs2XSA9IFwiSnVseVwiO1xuICBtb250aFs3XSA9IFwiQXVndXN0XCI7XG4gIG1vbnRoWzhdID0gXCJTZXB0ZW1iZXJcIjtcbiAgbW9udGhbOV0gPSBcIk9jdG9iZXJcIjtcbiAgbW9udGhbMTBdID0gXCJOb3ZlbWJlclwiO1xuICBtb250aFsxMV0gPSBcIkRlY2VtYmVyXCI7XG4gIHJldHVybiBtb250aFtkLmdldE1vbnRoKCldO1xufSJdfQ==