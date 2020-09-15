const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get("/stats/:country" ,async (req, res) => {
    const {country} = req.params
    const { from , to }  = req.query
    console.log(country);
    console.log(from , to);
    try{
        //const response = await axios.get(`https://api.covid19api.com/total/dayone/country/${country}`);
        const response = await axios.get(`https://api.covid19api.com/country/${country}?from=${from}&to=${to}`);
        let dataToTheUser = (response.data)
        res.send(dataToTheUser)
    } catch (err) {
        res.send(err)
    }
})







module.exports = router