'use strict';

const codes = {
    "qhr0NqJhXhyfTYgo":{ clientId:"1", redirectUri:"https://xiaodu.baidu.com/saiya/auth/760e719fedb4655e5917297f857e5791", userId:"1" }
};

module.exports.find = (key, done) => {
    console.log("find:"+key);
  if (codes[key]) return done(null, codes[key]);
  return done(new Error('Code Not Found'));
};

module.exports.save = (code, clientId, redirectUri, userId, done) => {
  codes[code] = { clientId, redirectUri, userId };
console.log("save:",codes);
  done();
};
