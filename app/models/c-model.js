const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ConSchema = new Schema({
    name:{
        type:String,
        default:true

    },
    email:{
        type:String,
        default: true
    },
    phno:{
        type:Number
        
    }
})

const Contact = mongoose.model('Contact', ConSchema)

module.exports = Contact