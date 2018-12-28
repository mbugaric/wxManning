import { 
  getServerURL
} from '../utils/common';

const debug = true;

export default class IDAL {

  URLBase: string;

  constructor(){
    this.URLBase = getServerURL();
  }

  public getProductList(maxElements?:number): Promise<any> {
    return new Promise((resolve, reject) => {
      const url:string = this.URLBase + '/wx/getProductList';

      if (debug) console.log("%cgetProductList ", 'background: #ffbf00; color: black');
      
      this.sendWxRequest(url, maxElements).then((res)=>{
        resolve(res);
      }).catch((error)=>{
        reject(error);
      })
      
    });
  }

  public sendWxRequest(url:string, maxElements?:number): Promise<any> {
    return new Promise((resolve, reject) => {

      const data:object = maxElements ? { maxElements: maxElements} : {};
      wx.request({
        url: url,
        data: data,
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success: (res) => {
          resolve(res)
        },
        fail: (error) => {
          reject(error)
        }
      })
    })
  }
}