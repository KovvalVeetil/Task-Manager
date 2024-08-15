"use strict";
// // utils/httpUtils.ts
// import http from 'http';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testUtils = void 0;
// export interface HttpResponse {
//   statusCode: number;
//   body: string;
// }
// export const makeRequest = (method: string, url: string, data?: any): Promise<HttpResponse> => {
//   return new Promise((resolve, reject) => {
//     const options = {
//       method,
//       headers: { 'Content-Type': 'application/json' }
//     };
//     const req = http.request(url, options, (res) => {
//       let body = '';
//       res.on('data', (chunk) => { body += chunk; });
//       res.on('end', () => resolve({ statusCode: res.statusCode || 500, body }));
//     });
//     req.on('error', (e) => reject(e));
//     if (data) {
//       req.write(JSON.stringify(data));
//     }
//     req.end();
//   });
// };
const http_1 = __importDefault(require("http"));
const request = (method, url, data) => {
    return new Promise((resolve, reject) => {
        const req = http_1.default.request({
            hostname: 'localhost',
            port: 3000,
            method,
            path: url,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data ? Buffer.byteLength(JSON.stringify(data)) : 0,
            },
        }, (res) => {
            let body = '';
            res.on('data', (chunk) => (body += chunk));
            res.on('end', () => resolve({ statusCode: res.statusCode || 500, body: JSON.parse(body) }));
        });
        req.on('error', reject);
        if (data) {
            req.write(JSON.stringify(data));
        }
        req.end();
    });
};
exports.testUtils = {
    get: (url) => request('GET', url),
    post: (url, data) => request('POST', url, data),
    put: (url, data) => request('PUT', url, data),
    delete: (url) => request('DELETE', url),
};
//# sourceMappingURL=testUtils.js.map