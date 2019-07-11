const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const connection_uri = process.env.MONGODB_URI || "mongodb://localhost:27017/ex-contact-app1"
	mongoose
		.connect(connection_uri, {
			useNewUrlParser: true
		})

// mongoose.connect('mongodb://localhost:27017/ex-contact-app1' , {useNewUrlParser : true})
.then(res => {
    console.log('connecting to db')
})
.catch(err => {
    console.log('error connecting to db')
})

module.exports = mongoose