const { verifyKey } = require("discord-interactions");

module.exports = (req, res, next) => {
  const signature = req.header("X-Signature-Ed25519");
  const timestamp = req.header("X-Signature-Timestamp");

  if (!signature || !timestamp) {
    return res.status(401).send("Missing Discord signature headers.");
  }

  const isValidRequest = verifyKey(
    req.rawBody,
    signature,
    timestamp,
    process.env.DISCORD_PUBLIC_KEY
  );

  if (!isValidRequest) {
    return res.status(401).send("Invalid request signature.");
  }

  next();
};