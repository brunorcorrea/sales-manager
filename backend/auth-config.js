import { use } from "passport";
import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

use(
  new JwtStrategy(options, (payload, done) => {
    // Find the user in the database and return it
    // Call done() with an error if the user doesn't exist

    let user = {
      name: "Bruno"
    };

    console.log("Texts")

    done(null, user);
  })
);
