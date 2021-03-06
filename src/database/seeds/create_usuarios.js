exports.seed = function(knex){
  return knex('usuarios')
      .del()
      .then(function(){
          return knex('usuarios').insert([
            {
              id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e768",
              email: "thaiscampos@ey.com.br",
              senha: "senhateste",
              nome: "Thais",
              sobrenome: "Larissa Campos Neves",
              cpf: "05519824118",
              foto: "Lorem ipsum",
              cargo: "Desenvolvedora Mobile",
              data_admissao: "12/10/2002",
              salario_atual: "15000",
              salario_anterior: "8200",
              is_gerente: true,
              feedback_semanal: false,
              localidade_filial: "Cuiabá"
          },
          {
            id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e769",
            email: "gabrielnunes@ey.com.br",
            senha: "senhateste",
            nome: "Gabriel",
            sobrenome: "Nunes Monteiro ferreira",
            cpf: "49835719810",
            foto: "Lorem ipsum",
            cargo: "Desenvolvedor Front-End",
            data_admissao: "12/10/2000",
            salario_atual: "5000",
            salario_anterior: "2000",
            is_gerente: false,
            feedback_semanal: false,
            localidade_filial: "São Paulo"
        },
        {
          id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e765",
          email: "gerdersilva@ey.com.br",
          senha: "senhateste",
          nome: "Gerder",
          sobrenome: "Silva",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "Desenvolvedor Back-End",
          data_admissao: "25/08/2015",
          salario_atual: "15000",
          salario_anterior: "12000",
          is_gerente: true,
          feedback_semanal: false,
          localidade_filial: "São Paulo"
        },
        {
          id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e761",
          email: "admonteiro@ey.com.br",
          senha: "senhateste",
          nome: "Adriana",
          sobrenome: "Monteiro",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "QA",
          data_admissao: "25/08/2010",
          salario_atual: "2000",
          salario_anterior: "1000",
          is_gerente: false,
          feedback_semanal: false,
          localidade_filial: "São Paulo"
        },
        {
          id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e742",
          email: "brunopalotta@ey.com.br",
          senha: "senhateste",
          nome: "Bruno",
          sobrenome: "Palotta",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "DBA",
          data_admissao: "25/08/2015",
          salario_atual: "15000",
          salario_anterior: "5000",
          is_gerente: true,
          feedback_semanal: false,
          localidade_filial: "Campinas"
        },
        {
          id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e585",
          email: "lucasmoretto@ey.com.br",
          senha: "senhateste",
          nome: "Lucas",
          sobrenome: "Moretto Merlo",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "Desenvolvedor Back-End",
          data_admissao: "25/04/2012",
          salario_atual: "6000",
          salario_anterior: "2000",
          is_gerente: false,
          feedback_semanal: false,
          localidade_filial: "Rio de Janeiro"
        },
        {
          id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e478",
          email: "email1@ey.com.br",
          senha: "senhateste",
          nome: "Pedro",
          sobrenome: "Alves",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "Desenvolvedor Back-End",
          data_admissao: "10/06/2011",
          salario_atual: "15000",
          salario_anterior: "12000",
          is_gerente: false,
          feedback_semanal: false,
          localidade_filial: "São Paulo"
        },
        {
          id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e361",
          email: "email2@ey.com.br",
          senha: "senhateste",
          nome: "Rafael",
          sobrenome: "da Silva",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "Desenvolvedor Mobile",
          data_admissao: "10/06/2003",
          salario_atual: "15000",
          salario_anterior: "12000",
          is_gerente: false,
          feedback_semanal: false,
          localidade_filial: "São Paulo"
        },
        {
          id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e712",
          email: "email3@ey.com.br",
          senha: "senhateste",
          nome: "SAra",
          sobrenome: "Aparecida",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "Gerente de projetos",
          data_admissao: "10/06/1992",
          salario_atual: "20000",
          salario_anterior: "12000",
          is_gerente: false,
          feedback_semanal: false,
          localidade_filial: "Brasilia"
        },
        {
          id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e123",
          email: "email4@ey.com.br",
          senha: "senhateste",
          nome: "Gustavo",
          sobrenome: "Poschetino",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "Desenvolvedor Full-Stack",
          data_admissao: "10/06/2011",
          salario_atual: "15000",
          salario_anterior: "12000",
          is_gerente: false,
          feedback_semanal: false,
          localidade_filial: "São Paulo"
        },
        {
          id_usuario: "c3ab00ab-9538-4a35-ac72-b3c4ea26e325",
          email: "email5@ey.com.br",
          senha: "senhateste",
          nome: "Rubens",
          sobrenome: "Mota",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "Desenvolvedor Mobile",
          data_admissao: "10/06/2009",
          salario_atual: "8000",
          salario_anterior: "2000",
          is_gerente: false,
          feedback_semanal: false,
          localidade_filial: "São Paulo"
        },
        {
          id_usuario: "c3ab00ab-9538-4a35-ac72-b3c1ea26e474",
          email: "email6@ey.com.br",
          senha: "senhateste",
          nome: "Daniela",
          sobrenome: "Da silva andrade",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "Líder de Projetos",
          data_admissao: "10/06/2011",
          salario_atual: "25000",
          salario_anterior: "12000",
          is_gerente: true,
          feedback_semanal: false,
          localidade_filial: "São Paulo"
        },
        {
          id_usuario: "c5ab00ab-9538-4a35-ac72-b3c4ea26e478",
          email: "email7@ey.com.br",
          senha: "senhateste",
          nome: "Abner",
          sobrenome: "Santos",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "Infra Sênior",
          data_admissao: "10/06/2011",
          salario_atual: "15000",
          salario_anterior: "12000",
          is_gerente: false,
          feedback_semanal: false,
          localidade_filial: "São Paulo"
        },
        {
          id_usuario: "c3ab00ab-9523-4a35-ac72-b3c4ea26e478",
          email: "email8@ey.com.br",
          senha: "senhateste",
          nome: "Samanta",
          sobrenome: "Andrade",
          cpf: "49835719855",
          foto: "Lorem ipsum",
          cargo: "Desenvolvedora Back-End",
          data_admissao: "10/06/2011",
          salario_atual: "15000",
          salario_anterior: "12000",
          is_gerente: true,
          feedback_semanal: false,
          localidade_filial: "São Paulo"
        },
          ])
      })
}