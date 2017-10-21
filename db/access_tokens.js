'use strict';

const tokens = {};

module.exports.find = (key, done) => {
  if (tokens[key]) return done(null, tokens[key]);
  return done(new Error('Token Not Found'));
};

module.exports.findByUserIdAndClientId = (userId, clientId, done) => {
    for (let token in tokens) {
        if(tokens.hasOwnProperty(token)){
            if (tokens[token].userId === userId && tokens[token].clientId === clientId) return done(null, token);
        }
  }
  return done(new Error('Token Not Found'));
};

module.exports.save = (token, userId, clientId, done) => {
  tokens[token] = { userId:userId, clientId:clientId };
  done();
};
