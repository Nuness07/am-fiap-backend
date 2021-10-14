const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class UserModel {
  async findAll() {
    const rows = await connection('usuarios');
    return rows;
  }

  async findById(id) {
    let row = {}
    await connection('usuarios').select(['usuarios.*', 'feedbacks.* as feedbacks']).where('id_usuario', id).leftJoin('feedbacks', 'feedbacks.id_usuario_recebeu', 'usuarios.id_usuario').then((data) => {
      console.log(data);
      const usuario = {
        id_usuario: data[0].id_usuario,
        email: data[0].email,
        senha: data[0].senha,
        nome: data[0].nome,
        sobrenome: data[0].sobrenome,
        cpf: data[0].cpf,
        foto: data[0].foto,
        cargo: data[0].cargo,
        data_admissao: data[0].data_admissao,
        salario_atual: data[0].salario_atual,
        salario_anterior: data[0].salario_anterior,
        is_gerente: data[0].is_gerente,
        feedback_semanal: data[0].feedback_semanal,
        localidade_filial: data[0].localidade_filial,
        feedbacks: [],
      }

      if(data[0].id_feedback){
        data.forEach(((feedback) => {
          const feedbackObject = {
            id_feedback: feedback.id_feedback,
            nivel_feedback: feedback.nivel_feedback,
            assunto: feedback.assunto,
            feedback: feedback.feedback,
            id_usuario_enviou: feedback.id_usuario_enviou,
          };
          usuario.feedbacks.push(feedbackObject)
        }));
      }
      row = usuario;
    });
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
