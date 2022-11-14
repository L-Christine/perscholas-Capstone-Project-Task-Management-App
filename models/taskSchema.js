const mongoose = require('mongoose');

const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: false,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Task', taskSchema)