const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class FeedbacksModel {
  async findAll() {
    const rows = await connection('feedbacks');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('feedbacks').where('id_feedback', id);
    return row;
  }

  async create(body) {
    const row = await connection('feedbacks').returning('*').insert({id_feedback: uuidv4(), ...body});
    return row;
  }

  async update(id, body){
    // console.log(...body);
    await connection('feedbacks').where('id_feedback', id).update({...body}), [body];
    console.log(body);
  }

  async delete(id) {
    const deleteOp = await connection('feedbacks')
      .where('id_feedback', id).del();

    return deleteOp;
  }
}

module.exports = new FeedbacksModel();
