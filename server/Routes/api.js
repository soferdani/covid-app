const express = require('express')
require('dotenv').config()
const axios = require('axios')
const moment = require('moment')
const router = express.Router()
const User = require('../model/User')
const nodemailer = require("nodemailer");
const { getMaxListeners } = require('../model/User')


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

router.post('/sendMail', async (req,res) => {
    
    let mailInfo = req.body
    console.log(mailInfo);
    console.log(mailInfo.email);
    console.log(mailInfo.status);
    // console.log(mailInfo);

    try {
        let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
      })   

        let info = await transporter.sendMail({
        from: '"Covid 19 Web-Cheat" <Covid19@covidbot.com>', // sender address
        to: mailInfo.email, 
        subject: "", 
        text: "Hello world?", 
        html: "<b>Hello world?</b>", 
      });

      res.send("complit the mission")
    } catch (err) {
        res.send(err)
    }
    
})
//todo - 1. connect the database to the email sendler
//todo - 2. create templete massege in the database
//todo - 3. 

module.exports = router