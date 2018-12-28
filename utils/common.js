"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFFRSxJQUFNLE9BQU8sR0FBRyw2QkFBNkIsQ0FBQztJQUM5QyxJQUFNLGdCQUFnQixHQUFHLHVCQUF1QixDQUFDO0lBRWpELElBQU0sVUFBVSxHQUFHLHNDQUFzQyxDQUFDO0lBRTFELElBQU0sV0FBVyxHQUFHLGtDQUFrQyxDQUFDO0lBQ3ZELElBQU0sYUFBYSxHQUFHLHlDQUF5QyxDQUFDO0lBR2hFLE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFaRCxvQ0FZQztBQUVELGtDQUF5QyxPQUFlO0lBQ3RELElBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7UUFDaEQsT0FBTyxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7SUFDN0MsQ0FBQyxDQUFDO0lBQ0YsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztRQUNoRCxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUM7SUFDbkQsQ0FBQyxDQUFDO0lBRUYsUUFBUSxPQUFPLEVBQUU7UUFDZixLQUFLLEtBQUs7WUFDUixPQUFPLFdBQVcsQ0FBQztZQUNuQixNQUFNO1FBQ1IsS0FBSyxLQUFLO1lBQ1IsT0FBTyxXQUFXLENBQUM7WUFDbkIsTUFBTTtRQUNSO1lBQ0UsT0FBTyxXQUFXLENBQUM7S0FDdEI7QUFDSCxDQUFDO0FBbEJELDREQWtCQztBQUVELHdCQUErQixPQUFlO0lBQzVDLElBQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQTtJQUM5QixJQUFNLFFBQVEsR0FBRyxhQUFhLENBQUE7SUFFOUIsUUFBUSxPQUFPLEVBQUU7UUFDZixLQUFLLEtBQUs7WUFDUixPQUFPLFFBQVEsQ0FBQztZQUNoQixNQUFNO1FBQ1IsS0FBSyxLQUFLO1lBQ1IsT0FBTyxRQUFRLENBQUM7WUFDaEIsTUFBTTtRQUNSO1lBQ0UsT0FBTyxRQUFRLENBQUM7S0FDbkI7QUFDSCxDQUFDO0FBZEQsd0NBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJTUVBUHNcbn0gZnJvbSAnLi4vbW9kZWxzL21vZGVscydcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJVUkwoKSB7XG5cbiAgY29uc3QgdG9uaURldiA9ICdodHRwOi8vbHZkZW8uZGRucy5uZXQ6ODA4MC8nO1xuICBjb25zdCB0b25pRGV2TG9jYWxob3N0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCc7XG4gIC8vY29uc3QgdG9uaURldiA9ICc4OC4yMDcuOTAuMTA3OjgwODAnO1xuICBjb25zdCBiYWNrZW5kRGV2ID0gJ2h0dHBzOi8vbGl2ZXZpZGVvLWJlLWRldi5tYW5uaW5nLmNvbSc7XG4gIC8vY29uc3QgYmFja2VuZERldk9sZCA9ICdodHRwOi8vbGl2ZXZpZGVvLWRldi51cy13ZXN0LTIuZWxhc3RpY2JlYW5zdGFsay5jb20nO1xuICBjb25zdCBiYWNrZW5kUHJvZCA9ICdodHRwczovL2xpdmV2aWRlby1iZS5tYW5uaW5nLmNvbSc7XG4gIGNvbnN0IGJhY2tlbmREb2NrZXIgPSAnaHR0cHM6Ly9saXZldmlkZW8tYmUtdG9rZW5zLm1hbm5pbmcuY29tJztcblxuXG4gIHJldHVybiBiYWNrZW5kRGV2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ydGluZ0Z1bmN0aW9uRm9yVGFiKHRhYlR5cGU6IHN0cmluZykge1xuICBjb25zdCBob3RGdW5jdGlvbiA9IGZ1bmN0aW9uIChhOiBJTUVBUHMsIGI6IElNRUFQcykge1xuICAgIHJldHVybiBhLmJlc3RTZWxsZXJSYW5rIC0gYi5iZXN0U2VsbGVyUmFuaztcbiAgfTtcbiAgY29uc3QgbmV3RnVuY3Rpb24gPSBmdW5jdGlvbiAoYTogSU1FQVBzLCBiOiBJTUVBUHMpIHtcbiAgICByZXR1cm4gYS5jaHJvbm9sb2dpY2FsUmFuayAtIGIuY2hyb25vbG9naWNhbFJhbms7XG4gIH07XG5cbiAgc3dpdGNoICh0YWJUeXBlKSB7XG4gICAgY2FzZSAnaG90JzpcbiAgICAgIHJldHVybiBob3RGdW5jdGlvbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ25ldyc6XG4gICAgICByZXR1cm4gbmV3RnVuY3Rpb247XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGhvdEZ1bmN0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3R0b0ZvclRhYih0YWJUeXBlOiBzdHJpbmcpIHtcbiAgY29uc3QgaG90TW90dG8gPSBgV2hhdCdzIGhvdCFgXG4gIGNvbnN0IG5ld01vdHRvID0gYFdoYXQncyBuZXchYFxuXG4gIHN3aXRjaCAodGFiVHlwZSkge1xuICAgIGNhc2UgJ2hvdCc6XG4gICAgICByZXR1cm4gaG90TW90dG87XG4gICAgICBicmVhaztcbiAgICBjYXNlICduZXcnOlxuICAgICAgcmV0dXJuIG5ld01vdHRvO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBob3RNb3R0bztcbiAgfVxufSJdfQ==