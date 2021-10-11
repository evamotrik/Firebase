import jwt from 'jsonwebtoken'
import {secret} from './config.js'

const generateAccessToken = (id) =>{
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

export default generateAccessToken