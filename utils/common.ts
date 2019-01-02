import {
  IMEAPs
} from '../models/models';

export function getServerURL() {

  const toniDev = 'http://lvdeo.ddns.net:8080/';
  const toniDevLocalhost = 'http://localhost:8080';
  //const toniDev = '88.207.90.107:8080';
  const backendDev = 'https://livevideo-be-dev.manning.com';
  //const backendDevOld = 'http://livevideo-dev.us-west-2.elasticbeanstalk.com';
  const backendProd = 'https://livevideo-be.manning.com';
  const backendDocker = 'https://livevideo-be-tokens.manning.com';


  return backendDev;
}

export function getSortingFunctionForTab(tabType: string) {
  const hotFunction = function (a: IMEAPs, b: IMEAPs) {
    return a.bestSellerRank - b.bestSellerRank;
  };
  const newFunction = function (a: IMEAPs, b: IMEAPs) {
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

export function getMottoForTab(tabType: string) {
  const hotMotto = `What's hot!`
  const newMotto = `What's new!`

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

export function fixData(product){
  //Author
  let authorshipDisplay = product.authorshipDisplay;
  if (!authorshipDisplay){
    authorshipDisplay = "Unknown Author";
  }
  authorshipDisplay = decodeEntities(authorshipDisplay.replace(/<(?:.|\n)*?>/gm, ' '));

  //Title
  let title = decodeEntities(product.title.replace(/<(?:.|\n)*?>/gm, ' '));

  return { 
    ...product, 
    authorshipDisplay: authorshipDisplay,
    title: title,
  };
}

export function addDates(product:any) {
  let newProduct = product; 
  if (product.displayDate){
    const pubDate = new Date(product.displayDate);
    let dateString: string = getMonth(pubDate) + " " + pubDate.getFullYear();
    newProduct = { ...newProduct, displayDateString: dateString};
  }
  
  return newProduct;
}

export function getMonth(d:Date){
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

export function decodeEntities(encodedString:string) {
    var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
    var translate:any = {
        "nbsp":" ",
        "amp" : "&",
        "quot": "\"",
        "lt"  : "<",
        "gt"  : ">"
    };
    return encodedString.replace(translate_re, function(match, entity:any) {
        return translate[entity];
    }).replace(/&#(\d+);/gi, function(match, numStr) {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}