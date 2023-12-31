import mongoose from "mongoose";

const Hotelschema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    distance: {
        type: String,
        require: true
    },
    photo: {
        type: [String]
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String]
    },
    cheapestPrice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    }
})

export default mongoose.model("Hotel", Hotelschema)