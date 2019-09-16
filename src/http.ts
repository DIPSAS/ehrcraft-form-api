


export interface HTTP {
  get(url: string, callback: ResponseCallback): void;
  post(url: string, dataAsJson: any, callback: ResponseCallback): void;
}
export interface ResponseCallback {
  (StatusCode: number, IsSuccessStatusCode: boolean, Data: any): void;
}

export class MockHTTP implements HTTP {
  get(url: string, callback: ResponseCallback): void {
    let data = {};

  }
  post(url: string, dataAsJson: any, callback: ResponseCallback): void {
    console.log("Not supported");
    //callback.call(500, false, "Not allowed");
  }




}
