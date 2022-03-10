const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/usersDB"
mongoose.connect("mongodb://localhost:27017/usersDB")

const refreshTokenSchema = {
    userId: String,
    token : String
}
const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema)
module.exports = RefreshToken