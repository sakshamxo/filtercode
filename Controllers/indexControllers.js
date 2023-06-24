const User = require('../Models/userModel')

//intensity------------------------------------------------------------------------

exports.homepage = async (req,res,next)=>{
    try {
        const user = await User.find({})

        const intensity_grp = {};
        user.forEach(user => {
            if (!intensity_grp[user.intensity]) {
            intensity_grp[user.intensity] = [];
            }
            intensity_grp[user.intensity].push(user);
            });
        const inten = [];
        for(const intens in intensity_grp){
            const intensityno = intensity_grp[intens]
            const totalinten = intensityno.length || 0;
            inten.push({intens, intensity : totalinten})
        }
        const totalinters =  inten.sort((a,b)=> b.intensityno - a.intensityno)
        console.log(totalinters)

        res.status(200).json({message:"this is homepage",totalinters})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//likelihood----------------------------------------------------------------------------------

exports.likelihood = async (req,res,next)=>{
    try {
        const user = await User.find({});

        const likelihood_grp = {};
        user.forEach(user => {
            if (!likelihood_grp[user.likelihood]) {
            likelihood_grp[user.likelihood] = [];
            }
            likelihood_grp[user.likelihood].push(user);
            });
        const likeli = [];
        for(const likelihood in likelihood_grp){
            const likelihoodno = likelihood_grp[likelihood]
            const totallike = likelihoodno.length || 0;
            likeli.push({likelihood,Liklihood : totallike})
        }
        const totallikeli =  likeli.sort((a,b)=> b.likelihoodno - a.likelihoodno)
        console.log(totallikeli)
        
        res.status(200).json({message:"this is likelihood",totallikeli})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//relevence----------------------------------------------------------------------

exports.relevance = async (req,res,next)=>{
    try {
        const user = await User.find({})


        const relevence_grp = {};
        user.forEach(user => {
            if (!relevence_grp[user.relevance]) {
            relevence_grp[user.relevance] = [];
            }
            relevence_grp[user.relevance].push(user);
            });
        const relev = [];
        for(const relevence in relevence_grp){
            const relevenceno = relevence_grp[relevence]
            const totalrelevence = relevenceno.length || 0;
            relev.push({relevence, relevance : totalrelevence})
        }
        const totalrelevences =  relev.sort((a,b)=> b.relevenceno - a.relevenceno)
        console.log(totalrelevences)
        
        res.status(200).json({message:"this is relevance",totalrelevences})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//country------------------------------------------------------------------------------------------

exports.country = async (req,res,next)=>{
    try {
        const user = await User.find({})

        const country_grp = {};
        user.forEach(user => {
            if (!country_grp[user.country]) {
            country_grp[user.country] = [];
            }
            country_grp[user.country].push(user);
            });
        const count = [];
        for(const countrys in country_grp){
            const countryno = country_grp[countrys]
            const totalcountry = countryno.length || 0;
            count.push({countrys, country : totalcountry})
        }
        const totalcountrys =  count.sort((a,b)=> b.countryno - a.countryno)
        console.log(totalcountrys)
        res.status(200).json({message:"this is country",totalcountrys})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//topics----------------------------------------------------------------------------------

exports.topics = async (req,res,next)=>{
    try {
        const user = await User.find({})

        const topics_grp = {};
        user.forEach(user => {
            if (!topics_grp[user.topic]) {
            topics_grp[user.topic] = [];
            }
            topics_grp[user.topic].push(user);
            });
        const top = [];
        for(const topicss in topics_grp){
            const topicsno = topics_grp[topicss]
            const totaltopics = topicsno.length || 0;
            top.push({topicss, topics : totaltopics})
        }
        const totaltopicss =  top.sort((a,b)=> b.topicsno - a.topicsno)
        console.log(totaltopicss)
        res.status(200).json({message:"this is topic",totaltopicss})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//region-------------------------------------------------------------------------------

exports.region = async (req,res,next)=>{
    try {
        const user = await User.find({})

        const region_grp = {};
        user.forEach(user => {
            if (!region_grp[user.region]) {
            region_grp[user.region] = [];
            }
            region_grp[user.region].push(user);
            });
        const reg = [];
        for(const regions in region_grp){
            const regionno = region_grp[regions]
            const totalregion = regionno.length || 0;
            reg.push({regions, region : totalregion})
        }
        const totalregions =  reg.sort((a,b)=> b.regionno - a.regionno)
        console.log(totalregions)
        res.status(200).json({message:"this is region",totalregions})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//city-------------------------------------------------------------------------------------

exports.city = async (req,res,next)=>{
    try {
        const user = await User.find({})

        const city_grp = {};
        user.forEach(user => {
            if (!city_grp[user.region]) {
            city_grp[user.region] = [];
            }
            city_grp[user.region].push(user);
            });
        const citi = [];
        for(const citys in city_grp){
            const cityno = city_grp[citys]
            const totalcity = cityno.length || 0;
            citi.push({citys, city : totalcity})
        }
        const totalcitys =  citi.sort((a,b)=> b.cityno - a.cityno)
        console.log(totalcitys)
        res.status(200).json({message:"this is city",totalcitys})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//year----------------------------------------------------------------

exports.year = async (req,res,next)=>{
    try {
        const data = await User.find({});
        const processedData = data.map(entry => {
          let year = "";
          if (entry.end_year !== "") {
            year = entry.end_year;
          } else if (entry.start_year !== "") {
            year = entry.start_year;
          } else {
            year = "N/A";
          }
          return {
            ...entry._doc,
            year: year
          }
        });
        const year_grp = {};
        processedData.forEach(user => {
            if (!year_grp[user.year]) {
            year_grp[user.year] = [];
            }
            year_grp[user.year].push(user);
            });
        const yea = [];
        for(const years in year_grp){
            const yearno = year_grp[years]
            const totalyear = yearno.length || 0;
            yea.push({years, year : totalyear})
        }
        const totalyears =  yea.sort((a,b)=> b.yearno - a.yearno)
        res.status(200).json({message:"this is year" , totalyears});
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}

//filters---------------------------------------------------------------------

//end year------------------------------------------------------------------

exports.endyear = async (req, res, next) => {
  try {
    const endYear = req.body.end_year;
    // console.log(`endYear: ${endYear}`);
    // const query = { end_year: endYear };
    // console.log(query);
    const data = await User.find({end_year: endYear }).exec();
    // console.log("Filtered data:",data);
    const end_year_grp = {};
    data.forEach((user) => {
      if (!end_year_grp[user.end_year]) {
        end_year_grp[user.end_year] = [];
      }
      end_year_grp[user.end_year].push(user);
    });
    const end_yea = [];
    for (const end_years in end_year_grp) {
      const end_yearno = end_year_grp[end_years];
      const totalend_year = end_yearno.length || 0;
      end_yea.push({ end_years, end_year: totalend_year });
    }
    const totalend_years = end_yea.sort((a, b) => b.end_year - a.end_year);
    res.status(200).json({ message: "this is end_year", totalend_years,end_year_grp });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error occurred", err });
  }
};

//sector-----------------------------------------------------------------------------------------------

exports.sector = async (req,res,next)=>{
    try {
        const sectors = req.body.sector;
        console.log(sectors)
        const data = await User.find({sectors}).exec()
        // console.log(data)
        const sector_grp = {};
        data.forEach(user => {
            if (!sector_grp[user.sector]) {
            sector_grp[user.sector] = [];
            }
            sector_grp[user.sector].push(user);
            });
            // console.log(sector_grp)
        const sectoro = [];
        for(const sectors in sector_grp){
            const sectorno = sector_grp[sectors]
            const totalsector = sectorno.length || 0;
            sectoro.push({sectors, sector : totalsector})
        }
        const totalsectors =  sectoro.sort((a,b)=> b.sectorno - a.sectorno)
        res.status(200).json({message:"this is sector",totalsectors,sector_grp})
    } catch (err) {
        res.status(500).json({message:"error occur",err})
    }
}

//topics-------------------------------------------------------------------------------------

exports.topicsf = async (req,res,next)=>{
    try {
        const topics = req.body.topic;
        const user = await User.find({topic: topics}).exec()

        const topics_grp = {};
        user.forEach(user => {
            if (!topics_grp[user.topic]) {
            topics_grp[user.topic] = [];
            }
            topics_grp[user.topic].push(user);
            });
        const top = [];
        for(const topicss in topics_grp){
            const topicsno = topics_grp[topicss]
            const totaltopics = topicsno.length || 0;
            top.push({topicss, topics : totaltopics})
        }
        const totaltopicss =  top.sort((a,b)=> b.topicsno - a.topicsno)
        console.log(totaltopicss)
        res.status(200).json({message:"this is topic",totaltopicss,topics_grp})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//region--------------------------------------------------------------------------------------

exports.regionf = async (req,res,next)=>{
    try {
        const regions = req.body.region;
        const user = await User.find({region: regions}).exec()

        const region_grp = {};
        user.forEach(user => {
            if (!region_grp[user.region]) {
            region_grp[user.region] = [];
            }
            region_grp[user.region].push(user);
            });
        const reg = [];
        for(const regions in region_grp){
            const regionno = region_grp[regions]
            const totalregion = regionno.length || 0;
            reg.push({regions, region : totalregion})
        }
        const totalregions =  reg.sort((a,b)=> b.regionno - a.regionno)
        console.log(totalregions)
        res.status(200).json({message:"this is region",totalregions,region_grp})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//PEST------------------------------------------------------------------------------------------------------

exports.pestf = async (req,res,next)=>{
    try {
        const pestles = req.body.pestle;
        const user = await User.find({pestle: pestles}).exec()

        const pestle_grp = {};
        user.forEach(user => {
            if (!pestle_grp[user.pestle]) {
            pestle_grp[user.pestle] = [];
            }
            pestle_grp[user.pestle].push(user);
            });
        const pes = [];
        for(const pestles in pestle_grp){
            const pestleno = pestle_grp[pestles]
            const totalpestle = pestleno.length || 0;
            pes.push({pestles, pestle : totalpestle})
        }
        const totalpestles =  pes.sort((a,b)=> b.pestleno - a.pestleno)
        console.log(totalpestles)
        res.status(200).json({message:"this is pestle",totalpestles,pestle_grp})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//source------------------------------------------------------------------------------------

exports.sourcef = async (req,res,next)=>{
    try {
        const sources = req.body.source;
        const user = await User.find({source: sources}).exec()

        const source_grp = {};
        user.forEach(user => {
            if (!source_grp[user.source]) {
            source_grp[user.source] = [];
            }
            source_grp[user.source].push(user);
            });
        const sour = [];
        for(const sources in source_grp){
            const sourceno = source_grp[sources]
            const totalsource = sourceno.length || 0;
            sour.push({sources, source : totalsource})
        }
        const totalsources =  sour.sort((a,b)=> b.sourceno - a.sourceno)
        console.log(totalsources)
        res.status(200).json({message:"this is source",totalsources,source_grp})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//country------------------------------------------------------------------------------------------

exports.countryf = async (req,res,next)=>{
    try {
        const countryy = req.body.country
        const user = await User.find({country:countryy}).exec()

        const country_grp = {};
        user.forEach(user => {
            if (!country_grp[user.country]) {
            country_grp[user.country] = [];
            }
            country_grp[user.country].push(user);
            });
        const count = [];
        for(const countrys in country_grp){
            const countryno = country_grp[countrys]
            const totalcountry = countryno.length || 0;
            count.push({countrys, country : totalcountry})
        }
        const totalcountrys =  count.sort((a,b)=> b.countryno - a.countryno)
        // console.log(totalcountrys)
        res.status(200).json({message:"this is country",totalcountrys,country_grp})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//city-------------------------------------------------------------------------------------

exports.cityf = async (req,res,next)=>{
    try {
        const citiess = req.body.region
        const user = await User.find({region:citiess})

        const city_grp = {};
        user.forEach(user => {
            if (!city_grp[user.region]) {
            city_grp[user.region] = [];
            }
            city_grp[user.region].push(user);
            });
        const citi = [];
        for(const citys in city_grp){
            const cityno = city_grp[citys]
            const totalcity = cityno.length || 0;
            citi.push({citys, city : totalcity})
        }
        const totalcitys =  citi.sort((a,b)=> b.cityno - a.cityno)
        // console.log(totalcitys)
        res.status(200).json({message:"this is city",totalcitys,city_grp})
    } catch (error) {
        res.status(500).json({message: error})
    }
}