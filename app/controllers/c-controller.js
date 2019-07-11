const express = require('express')
const router = express.Router()

const Contact = require('../models/c-model')

router.get('/', (req,res) => {
    Contact.find()
    .then((contact) => {
        res.json(contact)
    })
    .catch((err) => {
        res.json(err)
    })

})


router.post('/', (req,res) =>{
    const body = req.body
    const contact = new Contact(body)
    contact.save()
    .then((contact) =>{
        res.json(contact)
    })
    .catch((err) => {
        res.json(err)
    })


})


router.get('/:id', (req,res) => {
    const id = req.params.id
    Contact.findById(id)
    .then((contact) => {
        res.json(contact)
    })
    .catch((err) => {
        res.json(err)
    })

})


router.put(':/id', (req,res) => {
 const id = req.params.id
 const body= req.body
 Contact.findByIdAndUpdate(id, {$set: body}, {new : true})
 .then((contact) => {
     res.json(contact)
 })
 .catch((err) => {
     res.json(err)
 })
})


router.delete(':/id', (req,res) => {
    const id = req.params.id
    Contact.findByIdAndDelete(id)
    .then((contact) =>{
        res.json(contact)
    })
    .catch((err) => {
        res.json(err)
    })
})


module.exports = router