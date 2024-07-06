import dotenv from "dotenv";
import passport from "passport";
import {
    ExtractJwt,
    Strategy as JwtStrategy,
    StrategyOptions,
} from "passport-jwt";

dotenv.config();

const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET as string,
};

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
    try {
        done(null, payload);
    } catch (error) {
        done(error, false);
    }
});

passport.use(jwtStrategy);

export default passport;
