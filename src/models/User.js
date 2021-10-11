import pkg from "mongoose"
const {model, Schema} = pkg

let userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
    },
    name:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
        required: true,
    }   
})


export default model('User', userSchema)
