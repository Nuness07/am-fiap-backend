const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

class AuthController {
  async index(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findByEmail(email);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    if (user.senha !== password) {
      return res.status(400).json({ error: 'Usuário não autenticado' });
    }

    const token = jwt.sign({ _id: user.id_usuario }, 'secret');

    return res.json({
      auth: true,
      token,
    });
  }

  async user(req, res) {
    try {
      const token = req.headers.authorization;
      console.log('token ->', token)
      const claims = jwt.verify(token, 'secret');
      if (!claims) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const { _id } = claims;

      const { senha, ...data } = await UserModel.findById(_id);

      return res.json(data);
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  logout(req, res) {
    res.cookie('x-access-token', '', {
      maxAge: 0,
    });

    res.send('logout success');
  }
}

module.exports = new AuthController();
