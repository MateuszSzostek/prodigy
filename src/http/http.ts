import { NTDHttp } from "../types/http";

export default class Http {
  constructor() {
    this._url = "/";
    this._method = "GET";
    this._headers = {};
    this._body = {};
  }

  _url = "/";
  _method = "GET";
  _headers = {};
  _body = {};

  builder<ResType>() {
    return {
      url: function (_url: string) {
        // @ts-ignore
        this._url = _url;
        return this;
      },
      method: function (_method: NTDHttp.MetodType) {
        // @ts-ignore
        this._method = _method;
        return this;
      },
      headers: function (_headers: string) {
        // @ts-ignore
        this._headers = _headers;
        return this;
      },
      body: function <BodyType>(_body: BodyType) {
        // @ts-ignore
        this._body = _body;
        return this;
      },
      // @ts-ignore
      build: function () {
        // @ts-ignore
        return new Request<ResType>(
          // @ts-ignore
          this._url,
          // @ts-ignore
          this._method,
          // @ts-ignore
          this._headers,
          // @ts-ignore
          this._body
        );
      },
    };
  }
}
// @ts-ignore
function Request<ResType>(url, method, headers, body) {
  // @ts-ignore
  this.call = async function (): Promise<ResType> {
    const response = await fetch(url, {
      method,
      headers: typeof headers !== "undefined" ? headers : {},
      body: method !== "GET" ? body : null,
    });

    const jsonData = await response.json();

    if (response.ok) {
      return await jsonData;
    } else {
      const error = new Error(
        // @ts-ignore
        jsonData?.errors?.map((e) => e.message).join("\n") ?? "unknown"
      );
      return await Promise.reject(error);
    }
  };
}
