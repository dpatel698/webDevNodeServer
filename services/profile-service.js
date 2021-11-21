let profile = require('../data/profile.json');
module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }
    const updateCurrentProfile = (req, res) => {
        const newProfile= {
            ...profile,
            ...req.body
        }
        profile = newProfile
        res.json(newProfile)
    }

    app.post('/api/profile', updateCurrentProfile);
    app.get('/api/profile', getCurrentProfile);
};