const mongoose = require('mongoose');

const personschema = new mongoose.schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true

        }
    });

    const Person = mongoose.model('Person', personschema);

    module.exports = Person;