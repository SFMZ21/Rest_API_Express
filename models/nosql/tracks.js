const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const TracksScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        album:{
            type:String
        },
        cover:{
            type:String,
            validate: {
                validator: (req) =>{
                    return true;
                },
                message: "ERROR_URL",
            }
        },
        artist:{
            name:{
                type:String,
            },
            nickname:{
                type:String,
            },
            nationality:{
                type:String
            },
        },
        duration:{
            start:{
                type:Number,
            },
            end:{
                type:Number,
            },
        },
        url:{
            type: String,
        }
    },
    {
        timestamps:true, //TODO createdAt , updatedAt
        versionKey: false
    }

);
/**
 * Implementar metodo propio con relacion a storage
 */
 TracksScheme.statics.findAllData = function (){
    const joinData = this.aggregate([
        {
            $lookup:{
                from: "storages",
                localField: "mediaId",
                foreignField: "_id",
                as: "audio",
            },
        },
        {
            $unwind:"$audio"
        }
    ])
    return joinData
};

TracksScheme.statics.findOneData = function (id){
    const joinData = this.aggregate([
        {
            $lookup:{
                from: "storages",
                localField: "mediaId",
                foreignField: "_id",
                as: "audio",
            },
        },
        {
            $unwind:"$audio"
        },
        {
            $match:{
                _id:mongoose.Types.ObjectId(id)
            }
        }
    ])
    return joinData
}



TracksScheme.plugin(mongooseDelete, {overrideMethods:"all"});
module.exports = mongoose.model("tracks",TracksScheme)