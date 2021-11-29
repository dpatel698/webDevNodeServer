let dao = require('../db/tweets/tweet-dao')

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    const createTweet = (req, res) => {
        const newTweet = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "/images/react.png",
            "logo-image": "/images/react.png",
            "stats": {
                "comments": 0,
                "retweets": 0,
                "likes": 0
            },
            ...req.body,
        }
        dao.createTweet(newTweet).then()
        res.json(req.body.tweet);
    }

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        dao.deleteTweet(id).then();
        res.sendStatus(200);
    }

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        dao.findTweetById(id).then(tweet => {
            let newTweet = tweet.toObject();
            if (newTweet.liked === true) {
                newTweet.liked = false;
                newTweet.stats.likes--;
            } else {
                newTweet.liked = true;
                newTweet.stats.likes++;
            }
            console.log(newTweet);
            dao.updateTweet(id, newTweet).then()
            res.sendStatus(200);
        })

    }


    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', createTweet);
    app.get('/api/tweets', findAllTweets);
}
