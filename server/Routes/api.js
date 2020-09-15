const express = require('express')
const axios = require('axios')
const moment = require('moment')
const router = express.Router()
const User = require('../model/User')

// console.log(moment(Date.now()-3000000000));

router.get("/stats/:country" ,async (req, res) => {
    const {country} = req.params
    const { from , to }  = req.query
    try{
        const response = await axios.get(`https://api.covid19api.com/country/${country}?from=${from}&to=${to}`);
        let dataToTheUser = (response.data)
        const newDataArrDate = dataToTheUser.map(c => c.Date)
        const newDataArrDeth = dataToTheUser.map(c => c.Deaths)
        const newDataArrInfected = dataToTheUser.map(c => c.Active)
        res.send([newDataArrDate,newDataArrDeth,newDataArrInfected])
    } catch (err) {
        res.send(err)
    }
})



router.post("/saveUser", async (req,res) => {
    try{
        let UserToSaveInDB = req.body
        toSave = new User (UserToSaveInDB)
        toSave.save()
        res.send (toSave)
    } catch (err) {
        res.send(err)
    }
})  



router.get('/getUsers', async (req,res)=> {
    try{
        let toSend = await User.find({})
        res.send(toSend)
    } catch(err) {
        res.send(err)
    }
})




module.exports = router