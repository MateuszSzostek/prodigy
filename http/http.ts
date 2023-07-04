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
        console.log(_url);
        this._url = _url;
        return this;
      },
      method: function (_method: NTDHttp.MetodType) {
        this._method = _method;
        return this;
      },
      headers: function (_headers: string) {
        this._headers = _headers;
        return this;
      },
      body: function <BodyType>(_body: BodyType) {
        this._body = _body;
        return this;
      },

      build: function () {
        console.log(this._url);
        console.log(this._method);
        console.log(this._headers);
        console.log(this._body);
        return new Request<ResType>(
          this._url,
          this._method,
          this._headers,
          this._body
        );
      },
    };
  }
}

function Request<ResType>(url, method, headers, body) {
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
        jsonData?.errors?.map((e) => e.message).join("\n") ?? "unknown"
      );
      return await Promise.reject(error);
    }
  };
}
