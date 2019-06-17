const loadUsers = (userIds, load, done) => {
    return done(userIds.map(elem => load(elem)));
};



module.exports = loadUsers;