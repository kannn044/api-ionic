import * as jwt from 'jsonwebtoken';
export class Jwt {
  key = '123456789'

  sign(payload: any){
    const token = jwt.sign(payload, this.key, {
      expiresIn: '1d'
    })

    return token
  }

  verify(token: string){
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.key, (error, decoded) => {
        if(error) {
          reject('Access Dinied')
        }else {
          resolve(decoded)
        }
      })
    })
  }
}