const { Router } = require("express");
const jwt = require("jsonwebtoken");

const router = Router();

// Hardcoded admin credentials
const adminCredentials = {
  username: "admin",
  password: "admin",
};

router.post("/", (req, res) => {
  const { username, password } = req.body;

  // Check if the provided credentials match the admin credentials
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    // Generate an access token
    const accessToken = jwt.sign(
      { username: adminCredentials.username },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    // Generate a refresh token (you may want to store this securely on the server and handle its expiration)
    const refreshToken = jwt.sign(
      { username: adminCredentials.username },
      process.env.REFRESH_TOKEN_SECRET
    );

    res.json({ accessToken, refreshToken });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;
