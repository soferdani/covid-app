const express = require('express')
const axios = require('axios')
const moment = require('moment')
const router = express.Router()
const User = require('../model/User')

console.log(moment(Date.now()-3000000000));

router.get("/stats/:country" ,async (req, res) => {
    const {country} = req.params
    const { from , to }  = req.query
    console.log(country);
    console.log(from , to);
    try{
        const response = await axios.get(`https://api.covid19api.com/country/${country}?from=${from}&to=${to}`);
        let dataToTheUser = (response.data)
        const newDataArrDate = dataToTheUser.map(c => c.Date)
        const newDataArrDeth = dataToTheUser.map(c => c.Deaths)
        res.send([newDataArrDate,newDataArrDeth])
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