import * as https from "https";
import { Callback } from "./api";

export interface HTTP {
  get(url: string, callback: ResponseCallback);
  post(url: string, dataAsJson: any, callback: ResponseCallback);
}
export interface ResponseCallback {
  (StatusCode: number, IsSuccessStatusCode: boolean, Data: any): void;
}

export class MockHTTP implements HTTP {
  get(url: string, callback: ResponseCallback) {
    let data = this.performGet(url)
      .then(payload => {
        callback(200, true, payload);
      })
      .catch(err => {
        callback(500, false, err);
      });
  }
  post(url: string, dataAsJson: any, callback: ResponseCallback) {
    console.log("Not supported");
    callback.call(500, false, "Not allowed");
  }
  
  private async performGet(url: string) {
    let data = await this.doGet(url);
    return data;
  }
  private doGet(url: string) {
    return new Promise((resolve, reject) => {
      https.get(url, resp => {
        let data = "";
        resp.on("data", chunk => {
          data += chunk;
        });

        resp.on("end", () => {
          //console.log("End with data:" + data);
          resolve(data);
        });

        resp.on("error", err => {
          //callback.call(resp.statusCode, false, err);
          reject(err);
        });
      });
    });
  }
  
}
