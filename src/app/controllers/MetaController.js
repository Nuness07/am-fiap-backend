const { response } = require('express');
const MetaModel = require('../models/MetaModel');

class MetaController {
  // Listar todos os usuários
  async index(req, res) {
    console.log('chamou o index');
    const meta = await MetaModel.findAll();
    res.json(meta);
  }

  // Listar um usuário em especifico
  async show(req, res) {
    const { id } = req.params;
    const meta = await MetaModel.findById(id);

    if (!meta) {
      return response.status(404).json({ error: 'meta Not Found' });
    }

    return res.send(meta);
  }

  // Criar um usuário
  async store(req, res) {
    const metaBody = req.body;

    const meta = await MetaModel.create(metaBody);

    return res.send(meta);
  }

  // Atualizar um usuário
  async update(req, res) {
    const { id } = req.params;

    const meta = await MetaModel.update(id, req.body);

    return res.send(meta);
  }

  // Deletar um usuário
  async delete(req, res) {
    const { id } = req.params;

    await MetaModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new MetaController();
