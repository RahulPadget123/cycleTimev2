const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    name: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    plant: {
        type: String
    },
    project: {
        type: String
    },
    model: {
        type: String
    },
    section: {
        type: String
    },
    stationNumber: {
        type: Number
    },
    stationName: {
        type: String
    },
    ct1: {
        type: Number
    },
    ct2: {
        type: Number
    },
    ct3: {
        type: Number
    },
    ct4: {
        type: Number
    },
    ct5: {
        type: Number
    },
    avgCt: {
        type: Number
    },
    numberOfStation: {
        type: Number
    },
    numberOfDevices: {
        type: Number
    },
    numberOfManPower: {
        type: Number
    },
    numberOfMachine: {
        type: Number
    },
    numberOfJigs: {
        type: Number
    },
    finalAvgCt: {
        type: Number
    },
    taktTime:{
        type: Number
    },
    uph100Per: {
        type: Number
    },
    uph90Per: {
        type: Number
    },
});

module.exports = mongoose.model("info",infoSchema);