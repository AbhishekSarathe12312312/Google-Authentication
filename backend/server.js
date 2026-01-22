require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const connectDB = require("./config/db");
const UserModel = require("./models/user.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();

connectDB();
app.use(passport.initialize());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let existingUser = await UserModel.findOne({
          email: profile.emails[0].value,
        });

        if (existingUser) {
          return cb(null, existingUser);
        }
        
        
        let newUser = await UserModel.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          mobile: "9999990000",
          google_id: profile.id,
          profileImg: profile.photos[0].value,
          provider: "google",
        });
        return cb(null, newUser);
      } catch (error) {
        return cb(error, null);
      }
    }
  )
);

app.get("/", (req, res) => {
  return res.redirect("http://localhost:5173/");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    session: false,
  }),
  (req, res) => {
    if (!req.user) {
      return res.redirect("/failure");
    }
    const frontendUrl = "http://localhost:5173/profile";
    const params = new URLSearchParams({
      name: req.user.name || "",
      email: req.user.email || "",
      img: req.user.profileImg || "",
    });
    res.redirect(`${frontendUrl}?${params.toString()}`);
  }
);

app.get("/failure", (req, res) => {
  return res.redirect("http://localhost:5173/?error=auth");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
