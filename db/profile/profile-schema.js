const mongoose = require('mongoose');
const schema = mongoose.Schema({
    firstName: String, lastName: String, handle: String,
    profilePicture: String, bannerPicture: String,
    bio: String,
    website: String, tweetCount: Number,
    location: String, dateOfBirth: String, dateJoined: String,
    followingCount: Number, followersCount: Number
}, {collection: "profiles"});
module.exports = schema;
