const mongoose = require('mongoose')
const item = require('./item')

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
        type: String
    },
    category: {
        type: String
    },
    date: {
        type: Date
    },
    description: {
        type: String
    }
  }, {
    timestamps: true
  }
)

module.exports = mongoose.model('Task', taskSchema)