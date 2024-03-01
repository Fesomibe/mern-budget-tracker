const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  checkToken
};

function checkToken(req, res) {
  if (req.user && req.user.user) {
    // Token is valid, respond with user information or any relevant data
    res.json({ user: req.user.user, exp: req.exp });
  } else {
    // Token is invalid or missing, respond with Unauthorized status
    res.status(401).json({ message: 'Unauthorized' });
  }
}


async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}