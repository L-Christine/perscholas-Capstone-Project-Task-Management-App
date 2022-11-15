const mongoose = require('mongoose');

const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Task', taskSchema)