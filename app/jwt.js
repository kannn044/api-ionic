"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
class Jwt {
    constructor() {
        this.key = '123456789';
    }
    sign(payload) {
        const token = jwt.sign(payload, this.key, {
            expiresIn: '1d'
        });
        return token;
    }
    verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.key, (error, decoded) => {
                if (error) {
                    reject('Access Dinied');
                }
                else {
                    resolve(decoded);
                }
            });
        });
    }
}
exports.Jwt = Jwt;
//# sourceMappingURL=jwt.js.map