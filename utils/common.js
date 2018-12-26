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