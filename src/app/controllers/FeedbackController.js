const { response } = require('express');
const FeedbackModel = require('../models/FeedbackModel');

class FeedbackController {
  // Listar todos os usuários
  async index(req, res) {
    console.log('chamou o index');
    const feedback = await FeedbackModel.findAll();
    res.json(feedback);
  }

  // Listar um usuário em especifico
  async show(req, res) {
    const { id } = req.params;
    const feedback = await FeedbackModel.findById(id);

    if (!feedback) {
      return response.status(404).json({ error: 'feedback Not Found' });
    }

    return res.send(feedback);
  }

  // Criar um usuário
  async store(req, res) {
    const feedbackBody = req.body;

    const feedback = await FeedbackModel.create(feedbackBody);

    return res.send(feedback);
  }

  // Atualizar um usuário
  async update(req, res) {
    const { id } = req.params;

    const feedback = await FeedbackModel.update(id, req.body);

    return res.send(feedback);
  }

  // Deletar um usuário
  async delete(req, res) {
    const { id } = req.params;

    await FeedbackModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new FeedbackController();
