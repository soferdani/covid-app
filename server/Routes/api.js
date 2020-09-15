const express = require('express')
const axios = require('axios')
const router = express.Router()
const User = require('../model/User')


router.get("/stats/:country" ,async (req, res) => {
    const {country} = req.params
    const { from , to }  = req.query
    console.log(country);
    console.log(from , to);
    try{
        const response = await axios.get(`https://api.covid19api.com/country/${country}?from=${from}&to=${to}`);
        let dataToTheUser = (response.data)
        res.send(dataToTheUser)
    } catch (err) {
        res.send(err)
    }
})



router.post("/saveUser", async (req,res) => {
    try{
        let UserToSaveInDB = req.body
        toSave = new User (UserToSaveInDB)
        toSave.save()
        res.send ("new city has beed added")
    } catch (err) {
        res.send(err)
    }
})  







module.exports = router