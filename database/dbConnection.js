import mongoose from "mongoose";


const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName : "NEW_PORTFOLIO"
  }).then(()=>{
    console.log("Connected to Database")
  }).catch((error)=>{
    console.log(`Some Error Occured while Connecting to Database: ${error}`)
  })
}

export default dbConnection;