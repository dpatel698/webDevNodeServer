const model = require('./profile-model');

const findProfileById = (id) => model.findById(id);
const updateProfile = (id, profile) => model.updateOne({_id: id},
    {$set: profile}).then();
const getProfile = () => model.aggregate([{$sample: {size: 1}}]);

module.exports = {
    findProfileById, updateProfile, getProfile
};
