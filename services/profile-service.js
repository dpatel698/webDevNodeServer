let dao = require('../db/profile/profile-dao');
module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        dao.getProfile().then(profile => res.json(profile[0]));
    }
    const updateCurrentProfile = (req, res) => {
        const id = req.params['id'];
        dao.findProfileById(id).then(profile => {
            const oldProfile = profile.toObject();
            const newProfile = {
                ...oldProfile,
                ...req.body
            };
            dao.updateProfile(id, newProfile).then();
            res.json(newProfile);
        });
    }

    app.post('/api/profile/:id', updateCurrentProfile);
    app.get('/api/profile', getCurrentProfile);
};