const mongoose = require('mongoose')

const RoleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Role', RoleSchema)
