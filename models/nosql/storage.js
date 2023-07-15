const mongoose=require("mongoose")

const storeScheme=new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        }
    },
    {
        timestamps:true,  // CreatedAt, UpdatedAt
        versionKey:false
    }
)


module.exports=mongoose.model("storages",storeScheme)