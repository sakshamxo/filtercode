const express = require('express')
var router = express.Router()
const {homepage,relevance,likelihood,country,topics,region,city,year,endyear,sector,topicsf,regionf,pestf,sourcef,countryf,cityf} = require('../Controllers/indexControllers')

router.get("/",homepage)

router.get("/relevance",relevance)

router.get("/likelihood",likelihood)

router.get("/country",country)

router.get("/topics",topics)

router.get("/region",region)

router.get("/city",city)

router.get("/year",year)

router.get("/endyear",endyear)

router.get("/sector",sector)

router.get("/topicfilter",topicsf)

router.get("/regionfilter",regionf)

router.get("/pestfilter",pestf)

router.get('/sourcefilter',sourcef)

router.get('/countryfilter',countryf)

router.get('/cityfilter',cityf)

module.exports = router