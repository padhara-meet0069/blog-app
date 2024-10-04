const mongoose = require("mongoose")

const connectDatabase =async  () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connection Successfully")
        
    } catch (error) {
        console.log(error)
    }



}

module.exports = connectDatabase


// nJMd6rcNbLcUPrpT
// anshtalaviya22