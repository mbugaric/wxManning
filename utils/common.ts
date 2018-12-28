import {
  IMEAPs
} from '../models/models'
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