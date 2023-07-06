import { NTDHttp } from "../types/http";
export default class Http {
    constructor();
    _url: string;
    _method: string;
    _headers: {};
    _body: {};
    builder<ResType>(): {
        url: (_url: string) => any;
        method: (_method: NTDHttp.MetodType) => any;
        headers: (_headers: string) => any;
        body: <BodyType>(_body: BodyType) => any;
        build: () => any;
    };
}
