const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
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
    },
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

const BasicInfoSchema = mongoose.Schema({
    _id: false,
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location: LocationSchema
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
    location: LocationSchema,
    address: AddressSchema,
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
    location: LocationSchema,
    address: AddressSchema,
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
    location: LocationSchema,
    address: AddressSchema,
    price: {
        type: PriceSchema,
        required: false
    },
    comments: [CommentSchema]
});

const AttractionSchema = mongoose.Schema({
    _id: false,
    name: {
        type: String,
        required: true
    },
    location: LocationSchema,
    address: AddressSchema,
    price: {
        type: PriceSchema,
        required: false
    },
    comments: [CommentSchema],
    grades: [GradeSchema]
});

const CitySchema = mongoose.Schema({
    basic_info: {
        type: BasicInfoSchema,
        required: true
    },
    hotels: [HotelSchema],
    foods: [FoodSchema],
    events: [EventSchema],
    atractions: [AttractionSchema],
    comments: [CommentSchema],
    grades: [GradeSchema]

});

module.exports = mongoose.model('City', CitySchema);