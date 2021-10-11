import User from "../models/User.js"
import bCrypt from "bcrypt";
import generateAccessToken from '../helpers/generateAccessToken.js'

class authController {
    async registration(req, res){
        try{
            const {email, password, name, surname} = req.body
            const candidate = await User.findOne({email})

            if(candidate){
                return res.status(400).json({message:"Пользователь с такой почтой уже существует"})
            }
            const hashPassword = bCrypt.hashSync(password, 7)
            const user = new User({email, password: hashPassword, name, surname})
            await user.save()
            return res.json({message: "Пользователь зарегестрирован"})
        }catch (e){
            res.status(400).json({message: "Registration error -> " + e})
        }
    }

    async login(req,res){
        try{
            const {email, password} = req.body
            const user = await User.findOne({email})
           
            if(!user){
                return res.status(400).json({message: `Пользователь ${email} не найден`})
            }
            const validPassword = bCrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            const token = generateAccessToken(user._id)

            return res.json({token: token})
        }catch(e){
            res.status(400).json({message: "Registration error -> " + e})
        }
    }
}

export default new authController
