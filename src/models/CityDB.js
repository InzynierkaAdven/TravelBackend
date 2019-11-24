const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    _id: false,
    latitude: {
        type: Number,
        required: true
    },
    longtitude: {
        type: Number,
        required: true
    }
})

const AddressSchema = mongoose.Schema({
    _id: false,
    street: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
})

const PriceSchema = mongoose.Schema({
    _id: false,
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
})

const CommentSchema = mongoose.Schema({
    _id: false,
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const GradeSchema = mongoose.Schema({
    _id: false,
    author: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
});





const HotelSchema = mongoose.Schema({
    _id: false,
    name: {
        type: String,
        required: true
    },
    num_of_stars: {
        type: Number,
        required: false,
        min: 1,
        max: 6
    },
    avg_price: {
        type: PriceSchema,
        required: false
    },
    location: {
        type: LocationSchema,
        unique: true
    },
    address: {
        type: AddressSchema,
        unique: true
    },
    comments: [CommentSchema],
    grades: [GradeSchema]
});

const FoodSchema = mongoose.Schema({
    _id: false,
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    location: {
        type: LocationSchema,
        unique: true
    },
    address: {
        type: AddressSchema,
        unique: true
    },
    comments: [CommentSchema],
    grades: [GradeSchema]
});

const EventSchema = mongoose.Schema({
    _id: false,
    name: {
        type: String,
        required: true
    },
    duration: {
        beggining: {
            type: Date,
            required: false //// maybe there should be true
        },
        end: {
            type: Date,
            required: false
        },
        required: false
    },
    location: {
        type: LocationSchema,
        unique: true
    },
    address: {
        type: AddressSchema,
        unique: true
    },
    price: {
        type: PriceSchema,
        required: false
    },
    comments: [CommentSchema]
});

const AtractionSchema = mongoose.Schema({
    _id: false,
    name: {
        type: String,
        required: true
    },
    location: {
        type: LocationSchema,
        unique: true
    },
    address: {
        type: AddressSchema,
        unique: true
    },
    price: {
        type: PriceSchema,
        required: false
    },
    comments: [CommentSchema],
    grades: [GradeSchema]
});

const AdditionalInfoSchema = mongoose.Schema({
    _id: false,
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
});

const CityDBSchema = mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    lng: {
        type: String,
        required: true
    },
    hotels: [HotelSchema],
    foods: [FoodSchema],
    events: [EventSchema],
    atractions: [AtractionSchema],
    comments: [CommentSchema],
    grades: [GradeSchema],
    additional_info: [AdditionalInfoSchema]

});

module.exports = mongoose.model('CityDB', CityDBSchema);