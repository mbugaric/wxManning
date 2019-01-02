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
function fixData(product) {
    var authorshipDisplay = product.authorshipDisplay;
    if (!authorshipDisplay) {
        authorshipDisplay = "Unknown Author";
    }
    authorshipDisplay = decodeEntities(authorshipDisplay.replace(/<(?:.|\n)*?>/gm, ' '));
    var title = decodeEntities(product.title.replace(/<(?:.|\n)*?>/gm, ' '));
    return __assign({}, product, { authorshipDisplay: authorshipDisplay, title: title });
}
exports.fixData = fixData;
function addDates(product) {
    var newProduct = product;
    if (product.displayDate) {
        var pubDate = new Date(product.displayDate);
        var dateString = getMonth(pubDate) + " " + pubDate.getFullYear();
        newProduct = __assign({}, newProduct, { displayDateString: dateString });
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
function decodeEntities(encodedString) {
    var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
    var translate = {
        "nbsp": " ",
        "amp": "&",
        "quot": "\"",
        "lt": "<",
        "gt": ">"
    };
    return encodedString.replace(translate_re, function (match, entity) {
        return translate[entity];
    }).replace(/&#(\d+);/gi, function (match, numStr) {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}
exports.decodeEntities = decodeEntities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQTtJQUVFLElBQU0sT0FBTyxHQUFHLDZCQUE2QixDQUFDO0lBQzlDLElBQU0sZ0JBQWdCLEdBQUcsdUJBQXVCLENBQUM7SUFFakQsSUFBTSxVQUFVLEdBQUcsc0NBQXNDLENBQUM7SUFFMUQsSUFBTSxXQUFXLEdBQUcsa0NBQWtDLENBQUM7SUFDdkQsSUFBTSxhQUFhLEdBQUcseUNBQXlDLENBQUM7SUFHaEUsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQVpELG9DQVlDO0FBRUQsa0NBQXlDLE9BQWU7SUFDdEQsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztRQUNoRCxPQUFPLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUM3QyxDQUFDLENBQUM7SUFDRixJQUFNLFdBQVcsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO1FBQ2hELE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUNuRCxDQUFDLENBQUM7SUFFRixRQUFRLE9BQU8sRUFBRTtRQUNmLEtBQUssS0FBSztZQUNSLE9BQU8sV0FBVyxDQUFDO1lBQ25CLE1BQU07UUFDUixLQUFLLEtBQUs7WUFDUixPQUFPLFdBQVcsQ0FBQztZQUNuQixNQUFNO1FBQ1I7WUFDRSxPQUFPLFdBQVcsQ0FBQztLQUN0QjtBQUNILENBQUM7QUFsQkQsNERBa0JDO0FBRUQsd0JBQStCLE9BQWU7SUFDNUMsSUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFBO0lBQzlCLElBQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQTtJQUU5QixRQUFRLE9BQU8sRUFBRTtRQUNmLEtBQUssS0FBSztZQUNSLE9BQU8sUUFBUSxDQUFDO1lBQ2hCLE1BQU07UUFDUixLQUFLLEtBQUs7WUFDUixPQUFPLFFBQVEsQ0FB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L0IsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWZELHdDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSU1FQVBzXG59IGZyb20gJy4uL21vZGVscy9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyVVJMKCkge1xuXG4gIGNvbnN0IHRvbmlEZXYgPSAnaHR0cDovL2x2ZGVvLmRkbnMubmV0OjgwODAvJztcbiAgY29uc3QgdG9uaURldkxvY2FsaG9zdCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAnO1xuICAvL2NvbnN0IHRvbmlEZXYgPSAnODguMjA3LjkwLjEwNzo4MDgwJztcbiAgY29uc3QgYmFja2VuZERldiA9ICdodHRwczovL2xpdmV2aWRlby1iZS1kZXYubWFubmluZy5jb20nO1xuICAvL2NvbnN0IGJhY2tlbmREZXZPbGQgPSAnaHR0cDovL2xpdmV2aWRlby1kZXYudXMtd2VzdC0yLmVsYXN0aWNiZWFuc3RhbGsuY29tJztcbiAgY29uc3QgYmFja2VuZFByb2QgPSAnaHR0cHM6Ly9saXZldmlkZW8tYmUubWFubmluZy5jb20nO1xuICBjb25zdCBiYWNrZW5kRG9ja2VyID0gJ2h0dHBzOi8vbGl2ZXZpZGVvLWJlLXRva2Vucy5tYW5uaW5nLmNvbSc7XG5cblxuICByZXR1cm4gYmFja2VuZERldjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvcnRpbmdGdW5jdGlvbkZvclRhYih0YWJUeXBlOiBzdHJpbmcpIHtcbiAgY29uc3QgaG90RnVuY3Rpb24gPSBmdW5jdGlvbiAoYTogSU1FQVBzLCBiOiBJTUVBUHMpIHtcbiAgICByZXR1cm4gYS5iZXN0U2VsbGVyUmFuayAtIGIuYmVzdFNlbGxlclJhbms7XG4gIH07XG4gIGNvbnN0IG5ld0Z1bmN0aW9uID0gZnVuY3Rpb24gKGE6IElNRUFQcywgYjogSU1FQVBzKSB7XG4gICAgcmV0dXJuIGEuY2hyb25vbG9naWNhbFJhbmsgLSBiLmNocm9ub2xvZ2ljYWxSYW5rO1xuICB9O1xuXG4gIHN3aXRjaCAodGFiVHlwZSkge1xuICAgIGNhc2UgJ2hvdCc6XG4gICAgICByZXR1cm4gaG90RnVuY3Rpb247XG4gICAgICBicmVhaztcbiAgICBjYXNlICduZXcnOlxuICAgICAgcmV0dXJuIG5ld0Z1bmN0aW9uO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBob3RGdW5jdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW90dG9Gb3JUYWIodGFiVHlwZTogc3RyaW5nKSB7XG4gIGNvbnN0IGhvdE1vdHRvID0gYFdoYXQncyBob3QhYFxuICBjb25zdCBuZXdNb3R0byA9IGBXaGF0J3MgbmV3IWBcblxuICBzd2l0Y2ggKHRhYlR5cGUpIHtcbiAgICBjYXNlICdob3QnOlxuICAgICAgcmV0dXJuIGhvdE1vdHRvO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbmV3JzpcbiAgICAgIHJldHVybiBuZXdNb3R0bztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaG90TW90dG87XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpeERhdGEocHJvZHVjdCl7XG4gIC8vQXV0aG9yXG4gIGxldCBhdXRob3JzaGlwRGlzcGxheSA9IHByb2R1Y3QuYXV0aG9yc2hpcERpc3BsYXk7XG4gIGlmICghYXV0aG9yc2hpcERpc3BsYXkpe1xuICAgIGF1dGhvcnNoaXBEaXNwbGF5ID0gXCJVbmtub3duIEF1dGhvclwiO1xuICB9XG4gIGF1dGhvcnNoaXBEaXNwbGF5ID0gZGVjb2RlRW50aXRpZXMoYXV0aG9yc2hpcERpc3BsYXkucmVwbGFjZSgvPCg/Oi58XFxuKSo/Pi9nbSwgJyAnKSk7XG5cbiAgLy9UaXRsZVxuICBsZXQgdGl0bGUgPSBkZWNvZGVFbnRpdGllcyhwcm9kdWN0LnRpdGxlLnJlcGxhY2UoLzwoPzoufFxcbikqPz4vZ20sICcgJykpO1xuXG4gIHJldHVybiB7IFxuICAgIC4uLnByb2R1Y3QsIFxuICAgIGF1dGhvcnNoaXBEaXNwbGF5OiBhdXRob3JzaGlwRGlzcGxheSxcbiAgICB0aXRsZTogdGl0bGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRlcyhwcm9kdWN0OmFueSkge1xuICBsZXQgbmV3UHJvZHVjdCA9IHByb2R1Y3Q7IFxuICBpZiAocHJvZHVjdC5kaXNwbGF5RGF0ZSl7XG4gICAgY29uc3QgcHViRGF0ZSA9IG5ldyBEYXRlKHByb2R1Y3QuZGlzcGxheURhdGUpO1xuICAgIGxldCBkYXRlU3RyaW5nOiBzdHJpbmcgPSBnZXRNb250aChwdWJEYXRlKSArIFwiIFwiICsgcHViRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIG5ld1Byb2R1Y3QgPSB7IC4uLm5ld1Byb2R1Y3QsIGRpc3BsYXlEYXRlU3RyaW5nOiBkYXRlU3RyaW5nfTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld1Byb2R1Y3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkOkRhdGUpe1xuICB2YXIgbW9udGggPSBuZXcgQXJyYXkoKTtcbiAgbW9udGhbMF0gPSBcIkphbnVhcnlcIjtcbiAgbW9udGhbMV0gPSBcIkZlYnJ1YXJ5XCI7XG4gIG1vbnRoWzJdID0gXCJNYXJjaFwiO1xuICBtb250aFszXSA9IFwiQXByaWxcIjtcbiAgbW9udGhbNF0gPSBcIk1heVwiO1xuICBtb250aFs1XSA9IFwiSnVuZVwiO1xuICBtb250aFs2XSA9IFwiSnVseVwiO1xuICBtb250aFs3XSA9IFwiQXVndXN0XCI7XG4gIG1vbnRoWzhdID0gXCJTZXB0ZW1iZXJcIjtcbiAgbW9udGhbOV0gPSBcIk9jdG9iZXJcIjtcbiAgbW9udGhbMTBdID0gXCJOb3ZlbWJlclwiO1xuICBtb250aFsxMV0gPSBcIkRlY2VtYmVyXCI7XG4gIHJldHVybiBtb250aFtkLmdldE1vbnRoKCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlRW50aXRpZXMoZW5jb2RlZFN0cmluZzpzdHJpbmcpIHtcbiAgICB2YXIgdHJhbnNsYXRlX3JlID0gLyYobmJzcHxhbXB8cXVvdHxsdHxndCk7L2c7XG4gICAgdmFyIHRyYW5zbGF0ZTphbnkgPSB7XG4gICAgICAgIFwibmJzcFwiOlwiIFwiLFxuICAgICAgICBcImFtcFwiIDogXCImXCIsXG4gICAgICAgIFwicXVvdFwiOiBcIlxcXCJcIixcbiAgICAgICAgXCJsdFwiICA6IFwiPFwiLFxuICAgICAgICBcImd0XCIgIDogXCI+XCJcbiAgICB9O1xuICAgIHJldHVybiBlbmNvZGVkU3RyaW5nLnJlcGxhY2UodHJhbnNsYXRlX3JlLCBmdW5jdGlvbihtYXRjaCwgZW50aXR5OmFueSkge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlW2VudGl0eV07XG4gICAgfSkucmVwbGFjZSgvJiMoXFxkKyk7L2dpLCBmdW5jdGlvbihtYXRjaCwgbnVtU3RyKSB7XG4gICAgICAgIHZhciBudW0gPSBwYXJzZUludChudW1TdHIsIDEwKTtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUobnVtKTtcbiAgICB9KTtcbn0iXX0=