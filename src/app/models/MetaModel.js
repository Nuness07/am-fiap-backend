const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class MetaModel {
  async findAll() {
    const rows = await connection('metas');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('metas').where('id_meta', id);
    return row;
  }

  async create(body) {
    const row = await connection('metas').returning('*').insert({id_meta: uuidv4(), ...body});
    return row;
  }

  async update(id, body){
    // console.log(...body);
    await connection('metas').where('id_meta', id).update({...body}), [body];
    console.log(body);
  }

  async delete(id) {
    const deleteOp = await connection('metas')
      .where('id_meta', id).del();

    return deleteOp;
  }
}

module.exports = new MetaModel();
