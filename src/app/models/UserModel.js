const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class UserModel {
  async findAll() {
    const rows = await connection('usuarios');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('usuarios').where('id_usuario', id);
    return row;
  }

  async findByEmail(email) {
    const [row] = await connection('usuarios').where('email', email);
    return row;
  }

  async create(body) {
    const row = await connection('usuarios').returning('*').insert({id_usuario: uuidv4(), ...body});
    return row;
  }

  async update(id, body){
    // console.log(...body);
    await connection('usuarios').where('id_usuario', id).update({...body}), [body];
    console.log(body);
  }

  async delete(id) {
    const deleteOp = await connection('usuarios')
      .where('id_usuario', id).del();

    return deleteOp;
  }
}

module.exports = new UserModel();
