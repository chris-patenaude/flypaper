const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const config = require("../config");

const strategy = new Auth0Strategy(
  {
    domain: config.auth0.domain,
    clientID: config.auth0.clientId,
    clientSecret: config.auth0.clientSecret,
    callbackURL: config.auth0.callbackURL,
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

module.exports = async (app) => {
  passport.use(strategy);
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  app.use(passport.initialize());
  app.use(passport.session());
};
