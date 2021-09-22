const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const dataSchema = new Schema({
    end_year: {
        type : Number,
        // required:true,

    },
    intensity:{
        type:Number,
        // required:true,

    } ,
    sector: {
        type: String
        // required:true,

    },
    topic: {
        type: String
        // required:true,

    },
    insight: {
        type: String
        // required:true,

    },
    url: {
        type: String
        // required:true,

    },
    region: {
        type: String

    },
    start_year: {
        type: String

    },
    impact: {
        type: String
    },
    added:  {
        type: String
    },
    published: {
        type: String
    },
    country:  {
        type: String
    },
    relevance: {
        type: Number
    },
    pestle:  {
        type: String
    },
    source:  {
        type: String
    },
    title:  {
        type: String
    },
    likelihood:  {
        type: Number
    }
    // pestle: {
    //     type: String,
    // }
})


const Datalist = mongoose.model('Datalist', dataSchema);

module.exports = Datalist;