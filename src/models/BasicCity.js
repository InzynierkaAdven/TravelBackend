const mongoose = require('mongoose');

const BasicInfoSchema = mongoose.Schema({
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
    }
});

// BasicInfoSchema.plugin(URLSlugs('name', {
//     field: 'slug'
// }))

module.exports = mongoose.model('BasicCity', BasicInfoSchema);