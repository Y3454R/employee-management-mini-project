const jwt = require("jsonwebtoken");

// Middleware to verify the access token
const authenticateToken = (req, res, next) => {
  // Get the token from the Authorization header
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Token not provided" });
  }

  // Verify the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden: Invalid token" });
    }

    // Attach the user to the request for further processing
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
